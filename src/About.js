import React from 'react';
import qs from 'qs';

function About({ location }) {
  // 파싱
  const query = qs.parse(location.search, {
    // 문자열에서 '?' 제거
    ignoreQueryPrefix: true,
  });

  // query 결과 값 = 문자열, true(x) 'true'(o)
  const detail = query.detail === 'true';

  // 쿼리 확인
  console.log(query);

  return (
    <div>
      <h1>소개</h1>
      <p>이곳은 리액트 라우터 기초 실습 프로젝트입니다.</p>
      {
        /* detail 값이 '참'이면, 텍스트 출력 */
        detail && <p>detail value: true</p>
      }
    </div>
  );
}

export default About;
