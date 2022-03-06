# 버블링
버블링의 원리
- 한 요소에 이벤트가 발생하면, 요소에 해당하는 핸들러가 발생하고, 그 이후에 부모의 이벤트 핸들러가 발생되어 중첩되는 현상
- 가장 최상단의 조상 요소를 만날 때까지 반복되면서 모든 핸들러가 동작함.   

 버블링 중단
- 내가 원하는 이벤트만 실행시키고 상위의 버블링은 중단하도록 하는 방법
`event.stopPropagation()` 을 사용
```javascript
<body onclick='alert('이 alert창은 뜨지 않습니다.')'>
    <button onclick="event.stopPropagation()">클릭!</button>
 </body>
```   
   
       

   
# 캡처링
우선, 표준 DOM이벤트에 대해서 알아봅시다.
1. 캡처링 단계 - 이벤트가 하위 요소로 내려가면서 전파되는 단계
2. 타깃 단계 - 이벤트가 실제 타깃 요소에 전달되는 단계
3. 버블링 단계 - 이벤트가 상위요소로 올라가면서 전파되는 단계

- 여러 태그로 감싸져 있는 태그가 실행되었을 때,
- 캡처링 -> 타깃 -> 버블링 순차적으로 window - document - <html> - <body> - <해당하는 태그> 순으로 내려갔다가 올라가게 됩니다.

- 캡처링과 버블링의 예시
```javascript
<style>
  body * {
    margin: 10px;
    border: 1px solid blue;
  }
</style>

<form>FORM
  <div>DIV
    <p>P</p>
  </div>
</form>

<script>
  for(let elem of document.querySelectorAll('*')) {
    elem.addEventListener("click", e => alert(`캡쳐링: ${elem.tagName}`), true);
    elem.addEventListener("click", e => alert(`버블링: ${elem.tagName}`));
  }
</script>
```

### e.preventDefault() vs. e.stopPropagation()
이벤트 관련 동작에서 많이 사용되는 코드.

- e.preventDefault()는 a태그의 href, button의 submit 같은 고유 이벤트를 중단.
- e.stopPropagation()은 이벤트가 상위 엘리먼트에 전달되지 않도록 막아줌.
e.preventDefault()는 태그의 고유 동작을 중단시키고, e.stopPropagation()은 상위 엘리먼트들로의 이벤트 전파를 중단시킨다.



* 참고링크 : <https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/></br>
* 참고링크 : <https://ko.javascript.info/bubbling-and-capturing>
