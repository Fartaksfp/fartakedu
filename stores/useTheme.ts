import { create } from 'zustand'

interface ThemeState {
  darkMode: boolean;
  toggleTheme: () => void;
}

const useTheme = create<ThemeState>((set) => ({
  darkMode: false,
  toggleTheme: () => set((state: { darkMode: boolean }) => ({ darkMode: !state.darkMode })),
}))

export default useTheme