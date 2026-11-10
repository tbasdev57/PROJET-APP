import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Activer le mode clair' : 'Activer le mode sombre'}
      title={isDark ? 'Mode clair' : 'Mode sombre'}
      className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-line/10 bg-surface-card/60 text-ink-soft transition-all duration-300 hover:border-accent/40 hover:text-accent active:scale-95"
    >
      <Sun
        className={`absolute h-5 w-5 transition-all duration-500 ${isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`}
        aria-hidden="true"
      />
      <Moon
        className={`absolute h-5 w-5 transition-all duration-500 ${isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}
        aria-hidden="true"
      />
    </button>
  );
}
