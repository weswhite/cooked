import { Route, Switch } from 'react-router-dom';

import Home from './Home/Home';
import Header from './Header/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="app-content">
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch> 
        </div>
      </div>
    );
  }
}

export default App;