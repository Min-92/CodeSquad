# How to 코드스쿼드 온라인 코드리뷰

## 1. '리뷰어' 저장소에 자신 이름 브랜치 생성 요청
## 2. 프로젝트를 자신의 계정으로 for한다. 저장소 우측 상단 fork 버튼 활용
## 3. fork한 프로젝트를 자신의 컴퓨터로 clone 한 후 디렉토리로 이동한다. **본인 브랜치만 클론**
~~~
git clone -b 'branchName' --single https://github.com/'본인ID'/'저장소 ID'
~~~
## 4. 기능 구현을 위한 브랜치 생성
~~~
git checkout -b 'branchName2'
or
git branch 'branchName2'
~~~
## 5. 기능 구현 후 add, commit
## 6. 본인 원격 저장소에 올리기
~~~
git push origin 'branchName2'
~~~
## 7. github 서비스에서 pull request를 보낸다.
- pull request는 저장소 브랜치와 앞단계에서 생성한 브랜치 이름을 기준으로 한다.
- request를 통해 피드백을 받으면 코드를 수정한 후 같은 브랜치에 add,commit,push 작업을 반복한다.
## 8. 리뷰어는 피드백을 마무리하고 저장소에 merge한다.(request 승인)
## 9. merge를 완료했다는 통보를 받음녀 브랜치 변경 및 작업브랜치를 삭제한다.
~~~
git checkout 'branchName'
git branch -D 'branchName2' //브랜치 삭제
~~~
## 10. merge한 저장소와 동기화 하기위해 remote로 저장소 추가
~~~
git remote add {저장소_별칭} base_저장소_url
ex) git remote add upstream https://github.com/code-squad/java-racingcar.git
// 위와 같이 codesquad 저장소를 추가한 후 전체 remote 저장소 목록을 본다.
git remote -v
~~~
## 11. codesquad 저장소에서 자기 브랜치로 가져오기(갱신하기)
~~~
git fetch upstream 'branchName'
~~~
## 12. codesquad 저장소 브랜치와 동기화하기
~~~
git rebase upstream/'branchName'
~~~
## 13. 4단계부터 다시 반복
