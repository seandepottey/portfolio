import logo from './logo.svg';

// #region imports
// import './App.css';
import './scss/theme.scss';

//Components
import NavigationBar from './components/NavigationBar';
// #endregion imports


// #region application
function App() {
  return (
    <div>
      <NavigationBar />
    </div>
  );
}
// #endregion application

export default App;
