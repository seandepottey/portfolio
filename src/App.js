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

// Content
import LocalizedStrings from "localized-strings";
import jsonContent from './content.json';
// #endregion imports

const content = new LocalizedStrings(jsonContent);

// #region application
function App() {
  const navPaths = {
    'resumePage': '/resume', 
    'aboutMePage': '/aboutme'
  };

  const resumePage = <ResumePage content={content.resumePage.applicant} />;

  return (
    <div>
      <Router>
        <NavigationBar navPaths={navPaths} />
        <Switch>
          <Route path={navPaths['resumePage']}>
            {resumePage}
          </Route>
          <Route path={navPaths['aboutMePage']}>
            <AboutMePage content={content.aboutMePage} />
          </Route>
          <Route path={navPaths['/']}>
            {resumePage}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
// #endregion application

export default App;
