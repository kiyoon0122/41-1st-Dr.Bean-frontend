**팀명: Dr. Bean**

닥터빈 프로젝트 Front-end 소개
글로벌 신발 전문 쇼핑몰 사이트 닥터마틴 클론 프로젝트
짧은 프로젝트 기간동안 개발에 집중해야 하므로 디자인/기획 부분만 클론했습니다.
개발은 초기 세팅부터 전부 직접 구현했으며, 아래 데모 영상에서 보이는 부분은 모두 백앤드와 연결하여 실제 사용할 수 있는 서비스 수준으로 개발한 것입니다.
개발 인원 및 기간
개발기간 : 2023/1/2 ~ 2023/1/13
개발 인원 : 프론트엔드 3명, 백엔드 2명
프론트엔드 github 링크:https://github.com/wecode-bootcamp-korea/41-1st-Dr.Bean-frontend
데모 영상(추후)


적용 기술 및 구현 기능
적용 기술
Front-End : React.js, sass
Back-End : Python, Django web framework, Beautifulsoup, Selenium, Bcrypt, My SQL (백엔드 추가)
Common : Git, Github, Trello, Slack

**구현 기능**

1. 회원가입 / 로그인 페이지  
- 아이디 및 패스워드 유효성 검사 (아이디, 비밀번호 조건 확인 및 비밀번호, 비밀번호 확인 일치 여부 검사)
2. 메인 페이지
- 메인 페이지 최상단 슬라이더
- 페이지 최상단으로 이동하는 네비게이션 버튼 구현
- 대륙 선택시 해당 대륙 국가 상품 필터링 기능 구현
3. 제품 상세 페이지  
- 사이즈, 그라인드방식, 수량 선택 후 장바구니 버튼 클릭시 백엔드 서버로 유저 데이터 전송
- 상품 후기 펼쳐보기/접기 버튼 기능 및 더 보기 버튼으로 동적인 페이지 구현
4. Nav, Navslider, Footer 바
- 메인 페이지 내 카테고리 선택시 카테고리에 맞는 상품만 filter되는 슬라이더
- 햄버거 메뉴 (Nav 바와 연동되어 각 카테고리 버튼 클릭시 아래에 세부 카테고리 출력)
5. 제품 리스트 페이지  
제품이 정해진 레이아웃에 따라 재정렬되어 출력
6. 장바구니 및 결제
- modal 창에서 사이즈, 수량 선택 후 장바구니 담기 클릭시 백엔드 서버로 유저 데이터 전송
- 유저 정보 확인 후 백엔드 서버에 저장된 장바구니 데이터 불러와서 출력
- 삭제 버튼으로 장바구니 상품 삭제 기능
- 장바구니 및 결제창에서 선택한 상품들의 가격 총합계 및 포인트 차감 기능 구현

Reference

이 프로젝트는 닥터마틴 사이트를 참조하여 학습목적으로 만들었습니다.
실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
