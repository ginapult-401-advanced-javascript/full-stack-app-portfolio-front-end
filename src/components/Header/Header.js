import React from 'react';
import { ThemeContext } from '../../contexts/ThemeContext.js';

class Header extends React.Component {
  static contextType = ThemeContext;
  render() { 
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <header style={{ color: theme.syntax, background: theme.bg }}>
        <h1 style={{ background: theme.ui }}>MyAwesomePortfolio</h1>
      </header>
    );
  }
}
 
export default Header;
