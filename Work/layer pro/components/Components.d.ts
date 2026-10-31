// Components.d.ts — the complete catalog of the 19 component(s) in
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

// figma layer: "Bag" (node 67:18)
export interface BagProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Button" (node 2:20)
export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  style2?: "primary" | "secondary";
  state?: "default" | "pressed" | "disabled";
}

// figma layer: "Daily Log — AM" (node 8:76)
export interface DailyLogAMProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Daily Log — PM" (node 8:139)
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

// figma layer: "Onboarding — Skin Type" (node 7:11)
export interface OnboardingSkinTypeProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Product Detail (overlay)" (node 13:209)
export interface ProductDetailOverlayProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Product Shelf" (node 12:207)
export interface ProductShelfProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Profile / Settings" (node 77:312)
export interface ProfileSettingsProps {
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

// figma layer: "Recommended — Oily Skin" (node 60:489)
export interface RecommendedOilySkinProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Reminder Toggle" (node 121:16)
export interface ReminderToggleProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "off" | "on";
  /** Text content; defaults to "Remind me". */
  text1?: string;
}

// figma layer: "Routine Builder" (node 8:6)
export interface RoutineBuilderProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Search Products" (node 65:2)
export interface SearchProductsProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Splash" (node 7:2)
export interface SplashProps {
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

// figma layer: "Streak / Progress" (node 12:138)
export interface StreakProgressProps {
  className?: string;
  style?: React.CSSProperties;
}

declare const AMPMToggle: React.FC<AMPMToggleProps>;
declare const Bag: React.FC<BagProps>;
declare const Button: React.FC<ButtonProps>;
declare const DailyLogAM: React.FC<DailyLogAMProps>;
declare const DailyLogPM: React.FC<DailyLogPMProps>;
declare const HomeIndicator: React.FC<HomeIndicatorProps>;
declare const OnboardingSkinType: React.FC<OnboardingSkinTypeProps>;
declare const ProductDetailOverlay: React.FC<ProductDetailOverlayProps>;
declare const ProductShelf: React.FC<ProductShelfProps>;
declare const ProfileSettings: React.FC<ProfileSettingsProps>;
declare const ProgressRing: React.FC<ProgressRingProps>;
declare const RecommendedOilySkin: React.FC<RecommendedOilySkinProps>;
declare const ReminderToggle: React.FC<ReminderToggleProps>;
declare const RoutineBuilder: React.FC<RoutineBuilderProps>;
declare const SearchProducts: React.FC<SearchProductsProps>;
declare const Splash: React.FC<SplashProps>;
declare const StatusBar: React.FC<StatusBarProps>;
declare const StepRow: React.FC<StepRowProps>;
declare const StreakProgress: React.FC<StreakProgressProps>;
declare global {
  interface Window {
    AMPMToggle: React.FC<AMPMToggleProps>;
    Bag: React.FC<BagProps>;
    Button: React.FC<ButtonProps>;
    DailyLogAM: React.FC<DailyLogAMProps>;
    DailyLogPM: React.FC<DailyLogPMProps>;
    HomeIndicator: React.FC<HomeIndicatorProps>;
    OnboardingSkinType: React.FC<OnboardingSkinTypeProps>;
    ProductDetailOverlay: React.FC<ProductDetailOverlayProps>;
    ProductShelf: React.FC<ProductShelfProps>;
    ProfileSettings: React.FC<ProfileSettingsProps>;
    ProgressRing: React.FC<ProgressRingProps>;
    RecommendedOilySkin: React.FC<RecommendedOilySkinProps>;
    ReminderToggle: React.FC<ReminderToggleProps>;
    RoutineBuilder: React.FC<RoutineBuilderProps>;
    SearchProducts: React.FC<SearchProductsProps>;
    Splash: React.FC<SplashProps>;
    StatusBar: React.FC<StatusBarProps>;
    StepRow: React.FC<StepRowProps>;
    StreakProgress: React.FC<StreakProgressProps>;
  }
}
