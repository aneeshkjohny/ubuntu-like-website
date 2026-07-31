import { useState } from 'react';

interface SettingsAppProps {
  currentBg: string;
  onBgChange: (bg: string) => void;
}

export default function SettingsApp({ currentBg, onBgChange }: SettingsAppProps) {
  const [activeTab, setActiveTab] = useState('Background');

  const wallpapers = [
    { name: 'Custom AI Edition', url: 'url("/custom-ubuntu.jpg")' },
    { name: 'Fanny Hagan', url: 'url("/pexels-fanny-hagan-sodervall-842972996-19896963.jpg")' },
    { name: 'Geoffrey Werner', url: 'url("/pexels-geoffrey-werner-202820-627924.jpg")' },
    { name: 'Nunzio Guerrera', url: 'url("/pexels-nunzio-guerrera-669207708-33548617.jpg")' },
    { name: 'Pixabay', url: 'url("/pexels-pixabay-416728.jpg")' },
    { name: 'Classic Gradient', url: 'linear-gradient(135deg, #E95420, #77216F, #2C001E)' }
  ];

  return (
    <div style={{ display: 'flex', height: '100%', width: '100%' }}>
      <div className="settings-sidebar">
        <ul>
          <li className={activeTab === 'Background' ? 'active' : ''} onClick={() => setActiveTab('Background')}>Background</li>
          <li className={activeTab === 'About' ? 'active' : ''} onClick={() => setActiveTab('About')}>About</li>
          <li className={activeTab === 'Contact' ? 'active' : ''} onClick={() => setActiveTab('Contact')}>Contact</li>
        </ul>
      </div>
      <div className="settings-main">
        {activeTab === 'Background' && (
          <div>
            <h3>Background</h3>
            <div className="wallpaper-grid">
              {wallpapers.map((wp) => (
                <div 
                  key={wp.name} 
                  className={`wallpaper-item ${currentBg === wp.url ? 'selected' : ''}`}
                  style={{ backgroundImage: wp.url, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  onClick={() => onBgChange(wp.url)}
                >
                  <span>{wp.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 'About' && (
          <div className="about-section">
            <div className="os-logo">ubuntu</div>
            <h2 style={{ marginBottom: '20px' }}>Ubuntu 24.04 LTS</h2>
            <div style={{ textAlign: 'left', display: 'inline-block' }}>
              <p><strong>OS Name:</strong> Ubuntu 24.04 LTS (Noble Numbat)</p>
              <p><strong>OS Type:</strong> 64-bit</p>
              <p><strong>GNOME Version:</strong> 46</p>
              <p><strong>Windowing System:</strong> Wayland</p>
              <p><strong>Virtualization:</strong> KVM</p>
            </div>
          </div>
        )}

        {activeTab === 'Contact' && (
          <div>
            <h3>Contact Details</h3>
            <div className="contact-card">
              <p><strong>Name:</strong> John Doe (System Administrator)</p>
              <p><strong>Email:</strong> admin@ubuntu-web.local</p>
              <p><strong>Phone:</strong> +1 (555) 019-2024</p>
              <p><strong>Location:</strong> Server Room 4, Data Center Alpha</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
