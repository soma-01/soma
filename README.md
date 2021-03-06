# SW Maestro 미니프로젝트 1팀 "소마탈출 넘버원"
![npm](https://img.shields.io/badge/npm-v6.11.3-green?style=flat-square)
![node](https://img.shields.io/badge/node-v10.16.3-green?style=flat-square)
![node](https://img.shields.io/badge/mongoDB-v5.12.5-green?style=flat-square)
![goormIDE](https://img.shields.io/badge/goormIDE-blue?style=flat-square)
![kakaowork](https://img.shields.io/badge/kakaoWork-yellow?style=flat-square)
<br/><br/>
<p align ="center"><img src = "https://user-images.githubusercontent.com/59948675/116198245-af0d6b00-a770-11eb-83d3-f1d69abaad3f.jpeg" width = "300px" /></p>
이 프로젝트는 카카오워크 챗봇서비스를 이용하여 워크스페이스 소속 유저들에게 소마탈출 넘버원팀에서 제작한 시나리오를 제공합니다.

# 기획
미니프로젝트를 위한 팀이 공개되고 엄청 빠른 속도로 팀원간 주제에 대한 이야기가 진행되었습니다. 다양한 의견 중, 만난지 얼마 안된 우리가 즐거운 스토리를 함께 구성하며 친해질 수 있는 계기가 될 수 있는 가상 시나리오 방탈출 게임이 주제로 선정되었습니다.

# 가이드    
소마탈출넘버원을 플레이하는 사용자들을 위한 가이드 입니다. 기존 챗봇과의 상호작용과 넌센스 문제풀이에 익숙하지 않은 사용자를 위한 가이드라인입니다.

## 1. 컨셉
우리팀은 가상의 소프트웨어마에스트로 연수생 "김소마"라는 인물이, 소프트웨어마에스트로 센터 6층, 7층에서 일어나는 비현실적인 스토리를 구상하였습니다. 멘토링이 끝난 늦은 시간, 홀로 건물에 남겨져, 갖힌 센터를 탈출하는 컨셉을 시작으로 스토리를 작성하였습니다. 소프트웨어마에스트로 홈페이지의 시설안내 페이지와, 실제 멘토링을 하며 파악한 실제 시설을 기반으로 진행되는 이야기입니다. 가상의 주인공에 몰입하여 즐겁게 스토리를 진행해주시면 감사하겠습니다.

## 2. 시나리오 진행 방법   
1. "소마탈출 넘버원" 시나리오는 가이드를 제공하는 (chapter #1)부터, 시나리오를 진행한 모든 유저들의 랭킹을 확인할 수 있는 (chapter #11)까지 제작되었습니다.
2. <br><p align="center"><img width="215" alt="스크린샷 2021-04-27 오후 3 25 13" src="https://user-images.githubusercontent.com/59948675/116195222-e24dfb00-a76c-11eb-99f0-3b3a87bb9b4a.png"/></p>
<br>서버가 실행되면, 워크스페이스에 소속된 모든 유저에게 첫번째 챕터가 전송됩니다. 모든 챕터에서는, 사용자의 입력을 받을 수 있는 모달을 오픈할 수 있습니다. 첫번째 챕터에서는 게임을 플레이하는 유저의 이름 혹은 별명을 입력받습니다.<br><br>마지막 챕터인 "랭킹확인"에서 본인 혹은 상위 10명의 플레이어의 시나리오 진행 시간 및 시도횟수를 확인할 수 있습니다. 개인의 시나리오 클리어 랭킹을 확인할 수 있도록 본인만을 식별가능한 별명 혹은 이름을 입력해주세요. <b>랭킹리스트는 사용자의 문제를 풀이한 시간과, 힌트를 조회한 수에 각 가중치를 두고 정렬하도록 구현하였습니다.</b>
                                                                                                     
3. <br><p align="center"><img width="248" alt="스크린샷 2021-04-27 오후 3 29 11" src="https://user-images.githubusercontent.com/59948675/116195558-55f00800-a76d-11eb-8792-97e2a53c10dd.png"></p><br>
팀원 및 주변 지인들로부터 제작한 문제에 대한 피드백을 받았습니다. 피드백을 통해 <b>넌센스 문제를 풀이하는데 어려워하는 사람이 생각보다 많다는 것을 깨달았습니다.</b> 때문에 위 그림과 같이 각 챕터마다 정답을 구할 수 있는 힌트를 제공하도록 구현하였습니다.<br><br>기존 단일 button block을 사용하는 것 대신, action block을 사용하여, 각 챕터에 대한 힌트 메세지를 callback으로 전달하는 로직을 추가하였습니다.
<br><br>넌센스 문제풀이는 힌트를 최대한 보지 않고, 자신만의 창의성으로 해결하는데 큰 재미를 느낄 수 있다고 생각합니다. 최대한 힌트를 보지 않고 문제풀이와 시나리오속 주인공에 몰입한다면 더욱 즐겁게 즐길 수 있을거라 생각합니다.

4. [소프트웨어마에스트로](https://www.swmaestro.org/sw/main/main.do)에서 진행하는 첫 프로젝트인 만큼, 소프트웨어마에스트로에 관련된 문제를 몇가지 출제하였습니다. 홈페이지를 참고하여 문제를 푼다면 더욱 쉽게 문제의도를 파악하실 수 있을겁니다. <b>과거 인증 프로젝트, 또는 우리 12기 연수생의 앞으로의 활동 계획을 참조해주세요.</b>

5. <b>아무리 생각해보아도 정답을 모르겠다면, 힌트 메세지에서 정답 보기를 눌러주세요. 다만, 힌트와 정답을 볼 시에 랭킹 산정 점수에 영향이 갈 수 있습니다!</b>

# 프로젝트 진행 내용

|날짜|주요 안건|회의 내용|
|------|-------------|--------------|
|2021.04.19|프로젝트 주제선정 및 소개|미니프로젝트 주제 제시|
|2021.04.20|프로젝트 주제 fix 및 역할분담|시나리오, 개발파트 분담|
|2021.04.21|2차 기획회의|랭킹 서버구현 및 채팅 ui 결정|
|2021.04.25|시나리오 피드백|완성된 시나리오, 문제 피드백 진행|
|2021.04.26|챗봇 구조 완성 및 피드백|랭킹 서버 테스팅 및 문제점 보완|
|2021.04.28|Bugfix 및 힌트,정답 정보 구분|ux 설계 수정|
|2021.04.29|마지막 기능 점검 및 이미지 생성|고생하셨습니당!|

