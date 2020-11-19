# Reservation Form
React 를 활용하여 예약 폼을 구현합니다.

> **기능 구현도 중요하지만 과제에서 여행자가 많아질 경우의 퍼포먼스를 반드시 고려해주세요.**

- 디자인 예시용 제플린: https://scene.zeplin.io/project/5ec76b6a9c931a2a11422910
- 예시 영상: https://drive.google.com/file/d/14LR4nNe3B-4D18-A75eDDr_ohJX3yF-e/view
- 제한 시간은 과제 시작 시간부터 2일(48시간)입니다.
- 디자인은 기본적인 폼 형태를 지키면서 자유롭게 표현하셔도 무방합니다.
- 언어는 JS or TS 중 자유롭게 사용하셔도 됩니다.

## A. UI
- 첫화면에서는 validation이 표시되지 않습니다.
- input (ex. 영문 이름, 영문 성, 한글이름, 핸드폰 번호)
  - 사용자가 키 입력 시 validation 표시
- select, radio, checkbox (ex. 도착예정시간, 성별 )
  - 결제하기 버튼 클릭시 선택이 안되어 있을 경우 validation 표시
- textarea (ex. 기타 예약 정보)
  - 사용자가 키 입력 시 validation 표시
- custom (ex. 성별 선택, 시안에 맞춰서 개발)

## B. Validation
- validation 체크는 각 항목에 따라 1번부터 진행되며 해당 되는 문구를 노출합니다.
### 영문 이름, 영문 성
1. 최소 2자 이상 입력해주세요. - 2자 미만인 경우
2. 최대 20자까지 입력 가능합니다. - 20자가 초과될 경우
3. 영어와 띄워쓰기만 입력 가능합니다. - 영어, 띄워쓰기외 문자가 입력 될 경우
### 한글 이름
1. 최소 2자 이상 입력해주세요. - 2자 미만인 경우
2. 최대 20자까지 입력 가능합니다. - 20자가 초과될 경우
3. 한글만 입력 가능합니다. - 한글외 문자가 입력 될 경우
### 성별 (default는 선택 안한 상태)
1. 성별을 선택해 주세요. - 선택이 되지 않고 결제하기 버튼을 눌렀을 경우
### 생년월일
1. 6자리의 생년월일을 입력해 주세요.(YYMMDD) - 6자리 미만이거나 초과될 경우
2. 숫자(0~9)만 입력 가능합니다. - 숫자외 다른 문자가 입력될 경우
### 사용자 이름
1. 최소 2자 이상 입력해주세요. - 2자 미만인 경우
2. 최대 20자까지 입력 가능합니다. - 20자가 초과될 경우
3. 영어와 띄워쓰기만 입력 가능합니다. - 영어, 띄워쓰기외 문자가 입력 될 경우
### 핸드폰 번호(국가번호) - validation 없음
- 기본적으로 +82(대한민국) 단일 옵션으로 고정
### 핸드폰 번호
1. 최소 2자 이상 입력해주세요. - 2자 미만인 경우
2. 최대 20자까지 입력 가능합니다. - 20자가 초과될 경우
3. 숫자(0~9)만 입력가능합니다. - 숫자외 다른 문자가 입력될 경우
### 기타 예약 정보
1. 기타 예약 정보를 입력해주세요. - 예약정보가 입력되지 않았을 경우
2. 최대 200자까지 입력 가능합니다. - 200자가 초과 되었을 경우
### 숙소 도착 예정 시간
- default는 **시**, **분**이 선택되어 있음
- 시: 0시 ~ 23시까지 선택 가능.
- 분: 0분 ~ 59분까지 선택 가능.
1. 숙소 도착 예정 시간을 선택해주세요. - 결제하기 버튼 클릭시 **시** 또는 **분**이 선택되지 않은경우

## C. 결제하기 버튼
- 약관 동의(필수) 가 체크되어야 결제하기 버튼이 활성화 됩니다.
- 결제하기 버튼을 클릭하면 invalid 된 첫번째 필드로 focus 됩니다.
- 모든 폼이 유효성을 통과하면 alert을 발생시킵니다.
  - **예약이 완료 되었습니다.** 문구가 노출 됩니다.

## D. 주의사항
- 작업은 본인의 Repository로 Fork후에 작업 해주세요.
  - [Fork 기능 살펴보기](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo)
- Form, Validation 과 관련된 외부 라이브러리 사용이 불가합니다. 
- jquery, document.querySelector, document.getElementsByClassName 와 같은 Web API 사용이 불가합니다.
- 예시에서는 여행자가 2명이지만 여행자의 수는 계속해서 추가 될 수 있음을 고려 해 주세요.
- Hook 사용을 권장합니다.
- 스타일은 평가 요소에 반영되지 않습니다.
- **재사용성과 최소한의 렌더링을 고려해주세요.**
- 그 외 과제에 대한 궁금하신 사항은 tech.frontend@myrealtrip.com으로 문의 부탁 드립니다.

## E. 과제 제출
- Fork 후에 작업된 브랜치에서 PR을 생성해 주세요. (target: development)
- 절대 PR을 merge하거나 close하지 마세요.
- PR 제목은 **본인이름 사전과제** 입니다. (eg. 홍길동 사전과제)
- 과제 제출 기한이 지나면 Repository는 private로 변경되어 접근이 불가능해집니다.
