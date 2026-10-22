import { useEffect, useState } from 'react';

interface ContextMenuProps {
  x: number;
  y: number;
  onClose: () => void;
  onOpenInNewTab?: () => void;
  onCopyLink?: () => void;
}

export default function ContextMenu({ x, y, onClose, onOpenInNewTab, onCopyLink }: ContextMenuProps) {
  const [position, setPosition] = useState({ x, y });

  useEffect(() => {
    const handleClick = () => onClose();
    const handleScroll = () => onClose();
    
    document.addEventListener('click', handleClick);
    document.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('scroll', handleScroll);
    };
  }, [onClose]);

  useEffect(() => {
    const menuWidth = 200;
    const menuHeight = 100;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    let newX = x;
    let newY = y;

    if (x + menuWidth > windowWidth) {
      newX = windowWidth - menuWidth - 10;
    }
    if (y + menuHeight > windowHeight) {
      newY = windowHeight - menuHeight - 10;
    }

    setPosition({ x: newX, y: newY });
  }, [x, y]);

  return (
    <div
      className="fixed z-50 bg-gray-800 border border-gray-700 rounded-lg shadow-xl py-1 min-w-[200px]"
      style={{ left: position.x, top: position.y }}
    >
      {onOpenInNewTab && (
        <button
          onClick={onOpenInNewTab}
          className="w-full px-4 py-2 text-left text-sm text-gray-200 hover:bg-gray-700 flex items-center gap-2"
        >
          <span>↗</span>
          <span>Open in new tab</span>
        </button>
      )}
      {onCopyLink && (
        <button
          onClick={onCopyLink}
          className="w-full px-4 py-2 text-left text-sm text-gray-200 hover:bg-gray-700 flex items-center gap-2"
        >
          <span>📋</span>
          <span>Copy link</span>
        </button>
      )}
    </div>
  );
}
