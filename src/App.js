import { Route } from 'react-router';
import About from './About';
import Home from './Home';

function App() {
  return (
    <div>
      <Route path='/' component={Home} exact></Route>
      <Route path='/about' component={About}></Route>
    </div>
  );
}

export default App;
