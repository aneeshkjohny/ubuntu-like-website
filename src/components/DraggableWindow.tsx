"use client";
import { useState, useRef, useEffect, ReactNode } from 'react';

interface DraggableWindowProps {
  title: string;
  initialX?: number;
  initialY?: number;
  width?: number;
  height?: number;
  onClose: () => void;
  children: ReactNode;
}

export default function DraggableWindow({ 
  title, 
  initialX = 100, 
  initialY = 100, 
  width = 600, 
  height = 400,
  onClose, 
  children 
}: DraggableWindowProps) {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const windowStartPos = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartPos.current = { x: e.clientX, y: e.clientY };
    windowStartPos.current = { ...position };
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - dragStartPos.current.x;
      const dy = e.clientY - dragStartPos.current.y;
      setPosition({
        x: windowStartPos.current.x + dx,
        y: Math.max(0, windowStartPos.current.y + dy), // prevent dragging off top screen
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      className="window" 
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`, 
        width: `${width}px`, 
        height: `${height}px`,
        position: 'absolute'
      }}
    >
      <div 
        className="window-header" 
        onMouseDown={handleMouseDown}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        {title}
        <div className="window-controls">
          <div className="window-btn btn-min"></div>
          <div className="window-btn btn-max"></div>
          <div className="window-btn btn-close" onMouseDown={(e) => e.stopPropagation()} onClick={onClose}></div>
        </div>
      </div>
      <div className="window-content" style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: 0 }}>
        {children}
      </div>
    </div>
  );
}
