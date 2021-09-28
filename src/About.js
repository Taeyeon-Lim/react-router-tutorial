import React from 'react';

function About({ location }) {
  // 개발자 도구에서 search: "?a=2"를 확인 => 추출하기 위해, qs 라이브러리 설치
  console.log(location);
  return (
    <div>
      <h1>소개</h1>
      <p>이곳은 리액트 라우터 기초 실습 프로젝트입니다.</p>
    </div>
  );
}

export default About;
