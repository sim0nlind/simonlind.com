import React, { useRef, useEffect } from "react";
import { Palette } from "@phosphor-icons/react";
import {
  useTheme,
  type AccentColor,
  type FontSize,
  type Appearance,
} from "../../hooks/useTheme";
import "./theme-selector.css";

const accentColors: { value: AccentColor; label: string; color: string }[] = [
  { value: "amber", label: "Amber", color: "#f59e0b" },
  { value: "blue", label: "Blue", color: "#3b82f6" },
  { value: "green", label: "Green", color: "#10b981" },
  { value: "red", label: "Red", color: "#ef4444" },
  { value: "purple", label: "Purple", color: "#8b5cf6" },
  { value: "pink", label: "Pink", color: "#ec4899" },
  { value: "indigo", label: "Indigo", color: "#6366f1" },
  { value: "cyan", label: "Cyan", color: "#06b6d4" },
  { value: "teal", label: "Teal", color: "#14b8a6" },
  { value: "orange", label: "Orange", color: "#f97316" },
  { value: "lime", label: "Lime", color: "#84cc16" },
  { value: "gray", label: "Gray", color: "#6b7280" },
];

const fontSizes: { value: FontSize; label: string }[] = [
  { value: "small", label: "Small" },
  { value: "medium", label: "Medium" },
  { value: "large", label: "Large" },
];

const appearances: { value: Appearance; label: string }[] = [
  { value: "light", label: "Light" },
  { value: "system", label: "System" },
  { value: "dark", label: "Dark" },
];

export default function ThemeSelector() {
  const { theme, updateTheme, resetTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="theme-selector-container" ref={containerRef}>
      <button onClick={toggleMenu} className="theme-selector-trigger">
        <Palette size={16} />
      </button>

      {isOpen && (
        <div
          className="theme-selector-popover"
          style={{
            position: "absolute",
            top: "100%",
            right: 0,
            zIndex: 1000,
          }}
        >
          <div className="theme-selector-menu">
            {/* Accent Colors Section */}
            <div className="theme-selector-section">
              <div className="theme-selector-section-header">Accent</div>
              <div className="theme-selector-color-grid">
                {accentColors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => {
                      updateTheme({ accentColor: color.value });
                      setIsOpen(false);
                    }}
                    className={`theme-selector-color-item ${
                      theme.accentColor === color.value ? "active" : ""
                    }`}
                  >
                    <div
                      className="theme-selector-color-swatch"
                      style={{ backgroundColor: color.color }}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="theme-selector-separator" />

            {/* Font Size Section */}
            <div className="theme-selector-section">
              <div className="theme-selector-section-header">Font size</div>
              <div className="theme-selector-button-group">
                {fontSizes.map((size) => (
                  <button
                    key={size.value}
                    onClick={() => {
                      updateTheme({ fontSize: size.value });
                      setIsOpen(false);
                    }}
                    className={`theme-selector-button-item ${
                      theme.fontSize === size.value ? "active" : ""
                    }`}
                  >
                    <span
                      className="theme-selector-font-size-label"
                      data-size={size.value}
                    >
                      aA
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="theme-selector-separator" />

            {/* Appearance Section */}
            <div className="theme-selector-section">
              <div className="theme-selector-section-header">Appearance</div>
              <div className="theme-selector-button-group">
                {appearances.map((appearance) => (
                  <button
                    key={appearance.value}
                    onClick={() => {
                      updateTheme({ appearance: appearance.value });
                      setIsOpen(false);
                    }}
                    className={`theme-selector-button-item ${
                      theme.appearance === appearance.value ? "active" : ""
                    }`}
                  >
                    {appearance.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="theme-selector-separator" />

            {/* Reset Button */}
            <button
              onClick={() => {
                resetTheme();
                setIsOpen(false);
              }}
              className="theme-selector-reset-item"
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
