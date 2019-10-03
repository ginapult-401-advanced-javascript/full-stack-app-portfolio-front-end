import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Header from './components/Header/Header';
import App from './App';
import Footer from './components/Footer/Footer';

import './styles.css';

import createStore from './store';

const store = createStore();

const Main = () => {
  return (
    <Provider store={store}>
      <Header />
      <App />
      <Footer />
    </Provider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
