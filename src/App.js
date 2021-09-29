import { Route, Link, Switch } from 'react-router-dom';
import About from './About';
import HistorySample from './HistorySample';
import Home from './Home';
import Profiles from './Profiles';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>홈</Link>
        </li>
        <li>
          <Link to='/about'>소개</Link>
        </li>
        <li>
          <Link to='profiles'>프로필 목록</Link>
        </li>
        <li>
          <Link to='history'>히스토리 샘플</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/about' component={About} />
        <Route path='/profiles' component={Profiles} />
        <Route path='/history' component={HistorySample} />

        {/* 404같은 페이지 */}
        <Route
          render={({ location }) => (
            <div>
              <h2>페이지가 존재하지 않습니다.</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
