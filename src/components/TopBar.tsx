"use client";
import { useState, useEffect, useRef } from 'react';
import { Wifi, BatteryFull, Volume2, Power, Bluetooth, Moon, SunMedium, Settings, Lock, ChevronRight } from 'lucide-react';

interface TopBarProps {
  onActivitiesClick: () => void;
  brightness: number;
  onBrightnessChange: (val: number) => void;
}

export default function TopBar({ onActivitiesClick, brightness, onBrightnessChange }: TopBarProps) {
  const [time, setTime] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [showSystemMenu, setShowSystemMenu] = useState(false);
  const [dateObj, setDateObj] = useState(new Date());
  
  const calendarRef = useRef<HTMLDivElement>(null);
  const systemMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setShowCalendar(false);
      }
      if (systemMenuRef.current && !systemMenuRef.current.contains(event.target as Node)) {
        setShowSystemMenu(false);
      }
    };

    if (showCalendar || showSystemMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCalendar, showSystemMenu]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setDateObj(now);
      setTime(now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }) + "  " + now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const renderCalendarDays = () => {
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <div key={i} className={`calendar-day ${i === dateObj.getDate() ? 'active' : ''}`}>
          {i}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="topbar">
      <div className="topbar-section">
        <div className="topbar-item" onClick={onActivitiesClick} style={{ fontWeight: 'bold' }}>Activities</div>
      </div>
      <div className="topbar-section" style={{ position: 'relative' }} ref={calendarRef}>
        <div className="topbar-item" onClick={() => { setShowCalendar(!showCalendar); setShowSystemMenu(false); }}>
          {time || "Loading..."}
        </div>
        {showCalendar && (
          <div className="calendar-dropdown">
            <div className="calendar-header">
              {dateObj.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </div>
            <div className="calendar-grid">
              <div className="day-name">Su</div>
              <div className="day-name">Mo</div>
              <div className="day-name">Tu</div>
              <div className="day-name">We</div>
              <div className="day-name">Th</div>
              <div className="day-name">Fr</div>
              <div className="day-name">Sa</div>
              {renderCalendarDays()}
            </div>
          </div>
        )}
      </div>
      <div className="topbar-section" style={{ position: 'relative' }} ref={systemMenuRef}>
        <div 
          className="topbar-item" 
          style={{ gap: '10px', padding: '0 10px', cursor: 'pointer' }}
          onClick={() => { setShowSystemMenu(!showSystemMenu); setShowCalendar(false); }}
        >
          <Wifi size={16} strokeWidth={2} />
          <Volume2 size={16} strokeWidth={2} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <BatteryFull size={16} strokeWidth={2} />
            <span style={{ fontSize: '0.8rem' }}>100%</span>
          </div>
        </div>

        {showSystemMenu && (
          <div className="system-menu-dropdown">
            <div className="system-menu-row">
              <Volume2 size={18} />
              <input type="range" min="0" max="100" defaultValue="75" className="system-slider" />
            </div>
            <div className="system-menu-row">
              <SunMedium size={18} />
              <input 
                type="range" 
                min="20" 
                max="100" 
                value={brightness}
                onChange={(e) => onBrightnessChange(Number(e.target.value))}
                className="system-slider" 
              />
            </div>
            <hr className="system-menu-divider" />
            
            <div className="system-menu-grid">
              <div className="system-pill">
                <Wifi size={16} /> Wi-Fi <ChevronRight size={16} style={{ marginLeft: 'auto' }} />
              </div>
              <div className="system-pill">
                <Bluetooth size={16} /> Bluetooth <ChevronRight size={16} style={{ marginLeft: 'auto' }} />
              </div>
              <div className="system-pill">
                <BatteryFull size={16} /> Power Mode
              </div>
              <div className="system-pill">
                <Moon size={16} /> Dark Style
              </div>
            </div>

            <hr className="system-menu-divider" />
            <div className="system-menu-footer">
              <div className="system-icon-btn"><Settings size={18} /></div>
              <div className="system-icon-btn"><Lock size={18} /></div>
              <div className="system-icon-btn"><Power size={18} /></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
