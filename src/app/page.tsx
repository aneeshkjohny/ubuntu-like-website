"use client";
import { useState } from 'react';
import TopBar from '@/components/TopBar';
import Dock from '@/components/Dock';
import SettingsApp from '@/components/SettingsApp';
import DraggableWindow from '@/components/DraggableWindow';

export default function Home() {
  const [openApps, setOpenApps] = useState<string[]>([]);
  // Start with the custom AI wallpaper since Noble Numbat was removed
  const [bg, setBg] = useState('url("/custom-ubuntu.jpg")');
  const [brightness, setBrightness] = useState(100);
  
  const toggleApp = (appName: string) => {
    if (openApps.includes(appName)) {
      setOpenApps(openApps.filter(app => app !== appName));
    } else {
      setOpenApps([...openApps, appName]);
    }
  };

  return (
    <div style={{ backgroundImage: bg, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', width: '100vw', filter: `brightness(${brightness}%)`, transition: 'filter 0.1s ease-out' }}>
      <TopBar 
        onActivitiesClick={() => toggleApp('AboutCreator')} 
        brightness={brightness}
        onBrightnessChange={setBrightness}
      />
      <div className="desktop">
        {openApps.includes('AboutCreator') && (
          <DraggableWindow 
            title="About This OS" 
            onClose={() => toggleApp('AboutCreator')}
            initialX={300}
            initialY={100}
            width={400}
            height={380}
          >
            <div style={{ padding: '20px', background: '#ffffff', color: '#333', height: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/mac-icon.jpg" alt="MacBook Icon" style={{ width: '130px', marginBottom: '10px' }} />
              <h2 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#E95420' }}>Ubuntu Web Edition</h2>
              <p style={{ fontSize: '1rem', color: '#444', margin: '0 0 10px 0' }}>
                Designed and Developed by<br/><strong>Aneesh K Johny</strong>
              </p>
              <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.4', maxWidth: '280px', margin: 0 }}>
                Built using cutting-edge web technologies and powered by the <strong>Antigravity</strong> AI assistant.
              </p>
            </div>
          </DraggableWindow>
        )}

        {openApps.includes('Settings') && (
          <DraggableWindow 
            title="Settings" 
            onClose={() => toggleApp('Settings')}
            initialX={100}
            initialY={80}
            width={750}
            height={500}
          >
            <SettingsApp 
              currentBg={bg} 
              onBgChange={setBg} 
            />
          </DraggableWindow>
        )}

        {openApps.includes('Email') && (
          <DraggableWindow 
            title="Email Client" 
            onClose={() => toggleApp('Email')}
            initialX={250}
            initialY={150}
            width={600}
            height={400}
          >
            <div style={{ padding: '20px', background: '#fafafa', color: '#333', height: '100%' }}>
              <h2>Inbox</h2>
              <p>Waiting for user instructions to populate emails...</p>
            </div>
          </DraggableWindow>
        )}

        <Dock openApps={openApps} toggleApp={toggleApp} />
      </div>
    </div>
  );
}
