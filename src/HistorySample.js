import React, { useEffect } from 'react';

function HistorySample({ history }) {
  // 뒤로가기
  const goBack = () => {
    history.goBack();
  };
  // 특정 경로 이동
  const goHome = () => {
    history.push('/');
  };

  useEffect(() => {
    console.log(history);
    const unblock = history.block('떠나시겠습니까?');
    // 컴포넌트 언마운트 시
    return () => {
      // 이탈 방지 기능 비활성화
      unblock();
    };
  }, [history]);

  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈</button>
    </div>
  );
}

export default HistorySample;
