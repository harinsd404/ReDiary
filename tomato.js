let diaryData = JSON.parse(localStorage.getItem('diaryData')) || [];
let diaryLen = diaryData.length;
const main = document.getElementById('main');

let lastGrowStage = parseInt(localStorage.getItem('lastGrowStage')) || 0;

// 토마토 성장 단계 계산
// 일기 0-1개: grow0.png
// 일기 2-3개: grow1.png
// 일기 4-5개: grow2.png
// 일기 6개 이상: grow3.png
let currentGrowStage = Math.min(Math.floor(diaryLen / 2), 3);
main.innerHTML = `<img src="./assets/tomato/grow${currentGrowStage}.png" alt="토마토 성장 단계 ${currentGrowStage}">`;

if (currentGrowStage > lastGrowStage) {
    swal(`축하합니다! 토마토가 ${currentGrowStage}단계로 성장했습니다!`);
    localStorage.setItem('lastGrowStage', currentGrowStage); 
} else if (currentGrowStage < lastGrowStage) {
    localStorage.setItem('lastGrowStage', currentGrowStage);
}