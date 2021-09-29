import { withRouter } from 'react-router';

function WithRouterSample({ location, match, history }) {
  return (
    <div>
      <h4>location</h4>
      {/* JSON 문자열 변환(+들여쓰기) */}
      <textarea value={JSON.stringify(location, null, 2)} readOnly />
      <h4>match</h4>
      <textarea value={JSON.stringify(match, null, 2)} readOnly />
      <button onClick={() => history.push('/')}>홈 가기</button>
    </div>
  );
}

export default withRouter(WithRouterSample);
