# :pushpin: 심플 유튜브
>영화 리뷰 & 평점을 남길 수 있는 리뷰 다이어리
>(Demo링크)

<br />

## 1. 제작 기간 
>일주일 소요 (개인프로젝트)

<br />

## 2. 사용 기술
>HTML, CSS, javaScript, React (React Hook, reducer)

<br />

## 3. 핵심기능 
> 이 서비스의 핵심기능은 영화 리뷰와 함께 1-5점까지 평점을 남기는 기능입니다. 

<details>
<summary><b>핵심 기능 설명 펼치기</b></summary>
<div markdown="1">

### 3-1. 리뷰 작성, 수정, 삭제
### 3-2. 5가지의 평점기능
### 3-3. 정렬기능
### 3-4. localStorage 저장
### 3-5. Open Graph 기능

</div>
</details>
<br />

## 5. 트러블슈팅

### 5-1. Uncaught TypeError: Cannot read properties of undefined (reading 'id')
> 문제 : localStorage에 저장된 데이터(배열)의 0번째를 찾는 코드에서 기존에 있던 일기를 삭제하면 localStorage에 빈 배열이 되어 id 값을 찾을 수 없음
> 해결 : if 문으로 데이터가 1개 이상일 경우에만 실행되도록 수정

<br />

## 6. 회고 / 느낀점
