let diaryData = JSON.parse(localStorage.getItem('diaryData')) || [];
let diaryLen = diaryData.length;
const main = document.getElementById('main');

let growStage = Math.min(Math.floor(diaryLen / 2), 3);
main.innerHTML = `
<img src="./assets/tomato/grow${growStage}.png" alt="토마토 성장 단계 ${growStage}">
<p>현재 작성한 일기 수: ${diaryLen}</p>
`;