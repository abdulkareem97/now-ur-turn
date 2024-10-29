/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkBg: '#101114',   // Background color
        cardBg: '#181A1F',    // Card background color
        accent: '#FFD700',    // Accent color for highlights
        textPrimary: '#FFFFFF',  // Primary text color
        textSecondary: '#A0AEC0', // Secondary text color
      },
    },
  },
  plugins: [],
};
