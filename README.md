# :pushpin: 영화 리뷰 다이어리
>영화 리뷰 & 평점을 남길 수 있는 리뷰 다이어리
>
>(https://movie-review-diary.web.app/)

<details>
<summary>이미지 미리보기</summary>
<div markdown="1">

<img src="https://user-images.githubusercontent.com/90510192/178109759-c8703df1-afba-4819-b14d-5e6359ddc49d.PNG" width="400"> 
<img src="https://user-images.githubusercontent.com/90510192/178109596-2f4b488c-15d4-42dd-bbb1-3f95dce3e0c7.PNG" width="400">
<img src="https://user-images.githubusercontent.com/90510192/178109761-536247ef-6f1d-4dab-9992-545ecd8c9f36.PNG" width="400">
<img src="https://user-images.githubusercontent.com/90510192/178109598-1887c515-82a0-4264-9765-3e3e11617959.PNG" width="400">


</div>
</details>




<br />

## 1. 제작 기간 
>일주일 소요 (개인프로젝트)

<br />

## 2. 사용 기술
>HTML, CSS, javaScript, React (React Hook, React Router)

<br />

## 3. 핵심기능 

### 3-1. 리뷰 작성, 수정, 삭제
  - 영화를 본 날짜와 제목, 평점, 한줄평, 리뷰가 담긴 일기를 작성하고 수정하고 삭제할 수 있습니다. 
  - 새 리뷰쓰기를 누르면 해당 날짜가 자동으로 세팅된 에디터 페이지가 열리고 영화에 대한 리뷰를 할 수 있습니다. 
  - 저장된 리뷰를 눌러 상세페이지로 이동하면 수정과 삭제가 가능합니다. 
### 3-2. 1-5점까지 평점기능
  - 영화리뷰와 함께 1점부터 5점까지의 평점을 남길 수 있습니다. 
### 3-3. 정렬기능
  - 리뷰를 정렬할 수 있는 필터가 있습니다. 
    - 최신순 > 오래된 순
    - 모든 평점 > 꿀잼 > 유잼 > 쏘쏘 > 노잼 > 핵노잼
### 3-4. localStorage 저장
  - 저장한 일기는 localStorage에 저장됩니다. 
### 3-5. Open Graph
  - Open Graph가 적용되어 있습니다. 
  <img src="https://user-images.githubusercontent.com/90510192/177787902-bddb265c-2414-428e-aebe-b4d91b4c3f31.PNG" width="300">

<br />

## 4. 트러블슈팅

### 4-1. 월별 데이터 렌더링 시 각 달의 마지막 날에 쓴 리뷰가 보이지 않는 문제
>문제 : 해당 월의 마지막 날을 구하는 코드에서 연, 월, 일까지만 세팅을 해놓음
>
>해결 : 시간, 분, 초까지 구하도록 코드 수정

### 4-2. Uncaught TypeError: Cannot read properties of undefined (reading 'id')
>문제 : localStorage에 저장된 데이터(배열)의 0번째를 찾는 코드가 있는데, 기존에 있던 일기를 삭제하면 localStorage의 데이터가 빈 배열이 되어 id 값을 찾을 수 없음
>
>해결 : if 문으로 데이터가 1개 이상일 경우에만 실행되도록 수정

### 4-3. error: failed to push some refs to '저장소 주소'
>문제 : 원격저장소에 로컬(내 컴퓨터)에는 없는 파일이 있을 때 push를 할 경우 나는 오류
>
>해결 : 원격저장소에서 로컬로 저장하지 않은 파일을 pull 한 후 다시 push

<br />

## 5. 성능개선

