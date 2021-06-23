## Geth 실행(Windows 10)

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

## Geth 자바스크립트 콘솔

자바스크립트 콘솔에서는 이더리움의 자바스크립트 라이브러리인 web3.js를 사용할 수 있습니다(하지만 Geth 콘솔에서 제공하는 web3.js는 매우 
오래된 버전이므로 현재 web3.js 공식 문서와는 차이가 있을 수 있습니다).

1. 체인 ID 조회
   
   ```
   eth.chainId(console.log)
   ```
   리턴되는 결과는 다음과 같습니다. 16진수는 계산기를 이용하여 변경할 수 있습니다(또는 직접 손으로 계산).
   ```
   null 0x1bc
   undefined
   ```

2. 계정 확인
   ```
   eth.accounts
   ```

3. 계정 생성
   ```
   personal.newAccount()
   Passphrase:
   Repeat passphrase:
   "0x5374c16f83b1425c38e0cd016e77885b68f18bee"
   ```
   
4. wei/eth 단위 변환
   ```
   web3.fromWei("36000000000000000000", "ether")
   web3.toWei("5", "ether")
   ```

5. 잔액 조회
   ```
   eth.getBalance("0x5374c16f83b1425c38e0cd016e77885b68f18bee")
   eth.getBalance(eth.accounts[0])
   ```

6. 보상 계정 조회
   ```
   eth.coinbase
   ```

7. 마이닝 시작하기  
   마이닝을 시작하면 DAG 파일을 만들기 위해 시간이 소요됩니다.
   ```
   miner.start(1)
   ```

8. 마이닝 중지
   ```
   miner.stop()
   ```

9. 블록 번호 조회
   ```
   eth.blockNumber
   ```
   
<b>트랜잭션(상태 변경) 테스트</b>

1. 송금 하기  
   `value` 단위는 wei
   트랜잭션을 보내려면 `from` 계정의 지갑을 열어야 합니다.
   ```
   eth.sendTransaction({from: "0x5374c16f83b1425c38e0cd016e77885b68f18bee", to: "0x547d73355A851079E0395aDB2C647821b74C7eAF", value: 1000000})
   ```
   리턴 값은 트랜잭션 해쉬입니다. 나중에 트랜잭션 또는 리시트 정보를 조회할 때 사용할 수 있습니다.

2. 지갑 열기  

   ```
   personal.unlockAccount("0x5374c16f83b1425c38e0cd016e77885b68f18bee")
   ```

3. 트랜잭션 정보 확인  

   파라미터는 트랜잭션 해쉬값
   ```
   eth.getTransaction("0x98bf1253f36a7dbed16ecbc0a75c688f6927d5154b4921a9b25f9c0ec4524eff")
   ```

4. 영수증(Receipt) 정보 확인  

   파라미터는 트랜잭션 해쉬값

   ```
   eth.getTransactionReceipt("0x98bf1253f36a7dbed16ecbc0a75c688f6927d5154b4921a9b25f9c0ec4524eff")
   ```

5. 블록 정보 확인
   
   ```
   eth.getBlockByNumber(13)
   ```
