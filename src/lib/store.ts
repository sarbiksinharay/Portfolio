// Global state management with React hooks

import { useState, useEffect } from 'react';
import { Theme } from '@/types';

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

interface UIState {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  toggleMenu: () => void;
  showScrollTop: boolean;
  setShowScrollTop: (show: boolean) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

interface ContactFormState {
  formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  setFormData: (data: Partial<ContactFormState['formData']>) => void;
  resetForm: () => void;
  isSubmitting: boolean;
  setIsSubmitting: (submitting: boolean) => void;
}

// Global state holders
let globalTheme: Theme = 'system';
let globalUIState = {
  isMenuOpen: false,
  showScrollTop: false,
  isLoading: false
};

// Subscribers for reactive updates
const uiSubscribers = new Set<() => void>();

// Notify all subscribers
const notifyUISubscribers = () => {
  uiSubscribers.forEach(callback => callback());
};

// Theme Store
export const useThemeStore = () => ({
  theme: globalTheme,
  setTheme: (theme: Theme) => {
    globalTheme = theme;
    applyTheme(theme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  },
  toggleTheme: () => {
    const newTheme = globalTheme === 'light' ? 'dark' : 'light';
    globalTheme = newTheme;
    applyTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
    }
  }
});

// Reactive UI Store
export const useUIStore = () => {
  const [, forceUpdate] = useState({});

  useEffect(() => {
    const updateComponent = () => forceUpdate({});
    uiSubscribers.add(updateComponent);

    return () => {
      uiSubscribers.delete(updateComponent);
    };
  }, []);

  return {
    ...globalUIState,
    setIsMenuOpen: (isOpen: boolean) => {
      globalUIState.isMenuOpen = isOpen;
      notifyUISubscribers();
    },
    toggleMenu: () => {
      globalUIState.isMenuOpen = !globalUIState.isMenuOpen;
      notifyUISubscribers();
    },
    setShowScrollTop: (show: boolean) => {
      globalUIState.showScrollTop = show;
      notifyUISubscribers();
    },
    setIsLoading: (loading: boolean) => {
      globalUIState.isLoading = loading;
      notifyUISubscribers();
    }
  };
};

// Contact Form Store
export const useContactFormStore = () => ({
  formData: {
    name: '',
    email: '',
    subject: '',
    message: ''
  },
  setFormData: (data: any) => {
    // Implementation for form data
  },
  resetForm: () => {
    // Implementation for form reset
  },
  isSubmitting: false,
  setIsSubmitting: (submitting: boolean) => {
    // Implementation for submitting state
  }
});

// Theme application utility
function applyTheme(theme: Theme) {
  if (typeof window === 'undefined') return;

  const root = window.document.documentElement;
  
  if (theme === 'system') {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    root.classList.toggle('dark', systemTheme === 'dark');
  } else {
    root.classList.toggle('dark', theme === 'dark');
  }
}

// Initialize theme on client side
if (typeof window !== 'undefined') {
  // Listen for system theme changes
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', () => {
    if (globalTheme === 'system') {
      applyTheme('system');
    }
  });
}
