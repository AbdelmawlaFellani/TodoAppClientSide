import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Menu from './components/Menu';
import CompletedPage from './pages/CompletedPage';
import TrashPage from './pages/TrashPage';
function App() {
  return (
    <div className="App">
        <Router>
      <div>
        <Menu />

          <Route exact path="/" component={MainPage} />
          <Route path="/completed" component={CompletedPage} />
          <Route path="/trash" component={TrashPage} />
      </div>
    </Router>
        <div>Tasks's Side</div>
    </div>
  );
}

export default App;
