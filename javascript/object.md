# 객체

객체는 중괄호를 {...} 를 활용해 만드는데 'key: value'로 구성되어 있다.

```
const user = {
    id: 0,
    name: "홍길동",
    year: 2022,
}
````
키 : 값 으로 이루어져 있으며 
### 점표기법
---
````
alert(user.id); // 0
alert(user.name); // '홍길동'
````
점 표기법으로 value값을 가져올 수 있습니다.

### 대괄호 표기법
---
```
console.log(user[name]); // '홍길동'
````
위와 같이 출력된다.

````
let user = {
    name: 'John',
    surname: 'Smith',
};
user.name = 'Pete';
delete user.name; // user에서 프로퍼티 name을 삭제
```

- 객체에 프로퍼티가 하나도 없는 경우 true, 그렇지 않은 경우 false를 출력하는 isEmpty(obj)함수를 만들어보세요.
```
function isEmpty(obj){
    return obj.length === 0 ? true : false;
}
```