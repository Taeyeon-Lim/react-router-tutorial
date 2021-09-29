import { NavLink, Route } from 'react-router-dom';
import Profile from './Profile';

function Profiles() {
  return (
    <div>
      <h2>유저 리스트</h2>
      <ul>
        <li>
          <NavLink
            to='/profiles/taeyeon'
            activeStyle={{ background: 'black', color: 'white' }}
          >
            taeyeon
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/profiles/sourcetree'
            activeStyle={{ background: 'black', color: 'white' }}
          >
            source tree
          </NavLink>
        </li>
      </ul>

      {/* 유저가 선택되지 않았을 때 */}
      <Route
        path='/profiles'
        exact
        render={() => <div>유저를 선택해주세요</div>}
      />
      <Route path='/profiles/:username' component={Profile} />
    </div>
  );
}

export default Profiles;
