import React from 'react';
import Header from '../src/components/Header/Header.js';
import Main from '../src/components/Main/Main.js';
import Footer from '../src/components/Footer/Footer.js';
import ThemeContextProvider from './contexts/ThemeContext.js';
import ThemeToggle from './components/ThemeToggle/ThemeToggle.js';
import AuthContextProvider from './contexts/AuthContext.js';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Header />
          <Main />
          <ThemeToggle />
          <Footer />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
};

export default App;