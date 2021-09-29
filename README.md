# React-Router Tutorial

## 설치

- yarn add react-router-dom
- [메인 페이지]와 [페이지 1]에 router 사용하기

<br />

---

## Use react-router, link

- 링크로 이동 시, **\<a\> 태그 사용 X**( 페이지 전체가 렌더링 )
  => **Link** 사용.

<br />

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

<br />

---

## react-router 에서의 컴포넌트 렌더링

**[1. Route의 자식으로 렌더링]**

```javaScript
function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact />
      // 자식으로 렌더링!
      <Route path='/profile'>
        <Profile />
      </Route>
    </BrowserRouter>
  )
}
```

- 단점:
  route의 props인, **location / history / match 사용 불가.**

**[2. Route component로 렌더링]**

```javaScript
functino App() {
  return (
    <BrowserRouter>
      // 컴포넌트로 렌더링
      <Route path='profile' component={Profile} />
    </BrowserRouter>
  )
}
```

- 단점:
  매번 기존 component를 언마운트하고, 새 컴포넌트를 마운트.

**[3. Route render를 이용하여 렌더링]**

```javaScript
function App() {
  render(
    <BrowserRouter>
      // render를 사용한 리마운트 없는 렌더링
      <Route path='/' render={() => <About />} />
      <Route path='profile' render={(props) => <Profile {...props} />} />
    </BrowserRouter>
  )
}
```

- 장점:
  render props( history, location, match ) 사용 가능
  inline function에서 리턴하는 컴포넌트 리마운트 X

<br />

---

## react router 부가기능

- **[history 객체]**

  > 컴포넌트에서 라우터에 직접 접근 가능해진다.  
  > 사용 예시: 특정 함수 호출 시, 특정 경로 이동 or 페이지 이탈 방지<br/>

- **[withRouter 기능]**

  > 하나의 함수
  > 라우터 컴포넌트가 아닌 곳에서 props( match, location, history ) 사용
  >
  > > **[location과 match의 차이점]**  
  > > location: 어디에서 호출해도 **동일한 Data**를 가리킴
  > > match: 자신이 **렌더링된 위치 기준**으로 match 값을 받아옴
  > >
  > > > ( 현재 위치가 profiles라면, App의 라우터에서 url 파라미터를 받지 않기 때문에 **없음**... )
  > > > ( 현재 위치가 profile이라면, 경로(path)가 "/profiles/:username"으로 설정되어있고 **파라미터 호출**도 가능 )
  >
  > 즉, witRouter는 라우터로 사용되지 않은 컴포넌트에서 조건부로 이동해야할 때 자주 사용 (ex. 로그인)

<br/><br/>
