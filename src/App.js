import React from 'react';

import LoginProvider from './components/auth/context';
import Login from './components/auth/login';
import Auth from './components/auth/auth';
import Header from './components/Header/Header';
import Todos from './components/todos';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <LoginProvider>
      <Login />
      <Auth capability="read">
        <Header />
        <Todos />
        <Footer />
      </Auth>
    </LoginProvider>
  );
};

export default App;