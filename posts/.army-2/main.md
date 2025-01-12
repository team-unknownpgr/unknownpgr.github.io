---
title: 군대에서 코딩한다는 것
category: army
---

# Programming @ Army

프로그래머가 입대를 하게 된다면 누구나 코딩을 하고 싶을 것입니다. 저 역시 하루종일 컴퓨터만 붙잡고 살던 사람으로, 훈련소에서 그렇게 컴퓨터가 그리울 수가 없었습니다.

물론 이것은 입대 전부터 쉽게 예측할 수 있는 사실이었습니다. 그래서 저는 군대에서 프로그래밍하는 것을 오래전부터 계획해왔습니다. 자대에 배치받은 후부터는 실제로 그 계획에 따라 프로그래밍을 할 준비를 했고, 이제는 군대 내부에서 열심히 컴퓨터를 사용하는 중입니다. 물론

그래서 저와 같은 상황이실 다른 분들께 제 경험을 공유해드리고자 이 글을 작성하게 되었습니다.

## 군대에서 컴퓨터를 사용할 수 있는가?

부대에서 컴퓨터, 혹은 그 비슷한 전자기기를 사용할 수 있는 환경은 세 가지가 있습니다.

- 하나는 개인정비시간입니다. 이 시간동안 사이버지식정보방을 와도 좋고 스마트폰을 사용해도 됩니다.
- 다른 하나는 야간 연등입니다. 이는 수면 시간을 줄여 사이버지식정보방을 이용하는 것으로 최대 22시부터 24시까지(=2시간) 이용할 수 있습니다.
- 마지막으로 근무입니다. 저는 근무를 설 때 군 내부망인 국방망에 연결된 컴퓨터를 사용합니다. 제가 서는 근무는 다행스럽게도 할 일이 크게 많지 않아 컴퓨터로 이것저것 해볼 수 있는 시간이 많이 있습니다. 물론 근무 시간에 다른 짓을 하는 것은 실은 규칙을 위반하는 것이므로 이는 조심해서 해야 합니다.

이때 앞의 두 가지는 인터넷에 연결되어있으므로 비교적 자유롭지만, 근무 때 컴퓨터를 사용하는 것은 국방망에만 연결되어있어 검색 등을 할 수가 없습니다. 또한 사이버지식정보방(이하 싸지방)은 컴퓨터를 껐다 켜면 초기화되므로 코딩과 같은 장기 프로젝트를 진행하기에는 적합하지 않습니다. 특히 이 컴퓨터는 각종 설정 및 터미널이 전부 막혀있고, 인터넷 역시 80(HTTP), 443(HTTPS) 포트 이외에 다른 포트를 사용할 수 없게 되어 있습니다.

## 코딩은 서버에서

이러한 바, 군대에서 일단 로컬 디바이스로 코딩을 한다는 것은 불가능합니다. 스마트폰으로 코딩하기에도 애매하거니와 싸지방에서 코딩을 하는 것은 어불성설입니다. 그러므로 서버를 하나 마련해두고 접속하여 코딩을 해야 합니다. 저는 대충 세 개 정도의 서버를 돌리고 있습니다.

하나는 집에 있는 홈 서버로 Linux(Ubuntu) 운영체제 위에 Kubernetes cluster가 올라가 있습니다. 그 위에 Guacamole Remote Desktop Server가 올라가있습니다. Guacamole는 웹 브라우저로 가상 데스크탑을 사용할 수 있게 해 주는 솔루션입니다. 또한 Code-Server가 올라가 있어서 웹 브라우저에서 터미널 등을 사용할 수 있습니다. 마지막으로 Route53 기반 DDNS를 구현하는 서비스가 올라가 있어서 도메인으로 접근할 수 있습니다.

다음은 제가 사용하던 Macbook입니다. 이는 단순히 집에 있는 공유기에 무선으로 연결되어있고 Port forwarding만 되어 있습니다. 유동 IP 주소를 사용하고 도메인을 연결하지 않았으므로 Public IP Address는 수 주에 한번씩 바뀝니다. 그러나 집에 부모님이 계시므로 IP가 바뀌는 경우에는 IP 확인 사이트에 접속하여 public IP를 알려달라고 부탁드리면 됩니다. 여기에 접속할 때에는 홈 서버의 Guacamole를 사용하여 VNC로 접근합니다.

마지막으로 VNC로 MacBook에 접근하는 것이 너무 느려서 새로 만든 솔루션으로, AWS에서 Windows Server 기반의 EC2 Instace를 하나 만들었습니다. 인스턴스 타입은 t2.large를 사용하고 있으며 마찬가지로 홈 서버의 Guacamole를 사용해서 접근하지만 VNC 대신 RDP를 사용합니다. RDP는 VNC보다 훨씬 빨리 작동합니다.

이 세 가지 서버는 서로 다른 목적을 위해 동작합니다. 홈 서버는 주로 개발 및 서비스 배포 목적으로 사용합니다. MacBook은 거기에 중요한 자료들이 다 들어있으므로 자료를 가져올 때 사용합니다. 그리고 AWS EC2 Instace는 카톡, 코딩 등 주 작업을 전부 진행하기 위한 목적을 가지고 있습니다. 이 포스트 역시 EC2에서 작성 중입니다.
