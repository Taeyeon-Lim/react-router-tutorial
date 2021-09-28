# React-Router Tutorial

## 설치

- yarn add react-router-dom
- [메인 페이지]와 [페이지 1]에 router 사용하기

---

## Use react-router, link

- 링크로 이동 시, **\<a\> 태그 사용 X**( 페이지 전체가 렌더링 )
  => **Link** 사용.

---

## 파라미터와 쿼리

**[URL 파라미터]**: 특정 데이터 조회에 주로 사용( Ex. /profiles/taeyeonLim )

- URL 사용하기( Profile 컴포넌트에 존재하는 특정 값 조회 )
  데이터 | 주소값
  ------ | ------
  taeyeon | localhost:3000/profiles/taeyeon
  sourcetree | localhost:3000/profiles/sourcetree
  없는 사용자 | localhost:3000/profiles/아무거나입력

**[Query 쿼리]**: 다양한 옵션의 조회, 주로 검색에 사용( Ex. /filter?type=book&sort_by=date )

- 쿼리 추출을 위한 라이브러리( yarn add qs )
- Query 사용하기( 쿼리 값 받기 )
  주소값 | 콘솔 확인 _(결과값은 문자열 )_
  ------ | ------
  localhost:3000/about?a=2 | _{a: '2'}_
  localhost:3000/about?a=2&b=2 | _{a: '2', b: '2'}_
  localhost:3000/about?a=2&b=2&detail=true | _{a: '2', b: '2', detail: 'true'}_

  <br/><br/>
