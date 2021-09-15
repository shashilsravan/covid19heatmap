import './App.css';
import Main from './components/Main';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Visualize from './components/data-viz/Visualize';
import News from './components/news/News';
import About from './components/about/About';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route component={Main} path='/' exact />
            <Route component={Visualize} path='/visualize' exact />
            <Route component={News} path='/news' exact />
            <Route component={About} path='/about' exact />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
