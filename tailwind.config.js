// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. Tell Tailwind where to find your files to scan for classes
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // 2. Enable dark mode based on the `.dark` class
  darkMode: 'class', 
  theme: {
    extend: {
      // 3. Map your CSS Variables to Tailwind Utility Classes
      colors: {
        // Map standard colors
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        
        // Map complex colors (primary: { DEFAULT, foreground })
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        
        // Map utility colors
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },

        // Map sidebar-specific colors (using the simplified variable names)
        sidebar: {
          DEFAULT: 'var(--sidebar-background)', 
          foreground: 'var(--sidebar-foreground)',
          border: 'var(--sidebar-border)',
        }
      },
      
      // 4. Map your font CSS Variables
      fontFamily: {
        // Use 'display' for headings, etc.
        'display': ['var(--font-big-shoulders)', 'sans-serif'],
        // Override the default 'sans' font for body text
        'sans': ['var(--font-work-sans)', 'sans-serif'], 
      },
      
      // 5. Map your radius variable
      borderRadius: {
        // Use 'md' or 'lg' for primary radius utility
        'none': '0', 
        'sm': 'calc(var(--radius) - 2px)', // Use this if you need slightly smaller radius
        'md': 'var(--radius)',
        'lg': 'calc(var(--radius) + 2px)',
        'xl': 'calc(var(--radius) + 4px)',
        // You can add more sizes if needed, mapping to your radius-* variables
      },
      
      // 6. Custom utility for scroll-related performance 
      // (Used in the global.css cleanup: will-change-scroll)
      // If your Tailwind version doesn't have it by default, you can add it here.
      // E.g., utility that maps to will-change: scroll-position;
      willChange: {
        'scroll': 'scroll-position',
      }
    },
  },
  plugins: [],
}