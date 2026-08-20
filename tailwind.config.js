/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: { 
      colors: {
        brandBlue: '#1E40AF',   
        brandGray: '#F3F4F6',   
        brandAccent: '#F59E0B', 
        primary: '#4A90E2', 
        navBg: '#1E293B',   
        navText: '#F1F5F9', 
        navHover: '#F59E0B' 
      },
       fontFamily: {
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

