import React, { useEffect } from 'react';

interface MessageModalProps {
  show: boolean;
  message: string;
  onClose: () => void;
}

const MessageModal: React.FC<MessageModalProps> = ({ show, message, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 2000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50 p-4">
      <div className="bg-gradient-to-r from-black/90 via-purple-900/90 to-black/90 text-orange-100 px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.8)] backdrop-blur-sm border-2 border-orange-500/30 animate-float">
        <p className="text-lg sm:text-xl font-horror animate-creepy">{message}</p>
      </div>
    </div>
  );
};

export default MessageModal;