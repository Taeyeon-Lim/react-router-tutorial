# React-Router 튜토리얼입니다.

- yarn add react-router-dom
- [메인 페이지]와 [페이지 1]에 router 사용하기

### Use react-router

- 링크로 이동 시, 'a' 태그 사용하면 안됨(페이지 전체가 렌더링)
  => Link 사용.

### 파라미터와 쿼리

1. URL 파라미터
   특정 데이터 조회에 주로 사용( /profiles/taeyeonLim )

- Profile 컴포넌트에 존재하는 값을 조회
  taeyeon = http://localhost:3000/profiles/taeyeon
  sourcetree = http://localhost:3000/profiles/sourcetree
  없는 사용자 = http://localhost:3000/profiles/아무거나 입력

2. Query
   다양한 옵션의 조회, 주로 검색에 사용( /filter?type=book&sort_by=date )
