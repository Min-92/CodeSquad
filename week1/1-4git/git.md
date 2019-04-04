# Git

## Git vs GitHub
- git : 버전관리시스템 VCS(Version Control System)
- gitHub : 호스팅 서버

## git을 사용하는 이유
- 사용하기 매우 어렵다
- 버전 관리를 위해서
- 협업을 위해서
- 복잡도가 높을수록 사용 효율이 높다
- 변경 이력이 전부 남는다(어디로든 복원가능)
- 매우 안전함(물리적파손, 삭제 제외)

## git의 물리적인 저장소
1. 워킹트리 Working tree(Working Directory)
2. 스테이지 Stage
3. 로컬저장소 Local Repository
4. 원격저장소 Remote Repository  

- 워킹트리에서 작업, 파일편집

# Git Commands

## config
- 버전을 만든 사람에 대한 정보를 설정
- ~/.gitconfig 파일에 저장되고 1번만 해주면 된다.
~~~
// 전역 사용자 등록
git config --global user.name "닉네임"
git config --global user.email "이메일"
//프로젝트별 사용자 등록
git config user.name "닉네임"
~~~

# git 시작하기
1. git clone 으로 원격 저장소 내용 로컬로 복사
2. git init 명령으로 새 저장소를 만듬

## init
- 현재 디렉토리를 git 저장소로 만듭니다.
- 지정한 디렉토리를 git 저장소로 만듭니다.
- .git 디렉토리 생성됨(로컬 저장소)
~~~
git init

git init gitfth
~~~

## clone
- git 의 소스코드를 지역 저장소로 가져오기
~~~
git clone https://github.com/git/git.git

git clone -b 'branchName'
~~~

## add
- 스테이지에 파일 추가
- git이 파일을 추적하도록 명령합니다.
~~~
git add file.name
~~~
### add 취소하기
- 해당 파일만, add전체를 취소 가능하다
~~~
git reset HEAD
git reset HEAD 'fileName'
~~~

## status
- 프로젝트 폴더의 상태를 확인합니다.
- Working Directory, Stage, Local Repository 셋을 같이 비교함
- 셋 상황이같을때 '깨끗합니다.'

## commit
- 스테이지의 내용들을 묶어서 커밋한다.
- 스테이지 내용들을 가지고 커밋 객채를 만드는 행동.
~~~
git commit

git commit -a //변경사항 전부 commit

git commit -am //변경사항 전부, 커밋메세지 바로 입력가능

git commit - amend // 커밋 메시지 수정
~~~

## log
- 변경사항 확인하기
~~~
git log -p //버전간의 차이점을 출력

git log --reverse // 로그를 거꾸로 출력하기
~~~

## diff
- 버전간의 차이점 비교
~~~
git diff '버전id'..'버전id2'

git diff // add하기 전과 후 파일내용 비교
~~~

## reset
- 이전 버전으로 돌아가기
~~~
git reset --hard '버전id' // hard는 파일도 변경
~~~

## revert
- 버전 id 커밋을 취소한 내용을 새로운 버전으로 만드는 명령
~~~
git revert '버전id'
~~~
참고 http://www.popit.kr/  

## --help
- 설명보기
~~~
git --help
~~~

## checkout
1. 해당 커밋으로 체크아웃하기(되돌리기)
2. 현재 작업 브랜치 변경(같은커밋)
~~~
git checkout '버전id' // HEAD가 해당 커밋을 가르킨다.
git checkout -b 'branchName'
~~~

## remote
- local 저장소와 원격 저장소 연결
~~~
git remote add origin https://github.com/Min-92/CommandsForMe.git
~~~

## push
- 원격저장소에 파일 업로드
~~~
git push -u origin master  // 원격저장소 origin master 에 동기화

git push
~~~

## pull
- 원격저장소에서 LR,Stage,WD 전부 동기화
~~~
git pull
~~~

## fetch
- 원격저장소에서 로컬저장소로 가져오기
- stage, Wd에는 영향 없음
~~~
git fetch
~~~

## merge
- 공통 부모를 가진 둘 이상의 커밋을 합칠떄 사용
- 현재 브랜치를 해당 브랜치와 merge 한다
~~~
//HEAD = master
git merge branch1
//master 에 branch1을 merge
~~~

## rebase
- 현재 브랜치를 대상 브랜치로 옮긴다
- merge 에 비해 충돌 해결이 어렵다
- **이미 원격에 있는 브랜치를 rebase 하면 안된다**

~~~
//HEAD = feature1
git rebase master
git checkout master
git merge feature1
~~~

## branch
- 해당 이름의 브랜치를 생성한다
~~~
git branch 'branchName

git branch -d 'branchName' // 브랜치 삭제
~~~

## cherry-pick 'id'
- 해당 커밋들을 현재위치에서 복사하여 커밋
~~~
git cherry-pick c1 c2 c3
~~~

## ^
- 해당 커밋의 이전커밋 지정
~~~
git checkout HEAD  //C3
git checkout HEAD^ //C2
~~~

## ~'x'
- 해당 위치에서 x칸 이전 위치 지정
~~~
git checkout HEAD~2
~~~
