module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        background: '#fff',
        'background-dark': '#151718',
        text: '#11181C',
        'text-dark': '#ECEDEE',
        tint: '#0a7ea4',
        'tint-dark': '#fff',
        icon: '#687076',
        'icon-dark': '#9BA1A6',
        'tab-icon-default': '#687076',
        'tab-icon-default-dark': '#9BA1A6',
        'tab-icon-selected': '#0a7ea4',
        'tab-icon-selected-dark': '#fff',
      },
      fontFamily: {
        rounded: ['ui-rounded', 'system-ui', 'sans-serif'],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
    },
  },
  plugins: [],
};
