# JSON parser

String을 분석해서 객체로 만들어주는 프로그램

## 요구사항

요구사항 1 ~ 3을 한번에 구현하지 않는다.

순차적으로 구현한다.

### 요구사항 1

- ArrayParser함수를 만든다.
- 배열안에는 숫자데이터만 존재한다.
- 배열형태의 문자열을 token단위로 해석한 후, 이를 분석한 자료구조를 만든다.
- 정규표현식 사용은 필요하다면 아주 최소한으로 사용.

### 요구사항 2

- 무한중첩 구조도 동작하게 한다. [[[[[]]]]]

- hint : 중첩문제를 풀기 위해 stack구조를 활용해서 구현할 수도 있다.

- 숫자타입이외에 string, boolean, null 타입도 지원하도록 구현한다.

  ```javascript
  
  ['1a3',[null,false,['11',[112233],112],55, '99'],33, true]" 
  
  ```

- 올바른 문자열이 아닌 경우 오류를 발생한다. (아래 실행결과 참고)

### 요구사항 3

- Object 타입 ( { key: value} ) 도 지원한다.
- 배열안에 object, object안에 배열이 자유롭게 포함될 수 있다.
- 지금까지의 코드를 리팩토링한다.
  - 중복된 코드역시 함수로 분리해서 일반화한다.
  - 객체형태의 class로 만든다.
  - 객체화가 안되어 있다면, ES6 Classes로 구현한다.

## 출처

[코드스쿼드](https://nextstep.camp/courses)