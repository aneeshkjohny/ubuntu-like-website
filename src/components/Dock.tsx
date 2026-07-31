"use client";
import { Settings, Mail } from 'lucide-react';

interface DockProps {
  openApps: string[];
  toggleApp: (app: string) => void;
}

export default function Dock({ openApps, toggleApp }: DockProps) {
  const apps = [
    { name: 'Settings', icon: <Settings size={28} strokeWidth={1.5} color="#eee" /> },
    { name: 'Email', icon: <Mail size={28} strokeWidth={1.5} color="#eee" /> },
  ];

  return (
    <div className="dock-container">
      <div className="dock">
        {apps.map((app) => (
          <div 
            key={app.name} 
            className="dock-icon" 
            title={app.name}
            onClick={() => toggleApp(app.name)}
          >
            {app.icon}
            {openApps.includes(app.name) && <div className="dock-indicator" />}
          </div>
        ))}
      </div>
    </div>
  );
}
