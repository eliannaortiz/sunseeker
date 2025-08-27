import React, { useState, useEffect } from 'react';
import { Settings, Eye, Type, Contrast, Volume2 } from 'lucide-react';
import Button from './Button';

const AccessibilityMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Apply font size changes
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  useEffect(() => {
    // Apply high contrast mode
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [highContrast]);

  useEffect(() => {
    // Apply reduced motion preference
    if (reducedMotion) {
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    } else {
      document.documentElement.style.removeProperty('--animation-duration');
    }
  }, [reducedMotion]);

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 10, 150));
  };

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 10, 80));
  };

  const resetSettings = () => {
    setFontSize(100);
    setHighContrast(false);
    setReducedMotion(false);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-1/2 left-0 transform -translate-y-1/2 bg-cyan-500 text-white p-3 rounded-r-lg shadow-lg hover:bg-cyan-600 transition-colors z-40 no-print"
        aria-label="Open accessibility menu"
      >
        <Settings size={20} />
      </button>
    );
  }

  return (
    <div className="fixed top-1/2 left-0 transform -translate-y-1/2 bg-white border border-gray-200 rounded-r-lg shadow-xl p-4 w-64 z-40 no-print">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Accessibility</h3>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-500 hover:text-gray-700"
          aria-label="Close accessibility menu"
        >
          ×
        </button>
      </div>

      <div className="space-y-4">
        {/* Font Size Controls */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Type size={16} className="inline mr-2" />
            Font Size ({fontSize}%)
          </label>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={decreaseFontSize}
              disabled={fontSize <= 80}
            >
              A-
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={increaseFontSize}
              disabled={fontSize >= 150}
            >
              A+
            </Button>
          </div>
        </div>

        {/* High Contrast Toggle */}
        <div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={highContrast}
              onChange={(e) => setHighContrast(e.target.checked)}
              className="rounded"
            />
            <Contrast size={16} />
            <span className="text-sm font-medium text-gray-700">High Contrast</span>
          </label>
        </div>

        {/* Reduced Motion Toggle */}
        <div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={reducedMotion}
              onChange={(e) => setReducedMotion(e.target.checked)}
              className="rounded"
            />
            <Eye size={16} />
            <span className="text-sm font-medium text-gray-700">Reduce Motion</span>
          </label>
        </div>

        {/* Reset Button */}
        <Button
          variant="outline"
          size="sm"
          onClick={resetSettings}
          className="w-full"
        >
          Reset to Default
        </Button>

        {/* Screen Reader Info */}
        <div className="text-xs text-gray-500 pt-2 border-t">
          <p>For screen reader support, press Tab to navigate or contact us at +91 83209 12345</p>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityMenu;