---
title: 르장드르 변환(Legendre transformation)
category: math science

---

물리학을 공부하다 보면 르장드르 변환이 자주 등장합니다. 특히 라그랑주 역학과 해밀턴 역학은 본질적으로 같은 것으로, 르장드르 변환을 통해 두 역학 사이의 변환이 이뤄집니다. 이번에는 이 르장드르 변환에 대해 정리해보고자 합니다.

# 르장드르 변환(Legendre transformation)이란?

르장드르 변환이란, 어떤 매개변수 $x$에 대한 함수$f(x)$를 그것의 미분  $\frac{df}{dx}=\dot{f}$에 대한 함수로 바꾸는 변환입니다. 원래 함수를 $f$, 변환한 후의 함수를 $g$ 라 할 때, 구체적으로 아래와 같이 정의됩니다. 이때 르장드르 변환은 함수 $f$가 볼록함수일 때에만 정의됩니다.
$$
g(\dot{f})=x\dot{f}-f(x)
$$
이때 주의할 점은 우변에서 $x$를 $\dot{f}$에 관한 함수로 표현해주어야 한다는 점입니다. 르장드르 변환이 볼록함수에서만 정의될 수 있는 이유가 여기에 있습니다. 만약 $f$ 가 볼록함수일 경우 $\dot{f}$ 가 단조증가하거나 단조감소하고, 따라서 역함수가 존재합니다. 그러나 $f$가 볼록함수가 아닐 경우 $\dot{f}$의 역함수가 존재하지 않고, 이는 곧 $x$가 $\dot{f}$에 관한 함수로 표현되지 않는다는 의미이므로 $g$를 정의할 수 없습니다.

## 간단한 예시

예를 들어 함수 $f(x)=x^2$ 을 르장드르변환해보도록 하겠습니다. 먼저 $\dot{f}=\frac{df}{dx}=2x$ 이므로 $x=\dot{f/2}$ 가 됩니다. 

음 르장드르 환을 공부하면서 당황했던 점은 대부분의 자료에서 이 변환을
