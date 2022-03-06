# this

크게 4가지로 구분된다.
1. 일반함수 실행 방식
    - 함수를 실행했을 때 this의 값은 global object를 가르킨다. 브라우저상에서는 window 객체!
    ```
    function foo(){
        console.log(this);
    }// this는 window객체
    ```

    2. 도트 표기법
    - object의 value에 접근하는 방식
    ```
    let ken = {
        age: 35,
        foo: function(){
            console.log(this.age)//35를 출력
        }
    };
    //여기서 this는 ken.foo라는 함수를 실행
    ```

    좀 더 공부해야할 영역
    