export type AccentKey = 'emerald' | 'bronze' | 'indigo';
export type Mode = 'dark' | 'light';

export type ViewKey =
  | 'dashboard'
  | 'schedule'
  | 'tutor'
  | 'studio'
  | 'transcriber'
  | 'settings';

export interface Course {
  id: string;
  name: string;
  code: string;
  color: string;
  active: boolean;
  progress: number;
  examDate?: string;
}

export interface ScheduleEvent {
  id: string;
  title: string;
  courseId: string | null;
  date: string;
  startTime: string;
  endTime: string;
  type: 'lecture' | 'exam' | 'assignment' | 'study' | 'other';
  notes?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: number;
  image?: string;
}

export interface TutorSession {
  id: string;
  subject: string;
  messages: ChatMessage[];
  createdAt: number;
}

export type SlideLayout = 'title' | 'content' | 'split' | 'summary' | 'stats';
export type SlidePalette = 'emerald-dark' | 'indigo-dark' | 'bronze-dark' | 'slate-dark' | 'rose-dark' | 'teal-dark';

export interface SlideStat {
  id: string;
  label: string;
  value: string;
}

export interface Slide {
  id: string;
  heading: string;
  body: string;
  bullets: string[];
  layout: SlideLayout;
  accent?: string;
  image?: string;
  category?: string;
  stats?: SlideStat[];
  palette?: SlidePalette;
}

export interface SlideDocument {
  id: string;
  title: string;
  subject: string;
  slides: Slide[];
  updatedAt: number;
  format: 'slides' | 'guide';
}

export interface Transcription {
  id: string;
  title: string;
  text: string;
  createdAt: number;
  duration: number;
}

export interface PomodoroSettings {
  focus: number;
  shortBreak: number;
  longBreak: number;
  longBreakInterval: number;
  autoStart: boolean;
  sound: boolean;
  notifications: boolean;
}

export interface Connectors {
  aiApiKey: string;
  aiBaseUrl: string;
  aiModel: string;
  imageApiKey: string;
}

export interface Settings {
  mode: Mode;
  accent: AccentKey;
  pomodoro: PomodoroSettings;
  aiApiKey: string;
  aiBaseUrl: string;
  aiModel: string;
  userName: string;
  imageApiKey: string;
}

export const DEFAULT_SETTINGS: Settings = {
  mode: 'dark',
  accent: 'emerald',
  pomodoro: {
    focus: 25,
    shortBreak: 5,
    longBreak: 15,
    longBreakInterval: 4,
    autoStart: false,
    sound: true,
    notifications: true,
  },
  aiApiKey: '',
  aiBaseUrl: 'https://api.openai.com/v1',
  aiModel: 'gpt-4o-mini',
  userName: '',
  imageApiKey: '',
};

export const ACCENTS: Record<AccentKey, { name: string; hex: string; scale: Record<number, string> }> = {
  emerald: {
    name: 'Emerald',
    hex: '#10b981',
    scale: {
      50: '#ecfdf5',
      100: '#d1fae5',
      200: '#a7f3d0',
      300: '#6ee7b7',
      400: '#34d399',
      500: '#10b981',
      600: '#059669',
      700: '#047857',
      800: '#065f46',
      900: '#064e3b',
    },
  },
  bronze: {
    name: 'Bronze',
    hex: '#d97706',
    scale: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
    },
  },
  indigo: {
    name: 'Soft Indigo',
    hex: '#6366f1',
    scale: {
      50: '#eef2ff',
      100: '#e0e7ff',
      200: '#c7d2fe',
      300: '#a5b4fc',
      400: '#818cf8',
      500: '#6366f1',
      600: '#4f46e5',
      700: '#4338ca',
      800: '#3730a3',
      900: '#312e81',
    },
  },
};

export const SLIDE_PALETTES: Record<SlidePalette, { name: string; bg: string; card: string; accent: string; text: string; muted: string }> = {
  'emerald-dark': { name: 'Emerald Dusk', bg: 'linear-gradient(135deg, #0a1f1a 0%, #0d2820 100%)', card: 'rgba(16,185,129,0.10)', accent: '#34d399', text: '#ecfdf5', muted: '#86c5a0' },
  'indigo-dark': { name: 'Indigo Night', bg: 'linear-gradient(135deg, #111128 0%, #1a1a3e 100%)', card: 'rgba(99,102,241,0.12)', accent: '#818cf8', text: '#e0e7ff', muted: '#9a9ac8' },
  'bronze-dark': { name: 'Bronze Ember', bg: 'linear-gradient(135deg, #1a1207 0%, #2a1c0e 100%)', card: 'rgba(217,119,6,0.12)', accent: '#fbbf24', text: '#fef3c7', muted: '#c6a86e' },
  'slate-dark': { name: 'Slate Pro', bg: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', card: 'rgba(148,163,184,0.10)', accent: '#38bdf8', text: '#f1f5f9', muted: '#94a3b8' },
  'rose-dark': { name: 'Rose Quartz', bg: 'linear-gradient(135deg, #1a0a14 0%, #2a1024 100%)', card: 'rgba(244,63,94,0.10)', accent: '#fb7185', text: '#ffe4e6', muted: '#c08494' },
  'teal-dark': { name: 'Teal Wave', bg: 'linear-gradient(135deg, #04201e 0%, #06302c 100%)', card: 'rgba(20,184,166,0.10)', accent: '#2dd4bf', text: '#ccfbf1', muted: '#80b8ad' },
};
