# 간단한 계산기 만들기(컴포넌트화 적용)

과정: 실습
복습: No
소요시간: 1
주제: 컴포넌트 재사용해보기

## 1. UI Design
![uidesign](https://user-images.githubusercontent.com/45230079/120078481-bd8dd000-c0ea-11eb-9fc0-a5900c1a44d9.png)

- gray color: #808080
- dark-gray color: #4A4A4A
- orange color: #fc9e0a

## 2. Feature List

expression(계산식): 3+4*5
=, +, -: 결과값을 낸다. eval("2+3*5"))

*,/ : 계산식에 누적해준다.

![featurelist](https://user-images.githubusercontent.com/45230079/120078503-da2a0800-c0ea-11eb-8d6c-da6ad2c3e0b7.png)
기능: 5+8*3 (식 보여주기), =누르면 결과 계산 (29)

AC: 완전 초기화

## 3. 컴포넌트 설계
![components)](https://user-images.githubusercontent.com/45230079/120078518-e44c0680-c0ea-11eb-8dae-9418761a36f9.png)

## 4. 상세 로직 설계

![logic](https://user-images.githubusercontent.com/45230079/120078544-ef069b80-c0ea-11eb-8bc3-018449eda305.png)

- 에러처리: 올바른 계산식이 아닌 경우 콘솔창에 오류임을 출력하고 계산기를 초기화한다.

---

## eval()함수

- 계산식을 계산한 결과를 반환
- ex
    - eval(2+5*6) //32
    - eval("2") //2
    - 주의
        - eval("") //undefined
        - eval() //undefined
        - eval(2*+) //와 같은 올바르지 않은 수식 ⇒ syntax error

---


## 보완이 필요한 기능
- 정규식을 활용해 올바른 계산식이 아님을 판단하는 로직


