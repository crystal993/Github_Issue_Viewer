## 👨‍👩‍👧‍👦 9팀

## **✨ 배포링크**

[✨ 깃허브 Angular issue Viewer](https://github-issue-viewer-erjw.vercel.app/)
<br>

## 📝 Description 

원티드 프리온보딩에서 진행하는
특정 깃헙 레파지토리의 이슈 목록과 상세 내용을 확인하는 
웹사이트를 구축하는 과제입니다. 

<br>


## 🛠️ Dev Tools

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
  <img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">

  <br>

## **프로젝트의 실행 방법**

```sh
git clone https://github.com/crystal993/Github_Issue_Viewer

npm install

npm start

open http://localhost:3000
```

<br>

## **📝 디렉토리 구조**
```sh
├──📂 public
├──📂 src
│   ├──📂 api             # axios 등의 호출을 위한 함수들
│   ├──📂 assets          # 이미지 파일 폴더
│   ├──📂 components      # 하위 컴포넌트들
│   │   ├──📂 detail        # detail 페이지에 쓰이는 컴포넌트
│   │   └──📂 elements      # 재사용성이 높은 공통 컴포넌트
│   │   └──📂 main          # main 페이지에 쓰이는 컴포넌트
│   ├──📂 context        # context API의 provider 모음
│   ├──📂 lib             # context reducers
│   ├──📂 pages           # 페이지 컨테이너
│   ├──📂 router          # 페이지 라우팅을 위한 라우터
│   ├──📂 styles          # 공통 style을 위한 폴더
│   └──📂 utils           # 재사용성이 높은 각종 함수들
├──📄 App.js
└──📄 index.js
```  

<br>

## 📝 API 보러가기 

### [Github Rest API](https://docs.github.com/en/rest)

- GitHub REST API 로 개발을 진행했습니다. 
- token을 발급하지 않으면 시간 당 60회로 API 호출 횟수 제한 되기 때문에
  개발 시에는 access token을 발급받아 60회 제한 없이 개발을 진행했습니다. 

<br>

## 🔒 팀 규칙

<details>
<summary>커밋 규칙</summary>
<div markdown="1">

## **commit message 규칙**

⭐ feat : 새로운 기능에 대한 커밋

🛠 fix : 버그 수정에 대한 커밋

🧱 build : 빌드 관련 파일 수정에 대한 커밋

👏 chore : 그 외 자잘한 수정에 대한 커밋

⚒ refactor :  코드 리팩토링에 대한 커밋

🎨 style : 코드 스타일 혹은 포맷 등에 관한 커밋

✏ docs : 문서 수정에 대한 커밋

💡 ci : CI관련 설정 수정에 대한 커밋

🚫 제목 끝에 마침표 금지
⚠ 무엇을 했는지 명확하게 작성

</div>
</details>


<details>
<summary>코딩 컨벤션 규칙</summary>
<div markdown="1">

## **코딩 컨벤션**

- 컴포넌트의 ID사용은 지양한다.
- react의 state는 여러개 사용시 최소 집합을 찾아 사용한다.
- 컴포넌트의 이벤트에서 불필요한 익명함수를 사용하지 않는다. (예시: 함수의 인자가 event 하나인 경우)
- 코드를 설명하는 주석은 가급적 사용하지 않는다.
- 상수는 영문 대문자 스네이크 표기법(Snake case)를 사용한다.(예시: SYMBOLIC_CONSTANTS)
- 반환 값이 불린인 함수는 'is'로 시작한다
- const와 let은 사용 시점에 선언 및 할당한다.
- 함수는 사용 전에 선언해야 하며, 함수 선언문은 변수 선언문 다음에 오도록 한다.
- 이벤트 핸들러는 'on'으로 시작한다.
- 한 줄짜리 블록일 경우라도 {}를 생략하지 않으며 명확히 줄 바꿈 하여 사용한다.

</div>
</details>


<br>
<br>

## 💻 작업한 내용

## Assignment1. 이슈 목록 및 상세 화면 기능 구현
<hr>

## 1-1. 이슈 목록 페이지

### 1-1-1. 이슈 목록 가져오기 API 활용 
  ![image](https://user-images.githubusercontent.com/72599761/198877285-214e5318-2fe5-475f-8938-8ef6c97164e3.png)

- 요청 파라미터로 이슈 상태가 open이고, 코멘트가 많은 순으로 정렬했습니다. 

https://github.com/crystal993/Github_Issue_Viewer/blob/0467af8ee4e90dbb5752539273c58fe4c84aa044/src/api/api.js#L4-L7

<br>
<hr>
<br>


### 1-1-2. 다섯번째 셀에 광고 이미지를 출력 
- 조건문을 이용하여 인덱스가 5가 아닐 때는 이슈를 출력하고, 인덱스가 5일 때는 다섯번째 셀에 광고 이미지를 출력했습니다. 

https://github.com/crystal993/Github_Issue_Viewer/blob/0467af8ee4e90dbb5752539273c58fe4c84aa044/src/components/main/IssueList.jsx#L46-L67

<br>
<hr>
<br>

### 1-1-3. 광고 누르면 Wanted 페이지로 이동하기 
- Redirect 컴포넌트를 만들어 따로 관리했습니다. 

https://github.com/crystal993/Github_Issue_Viewer/blob/0467af8ee4e90dbb5752539273c58fe4c84aa044/src/router/Redirect.jsx#L1-L11

<br>
<hr>
<br>

### 1-1-4. ⭐ Infinite Scroll 구현 
- 메인 페이지에서 이슈 리스트를 페이지마다 10개씩 이슈들을 받아오도록 했습니다. 
- 무한스크롤을 구현할 때 Intersection Observer로 구현했습니다. 
- 받아온 데이터들을 context API로 전역으로 관리하여 사용했습니다. 

https://github.com/crystal993/Github_Issue_Viewer/blob/0467af8ee4e90dbb5752539273c58fe4c84aa044/src/components/main/IssueList.jsx#L13-L39

https://github.com/crystal993/Github_Issue_Viewer/blob/0467af8ee4e90dbb5752539273c58fe4c84aa044/src/context/IssuesContext.js#L50-L60

https://github.com/crystal993/Github_Issue_Viewer/blob/0467af8ee4e90dbb5752539273c58fe4c84aa044/src/api/api.js#L4-L7

<br>
<hr>
<br>

## Assignment2. 상세 페이지

![image](https://user-images.githubusercontent.com/72599761/198877931-6b5a26f9-77eb-43db-9cd1-175eb26e766e.png)

### 1-2-1. 상세 페이지 이슈 가져오기 API

https://github.com/crystal993/Github_Issue_Viewer/blob/0467af8ee4e90dbb5752539273c58fe4c84aa044/src/api/api.js#L8-L10

- 이슈 번호를 파라미터로 받아서 해당 이슈에 대한 데이터를 요청합니다. 

<br>
<hr>
<br>

### 1-2-2. 상세 페이지 마크다운 변환하기 

https://github.com/crystal993/Github_Issue_Viewer/blob/0467af8ee4e90dbb5752539273c58fe4c84aa044/src/api/api.js#L11-L14

- 마크다운 변환할 때, 깃허브 API에 있는 마크다운 변환 API를 사용했습니다. 

https://github.com/crystal993/Github_Issue_Viewer/blob/0467af8ee4e90dbb5752539273c58fe4c84aa044/src/components/detail/IssueBody.jsx#L10-L23

- 마크다운 API 또한 context에서 관리하였습니다. 

<br>
<hr>
<br>

## Assignment3. 공통 헤더 
- 두 페이지는 공통 헤더를 공유합니다.
- 헤더에는 Organization Name / Repository Name이 표시됩니다.
- 레이아웃 컴포넌트에서 헤더를 사용해서 중첩 라우터로 두 페이지에 해당하는 컴포넌트를 감싸서 전부 공통 헤더를 가지게 됩니다. 

https://github.com/crystal993/Github_Issue_Viewer/blob/0467af8ee4e90dbb5752539273c58fe4c84aa044/src/components/elements/Header.jsx#L1-L15



https://github.com/crystal993/Github_Issue_Viewer/blob/0467af8ee4e90dbb5752539273c58fe4c84aa044/src/components/elements/Layout.jsx#L5-L14

- 헤더에는 Organization Name / Repository Name이 표시됩니다.

https://github.com/crystal993/Github_Issue_Viewer/blob/0467af8ee4e90dbb5752539273c58fe4c84aa044/src/components/elements/Layout.jsx#L5-L14

- 레이아웃 컴포넌트에서 헤더를 사용해서 중첩 라우터로 두 페이지에 해당하는 컴포넌트를 감싸서 전부 공통 헤더를 가지게 됩니다. 

<br>
<hr>
<br>


## Assignment4. Context API를 활용한 API 연동

- 전체적으로 Reducer를 활용하여 진행하였습니다.

https://github.com/crystal993/Github_Issue_Viewer/blob/0467af8ee4e90dbb5752539273c58fe4c84aa044/src/context/contextState.js#L1-L23

<br>
<hr>
<br>

- state 상태값에 따라 상태값을 관리해줍니다. 

https://github.com/crystal993/Github_Issue_Viewer/blob/0467af8ee4e90dbb5752539273c58fe4c84aa044/src/lib/useReducer.js#L3-L43

<br>
<hr>
<br>

- context API에서 dispatch와 state 조회를 쉽게 해주는 custom hook을 만들었습니다. 

https://github.com/crystal993/Github_Issue_Viewer/blob/0467af8ee4e90dbb5752539273c58fe4c84aa044/src/context/IssuesContext.js#L18-L48

<br>
<hr>
<br>

- 함수를 통해 axios 비동기 통신으로 깃허브 이슈리스트를 받아와서 context 에서 관리하는 함수입니다.  

```javascript
// 이슈 목록 가져오는 함수
function getIssues(dispatch, per_page, page) {
  dispatch({ type: 'GET_ISSUES' });
  try {
    const response = await apis.get_issues(per_page, page);
    console.log(response.data);
    dispatch({ type: 'GET_ISSUES_SUCCESS', data: response.data });
  } catch (e) {
    dispatch({ type: 'GET_ISSUES_ERROR', error: e });
  }
}

// 상세 페이지에서 이슈만 가져오는 함수
function getIssue(dispatch, issue_number) {
  dispatch({ type: 'GET_ISSUE' });
  try {
    const response = await apis.get_an_issue(issue_number);
    dispatch({ type: 'GET_ISSUE_SUCCESS', data: response.data });
  } catch (e) {
    dispatch({ type: 'GET_ISSUE_ERROR', error: e });
  }
}
```

<br>
<hr>
<br>


## Assignment4. 데이터 요청 중 로딩 표시

- 로딩 컴포넌트를 제작하였습니다. 


https://github.com/crystal993/Github_Issue_Viewer/blob/0467af8ee4e90dbb5752539273c58fe4c84aa044/src/components/elements/Loading.jsx#L2-L13

```javascript
// context에서 전역 관리하는 loading 상태값을 가져온다. 
 const { data: issues, loading, error } = state.issues;

// 로딩 중일 때 로딩 컴포넌트 반환 
  if (loading)
    return (
      <>
        <Loading />
      </>
    );
// 에러 상태일 때 에러 페이지 반환
  if (error) return <ErrorPage />;
  return (
    <Wrapper>
      <ItemList>
        {issues &&
          issues.map((issue, idx) => {
            if (idx + 1 !== 5) {
              return <>{issue && <Issue issue={issue} key={issue.id} />}</>;
...
```

<br>
<hr>
<br>


## Assignment4. 에러 화면 구현
error가 있을경우 ErrorPage를 보여주도록 하였습니다.

```javascript
// context에서 전역 관리하는 loading 상태값을 가져온다. 
 const { data: issues, loading, error } = state.issues;

// 로딩 중일 때 로딩 컴포넌트 반환 
  if (loading)
    return (
      <>
        <Loading />
      </>
    );
// 에러 상태일 때 에러 페이지 반환
  if (error) return <ErrorPage />;
  return (
    <Wrapper>
      <ItemList>
        {issues &&
          issues.map((issue, idx) => {
            if (idx + 1 !== 5) {
              return <>{issue && <Issue issue={issue} key={issue.id} />}</>;
...
```


<br>
<hr>
<br>

## Assignment5. 반응형 화면 
- 모든 화면을 반응형 템플릿에 맞게 제작했습니다. 
- 아래는 반응형 구현을 위해 사용한 미디어 쿼리입니다. 

```css
@media (min-width: 1280px) {
    /* Desktop */
    width: 60rem;
  }
  @media (min-width: 768px) and (max-width: 1280px) {
    /* Tablet */
    width: 50rem;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    /* Mobile */
    width: 35rem;
  }
  @media (max-width: 320px) {
    /* Mobile */
    width: 25rem;
  }
```

<br>
<hr>
<br>


### 그 외 기능(옵션)
- 헤더의 로고 클릭시 메인 페이지 이동 기능


### 팀원 

| <img src="https://avatars.githubusercontent.com/u/58911113?v=4" width="120" height="120" /> | <img src="https://avatars.githubusercontent.com/u/74575497?v=4" width="120" height="120" /> | <img src="https://avatars.githubusercontent.com/u/72599761?v=4" width="120" height="120"/> |
| :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------: |
|                                           👑 권준                                           |                                           김경훈                                            |                                           김수정                                           |
|                            [@jun-05](https://github.com/jun-05)                             |                          [@tirhande](https://github.com/tirhande)                           |                        [@crystal993](https://github.com/crystal993)                        |

| <img src="https://avatars.githubusercontent.com/u/104307213?v=4" width="120" height="120"/> | <img src="https://avatars.githubusercontent.com/u/94212747?v=4" width="120" height="120" /> | <img src="https://avatars.githubusercontent.com/u/77476348?v=4"  width="120" height="120" /> | <img src="https://avatars.githubusercontent.com/u/76990149?v=4" width="120" height="120"/> |
| :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------: |
|                                           송슬기                                            |                                           오나래                                            |                                            이창훈                                            |                                           전이진                                           |
|                          [@songseul](https://github.com/songseul)                           |                            [@NR0617](https://github.com/NR0617)                             |                 [@anotheranotherhoon](https://github.com/anotheranotherhoon)                 |                          [@pongdang](https://github.com/pongdang)                          |
