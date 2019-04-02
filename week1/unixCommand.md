#유닉스 명령어 학습  

##윈도우 환경에서 실습  

윈도우 스토어에서 Ubuntu 설치  

##Shell
쉘이란?  
OS와 대화하는 프로그램  
다른 프로그램을 실행시켜주는 프로그램  
현재는 bash 사용  

##명령어  
###pwd
현재 디렉토리를 확인
###ls  
List Directory, 디렉토리의 내용을 보여줌  
ls -l
ls -al : 숨김파일도 모두 표시  
###tree [디렉토리 이름] [-L 깊이]  
tree설치 명령어  
apt-get install tree  
확인  tree --version
tree / -L 1  
###mkdir  
새로운 디렉토리 생성  
mkdir folderName  
###cd
디렉토리 변경  
cd ../  
cd /
cd ~  
cd    
###echo
매개변수를 표준출력으로 보내주는 명령  
출력  
### > reDirection
표준출력의 내용을 뒤에있는 아규먼트로 보내주는 명령  
'>' 덮어쓰기
'>>' 추가하기
ex)  
echo "hello" > hello.txt  
hello.txt에 "hello" 저장  
###cat 파일이름
파일내용 표시  
echo "Hello, CodeSquad?" > hello.txt  
cat hello.txt -hello.txt를 매개변수로 받아서 표준출력에 내용을 보내줌  
###less 파일명
긴파일의 내용을 끊어서 표시
- q:종료
- g:처음으로
- G:끝으로
- /단어: 문서에서 '단어'검색
###history
명령어 이력 표시  
###cp,rm
파일 복사, 삭제  
cp dir1/file.txt file2.txt  
cp -a dir1 dir2  
rm -rf dir1 **rm -rf 주의**
###find 디렉토리 -name "파일이름"
지정한 디렉토리와 그 하위디렉토리에서 해당파일 검색  
###touch 파일이름
0바이트 파일 생성  
touch foo.txt  
###grep
필터 / 표준입력으로 받은것에 매개변수랑 같은게 있는지 표시  
grep hello < hello.txt  
###|
파이프/ 앞 명령의 표준출력이 뒷명령의 표준입력  
ls | grep hello
