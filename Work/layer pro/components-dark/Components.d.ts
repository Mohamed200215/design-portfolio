// Components.d.ts — the complete catalog of the 12 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.AMPMToggle) and usable directly in JSX.
import * as React from 'react';

// figma layer: "AM/PM Toggle" (node 5:69)
export interface AMPMToggleProps {
  className?: string;
  style?: React.CSSProperties;
  selected?: "am" | "pm";
  /** Text content; defaults to "AM". */
  text1?: string;
  /** Text content; defaults to "PM". */
  text2?: string;
}

// figma layer: "Button" (node 2:20)
export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  style2?: "primary" | "secondary";
  state?: "default" | "pressed" | "disabled";
}

// figma layer: "Daily Log — AM" (node 77:147)
export interface DailyLogAMProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Daily Log — PM" (node 77:166)
export interface DailyLogPMProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Home Indicator" (node 22:284)
export interface HomeIndicatorProps {
  className?: string;
  style?: React.CSSProperties;
  theme?: "light";
}

// figma layer: "Onboarding — Skin Type" (node 77:13)
export interface OnboardingSkinTypeProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Product Shelf" (node 77:248)
export interface ProductShelfProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Progress Ring" (node 5:36)
export interface ProgressRingProps {
  className?: string;
  style?: React.CSSProperties;
  streakCount?: string;
  percentage?: "0" | "25" | "50" | "75" | "100";
  /** Text content; defaults to "day streak". */
  text1?: string;
  /** Text content; defaults to "Best 24d". */
  text2?: string;
}

// figma layer: "Routine Builder" (node 77:98)
export interface RoutineBuilderProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Status Bar" (node 22:280)
export interface StatusBarProps {
  className?: string;
  style?: React.CSSProperties;
  theme?: "light";
  /** Text content; defaults to "9:41". */
  text1?: string;
}

// figma layer: "Step Row" (node 3:34)
export interface StepRowProps {
  className?: string;
  style?: React.CSSProperties;
  stepNumber?: string;
  state?: "upcoming" | "active" | "completed" | "skipped";
  title?: string;
  subtitle?: string;
  /** Text content; defaults to "–". */
  text1?: string;
}

// figma layer: "Streak / Progress" (node 77:186)
export interface StreakProgressProps {
  className?: string;
  style?: React.CSSProperties;
}

declare const AMPMToggle: React.FC<AMPMToggleProps>;
declare const Button: React.FC<ButtonProps>;
declare const DailyLogAM: React.FC<DailyLogAMProps>;
declare const DailyLogPM: React.FC<DailyLogPMProps>;
declare const HomeIndicator: React.FC<HomeIndicatorProps>;
declare const OnboardingSkinType: React.FC<OnboardingSkinTypeProps>;
declare const ProductShelf: React.FC<ProductShelfProps>;
declare const ProgressRing: React.FC<ProgressRingProps>;
declare const RoutineBuilder: React.FC<RoutineBuilderProps>;
declare const StatusBar: React.FC<StatusBarProps>;
declare const StepRow: React.FC<StepRowProps>;
declare const StreakProgress: React.FC<StreakProgressProps>;
declare global {
  interface Window {
    AMPMToggle: React.FC<AMPMToggleProps>;
    Button: React.FC<ButtonProps>;
    DailyLogAM: React.FC<DailyLogAMProps>;
    DailyLogPM: React.FC<DailyLogPMProps>;
    HomeIndicator: React.FC<HomeIndicatorProps>;
    OnboardingSkinType: React.FC<OnboardingSkinTypeProps>;
    ProductShelf: React.FC<ProductShelfProps>;
    ProgressRing: React.FC<ProgressRingProps>;
    RoutineBuilder: React.FC<RoutineBuilderProps>;
    StatusBar: React.FC<StatusBarProps>;
    StepRow: React.FC<StepRowProps>;
    StreakProgress: React.FC<StreakProgressProps>;
  }
}
