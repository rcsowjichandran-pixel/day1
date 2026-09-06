/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: { 
      colors: {
        // New Color Scheme
        primary: '#FE4A51',
        primaryDark: '#C81118',
        text: '#6B7280',
        accent: '#FFD0D2',
        accentLight: '#EFEFEF',
        accentGray: '#C3C4C4',
        // Legacy colors (for backward compatibility)
        brandBlue: '#1E40AF',   
        brandGray: '#F3F4F6',   
        brandAccent: '#F59E0B', 
        navBg: '#1E293B',   
        navText: '#F1F5F9', 
        navHover: '#F59E0B' 
      },
       fontFamily: {
        base: ['Lato', 'sans-serif'],
        profile: ['Poppins', 'sans-serif'], 
      },
      borderRadius: {
        xlCard: '20px', 
      },
      boxShadow: {
        product: '0 8px 20px rgba(74, 144, 226, 0.4)', 
      },
      fontSize: {
        nav: '18px', 
      },
      spacing: {
        navX: '24px', 
      },
    },
  },
  plugins: [],
}

