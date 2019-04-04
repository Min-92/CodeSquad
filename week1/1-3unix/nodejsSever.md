# 로컬환경에서 node.js 이용해서 서버구동
- node.js 설치
일반사용자 계정인 경우,  
~~~
$ sudo apt-get install curl
$ curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -
$ sudo apt-get install -y nodejs
~~~

- hello.html 작성
터미널에서 vim사용
## node.js를 이용해서 서버 띄우기
server.js 생성  
~~~
var https = require('https'); // 서버를 만드는 모듈을 불러옴
var fs = require('fs');
http.creatServer((request.response) =>{ // 서버만드는 메소드
  var url = request.url;
  if(request.url == '/'){ // 기본페이지를 hello.html로 지정
    url = '/hello.html';
  }
  reponse.end(fs.readFileSync(__dirname + url));
  console.log('server start!'); // 서버 작동여부 확인
}).listen(1000);
~~~
localhost:1000 으로 접속해서 Hello World 출력 확인  

# 서버환경에서 실습
- ide.goorm.io 에 접속해서 node.js 컨테이너 생성
대시보드 - 컨테이너 생성  
- goorm 서버에 ssh 를 이용해서 접속
컨테이너 - ssh설정  
명령어 복사 - 쉘에 붙여넣기  
비밀번호 발급 - 쉘에 붙여넣기  
- 포트포워딩 설정
컨테이너 - 포트포워딩 설정  - 등록  
명령어를 복사하여 브라우저에서 접속  
