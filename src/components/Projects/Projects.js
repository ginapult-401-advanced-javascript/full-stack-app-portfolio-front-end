import React from 'react';
import { ThemeContext } from '../../contexts/ThemeContext.js';
import { AuthContext } from '../../contexts/AuthContext.js';

class Projects extends React.Component {
  
  render() { 
    
    return (
      <AuthContext.Consumer>{(authContext) => (
        <ThemeContext.Consumer>{(themeContext) => {
          const { isAuthenticated, toggleAuth } = authContext;
          const { isLightTheme, light, dark } = themeContext;
          const theme = isLightTheme ? light : dark;
          return(
            <div onClick={toggleAuth} className='projects'>
              { isAuthenticated ? 'Logged in' : 'Logged out' }
              <ul style={{ background: theme.ui, color: theme.syntax }}>
                <li>Project 1</li>
                <li>Project 2</li>
                <li>Project 3</li>
              </ul>
            </div>
          )
        }}
        </ThemeContext.Consumer>
      )}
      </AuthContext.Consumer>
    );
  }
}
 
export default Projects;