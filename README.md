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
  taeyeon | \http://localhost:3000/profiles/taeyeon
  sourcetree | http://localhost:3000/profiles/sourcetree
  없는 사용자 | http://localhost:3000/profiles/아무거나입력

**[Query 쿼리]**: 다양한 옵션의 조회, 주로 검색에 사용( Ex. /filter?type=book&sort_by=date )

- 쿼리 추출을 위한 라이브러리( yarn add qs )
  <br/><br/>
