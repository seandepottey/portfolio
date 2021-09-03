import logo from './logo.svg';

// #region imports
import './scss/theme.scss';

// Library Components
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// Custom Components
import NavigationBar from './components/NavigationBar';

// Page Components
import ResumePage from './pages/Resume';
import AboutMePage from './pages/AboutMe';
// #endregion imports

// #region application
function App() {
  const navPaths = {
    'resumePage': '/resume', 
    'aboutMePage': '/aboutme'
  };

  return (
    <div>
      <Router>
        <NavigationBar navPaths={navPaths} />
        <Switch>
          <Route path={navPaths['resumePage']}>
            <ResumePage />
          </Route>
          <Route path={navPaths['aboutMePage']}>
            <AboutMePage />
          </Route>
          <Route path={navPaths['/']}>
            <ResumePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
// #endregion application

export default App;
