# 비동기 프로그래밍

###### 동기(synchronous) 방식 처리

- 하나의 요청이 처리 되는 동안 다른 요청이 처리되지 못하며 요청이 완료 되어야만 다음 처리가 가능한 방식.
- 동기방식은 서버에서 병목구간이 발생하는데 이는 주로 입출력(IO)에서 발생한다.
- 병목을 해결하는 방식엔 Thread로 처리하는 방식과 비동기 방식으로 처리가 있다.

###### 비동기(asynchronous) 방식 처리

- 비동기 방식은 하나의 요청처리가 완료되기 전에 제어권을 다음 요청으로 넘긴다.
- 따라서 IO처리의 경우 blocking 되지 않고 다음 요청을 처리할수 있다.

###### 흐름 확인하기

- ###### 동기

  - 순서대로 실행된다, 순서가 바뀔 수 없다

  ```
  const baseData = [1, 2, 3, 4, 5, 6, 100];
  
  baseData.forEach((v,i) => {
      console.log("sync",v, i);
  });
  
  baseData.forEach((v,i) => {
      console.log("sync 2", v, i);
  });
  ```

  ```
  sync 1 0
  sync 2 1
  sync 3 2
  sync 4 3
  sync 5 4
  sync 6 5
  sync 100 6
  sync 2 1 0
  sync 2 2 1
  sync 2 3 2
  sync 2 4 3
  sync 2 5 4
  sync 2 6 5
  sync 2 100 6
  ```

- ###### 동기 - 비동기

  ```
  function plus() {
    let a = 1;
    setTimeout( ()=>console.log(++a), 1000);
    return a;
  }
  
  const result = plus();
  console.log('result :', result);
  ```

  ```
  result : 1
  2
  ```

- ###### 비동기 상황 예

  ~~~
  for(var i = 0; i < 10; i++){
      setTimeout(() => {
          console.log(i);
      }, 10);
  }
  console.log('done');
  ~~~

  ```
  done
  10
  10
  10
  10
  10
  10
  10
  10
  10
  10
  ```

  - JavaScript 가 동기적으로 잘 동작하길 원하면 callback을 잘이용해야 한다.

  ~~~
  repeatConsoleLog = function(i,callback) {
      setTimeout(function() {
          console.log(i);
          if(i >= 9){
              callback();
          }else {
              repeatConsoleLog(i+1, callback);
          }
          
      },10);
  }
  
  
  repeatConsoleLog(0,() =>{
      console.log('done');
  })
  ~~~

  ```
  0
  1
  2
  3
  4
  5
  6
  7
  8
  9
  done
  ```

  

  

  ```
  const baseData = [1,2,3,4,5,6,100];
  const asyncRun = (arr,fn) => {
      for(var i = 0; i < arr.length; i++){
          setTimeout( () => fn(i), 1000);
      }
  }
  ```

  ```
  7
  7
  7
  7
  7
  7
  7
  ```

  ```
  const asyncRun2 = (arr,fn) => {
      arr.forEach((v,i) =>{
          setTimeout(() => {
              fn(i);
          }, 1000);
      })
  }
  
  asyncRun2(baseData, idx => console.log(idx));
  ```

  ```
  0
  1
  2
  3
  4
  5
  6
  ```

- ###### 비동기 + 비동기

  ```
  const asyncRun = (arr, fn) =>{
      arr.forEach((v,i) => {
          setTimeout(() => {
              setTimeout(() => {
                  console.log("cb 2");
                  fn(i);
              }, 1000);
              console.log("cb 1");
          }, 1000);
      })
  }
  
  asyncRun(baseData, idx => console.log(idx))
  ```

  ```
  cb 1
  cb 1
  cb 1
  cb 1
  cb 1
  cb 1
  cb 1
  cb 2
  0
  cb 2
  1
  cb 2
  2
  cb 2
  3
  cb 2
  4
  cb 2
  5
  cb 2
  6
  ```


###### callstack & callback queue (task queue)

![callstack&queue](./img/callstack&queue.png)

1. 호출된 함수가 순차적으로 call Stack에 쌓임
2. setTimeout 같은 함수가 호출됨
3. web api 에서 타이머 실행(node같은 경우 C++ api이용)
4. 타이머가 끝나면 callback queue(task queue)에 전달
5. 이벤트 루프에서 call stack을 체크
6. call stack이 비게되면 callback 을 스택에 넣어준다.
7. 콜백 실행

###### 추천 참고영상

<iframe width="779" height="438" src="https://www.youtube.com/embed/8aGhZQkoFbQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



## reference

- [nextstep](https://nextstep.camp/courses/-LamfbK4JkcifwfJR91Q/-LawFejv93M0sGMIxEOQ/lessons/-LawGUCOzLt2czQeY66j)
- [hyunseob.github.io](https://hyunseob.github.io/2015/08/09/async-javascript/)
- [nextree.co.kr](http://www.nextree.co.kr/p7292/)
- <https://www.youtube.com/watch?v=8aGhZQkoFbQ>