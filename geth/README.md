# Geth 실행(Windows 10)

1. [다운로드](https://geth.ethereum.org/downloads/) 페이지에서 운영체제에 맞는 파일을 받은 후 설치합니다.

2. Windows 10 의 경우는 설치된 후에는 경로에 Geth 실행 경로가 자동으로 설정되므로 파워쉘을 열어서 다음과 같이 확인합니다.
   ```shell
   > geth version
   Geth
   Version: 1.10.3-stable
   Git Commit: 991384a7f6719e1125ca0be7fb27d0c4d1c5d2d3
   Git Commit Date: 20210505
   Architecture: amd64
   Go Version: go1.16.3
   Operating System: windows
   GOPATH=
   GOROOT=go
   ```

3. 사용자 디렉토리로 이동하여 초기화 스크립트를 실행합니다(처음 1회만 실행). 
   ```shell
   .\geth-init
   ```   

4. Geth를 실행합니다. 실행된 Geth는 `Ctrl+C`로 종료할 수 있습니다. 다시 시작할 때는 `geth-run`을 실행하면 됩니다.
   ```shell
   .\geth-run
   ```   
   
5. 다음과 같은 오류가 나는 경우에는 실행권한을 주어야 합니다(관리자 파워쉘에서 실행).

   ```shell
   + .\geth-run
   + ~~~~~~~~~~
       + CategoryInfo          : 보안 오류: (:) [], PSSecurityException
       + FullyQualifiedErrorId : UnauthorizedAccess
   ```
   
   ```shell
   Set-ExecutionPolicy -ExecutionPolicy unrestricted -Scope CurrentUser
   ```

6. Geth 콘솔에 연결하려면 다음을 입력합니다.

   ```shell
   geth attach ipc:$env:ETHEREUM_SOCKET
   ```
   

