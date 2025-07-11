const whetherList = ['맑음', '흐림', '비'];
const whether = document.querySelector('.whether');

let diaryData = JSON.parse(localStorage.getItem('diaryData')) || [];

whether.addEventListener('click', () => {
    const currentValue = whether.value.replace('날씨: ', '');
    const currentIndex = whetherList.indexOf(currentValue);
    // 다음 인덱스를 계산, 배열의 끝에 도달하면 0으로 순환
    const nextIndex = (currentIndex + 1) % whetherList.length;
    whether.value = '날씨: ' + whetherList[nextIndex];
});

document.querySelector('.write').addEventListener('click', (e) => {
    e.preventDefault();

    const frm = document.frm;

    if (frm.title.value.trim() === '') {
        alert('제목을 작성해 주세요.');
        frm.title.focus();
        return;
    }
    if (frm.contents.value.trim() === '') {
        alert('일기를 작성해 주세요.');
        frm.contents.focus();
        return;
    }

    let today = new Date();
    let year = today.getFullYear();
    let month = (today.getMonth() + 1).toString().padStart(2, '0');
    let day = today.getDate().toString().padStart(2, '0');
    let hours = today.getHours().toString().padStart(2, '0');
    let minutes = today.getMinutes().toString().padStart(2, '0');
    const date = `${year}-${month}-${day} ${hours}:${minutes}`;

    diaryData.push({
        title: frm.title.value.trim(),
        weatherData: whether.value, // 'wheterData' 오타 수정
        contents: frm.contents.value.trim(),
        dateData: date
    });

    frm.title.value = '';
    frm.contents.value = '';

    localStorage.setItem('diaryData', JSON.stringify(diaryData));
    console.log('저장된 데이터:', diaryData);
});