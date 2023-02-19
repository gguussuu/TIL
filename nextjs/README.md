# Next.js
next.js는 react 프레임워크이다.

애플리케이션을 구축할때 고려해야할 빌딩 블록
- 사용자 인터페이스, 라우팅, 데이터 가져오기, 렌더링, 통합, 인프라, 성능, 확장성, 개발자 경험
- 위와 같은 사항들은 직접 구축하거나 라이브러리 및 프레임워크를 사용한다.

## 자바스크립트에서 리액트로
- 사용자 인터페이스 렌더링
    1. 사용자가 웹 페이지를 방문하면 서버는 html파일을 브라우저에 반환한다.
    2. 브라우저는 html를 읽고 DOM을 구성한다.
    * 여기서 DOM은 html요소의 객체표현으로, 코드와 사용자간의 다리 역할을 한다.
    * 부모와 자식 관계가 있는 트리 구조 형태이다.
    * DOM 메서드와 js를 활용해서 이벤트를 설정후 조작이 가능하다.
        ```  
        const app = document.getElementById('app');
            const header = document.createElement('h1');
            const headerContent = document.createTextNode('develop. preview');
            header.appendChild(headerContent);
            app.appendChild(header);
        ```
- HTML vs. DOM
  - `HTML`: 사용자가 만든 원본 파일
  - `DOM`: 자바스크립트 코드에 의해 변경된 파일
- 명령형 프로그래밍 vs. 선언형 프로그래밍
  - 명령형 : 스텝별로 실행
  - 선언형 : 리액트
  
## react 시작하기
- jsx란
  - html구문으로 ui를 나타낼수 있는 js 구문
  - 브라우저는 jsx를 이해하지 못하기 때문에 babel같은 컴파일러가 필요하다.
     ```
     <html>
    <body>
    <div id="app"></div>
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <!-- Babel Script -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/jsx">
      const app = document.getElementById('app');
      ReactDOM.render(<h1>Develop. Preview. Ship. 🚀</h1>, app);
    </script>
    </body>
    </html>
    ```
  - 리액트를 활용하면 반복되는 코드를 줄일 수 있다.
  - 재사용 가능한 코드를 작성한다.

