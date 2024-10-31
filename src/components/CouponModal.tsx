import React, { useEffect, useState } from 'react';
import { Copy } from 'lucide-react';

interface CouponModalProps {
  show: boolean;
  onClose: () => void;
}

const CouponModal: React.FC<CouponModalProps> = ({ show, onClose }) => {
  const [copied, setCopied] = useState(false);
  const couponCode = "HaloSMS";

  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 5000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  if (!show) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-gradient-to-r from-black/90 via-purple-900/90 to-black/90 text-orange-100 px-6 sm:px-8 py-4 sm:py-6 rounded-lg shadow-[0_0_25px_rgba(0,0,0,0.8)] border-2 border-orange-500/30 animate-float max-w-sm w-full">
        <h2 className="text-xl sm:text-2xl font-horror text-center mb-3 animate-creepy">
          🎃 Your Spooky Reward! 🎃
        </h2>
        <div className="bg-black/50 rounded-lg p-3 flex items-center justify-between gap-2 mb-4">
          <code className="font-mono text-lg sm:text-xl text-orange-400 font-bold">
            {couponCode}
          </code>
          <button
            onClick={handleCopy}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            title="Copy coupon code"
          >
            <Copy className="w-5 h-5 text-orange-400" />
          </button>
        </div>
        <p className="text-center text-orange-300/80 text-sm">
          {copied ? "👻 Copied to clipboard!" : "Click the icon to copy"}
        </p>
      </div>
    </div>
  );
};

export default CouponModal;