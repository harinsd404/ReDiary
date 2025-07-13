const whetherList = ['맑음', '흐림', '비'];
const whether = document.querySelector('.whether');

let stickerList = JSON.parse(localStorage.getItem('stickerList')) || [
    {name:'clover', title:'행운의 네잎 클로버', tmi:'네잎클로버는 행운을 가져와 준다.', hands: false},
    {name:'tomato', title:'행운의 토마토', tmi:'토마토가 처음 유럽으로 들어왔을 때는 황금사과라고 불렸다.', hands: false},
    {name:'star', title:'행운의 별', tmi:'별똥별을 보게 된다면 소원을 빌어보자.', hands: false},
    {name:'cat', title:'행운의 고양이', tmi:'고양이를 쓰다듬는 행위는 스트레스 해소에 도움이 된다.', hands: false},
    {name:'mp3', title:'행운의 mp3', tmi:'어떤 일을 하든 노래는 중요하다.', hands: false},
    {name:'latte', title:'라떼', tmi:'라떼는 매우 귀엽다.', hands: false}
];


let diaryData = JSON.parse(localStorage.getItem('diaryData')) || [];

whether.addEventListener('click', () => {
    const currentValue = whether.value.replace('날씨: ', '');
    const currentIndex = whetherList.indexOf(currentValue);
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
        weatherData: whether.value,
        contents: frm.contents.value.trim(),
        dateData: date
    });

    localStorage.setItem('diaryData', JSON.stringify(diaryData));
    console.log('저장된 일기 데이터:', diaryData);

    let foundSticker = null;
    for (let i = 0; i < stickerList.length; i++) {
        if (stickerList[i].hands === false) {
            foundSticker = stickerList[i];
            stickerList[i].hands = true;
            break;
        }
    }

    console.log('foundSticker:', foundSticker);

    if (foundSticker) {
        document.querySelector('#sticker .glare-card img').src = `./assets/sticker/${foundSticker.name}.png`;
        document.querySelector('#sticker .sticker-text h3').textContent = foundSticker.title;
        document.querySelector('#sticker .sticker-text p').textContent = '아무 곳이나 Tab';
        document.getElementById('sticker').style.display = 'flex';
        localStorage.setItem('stickerList', JSON.stringify(stickerList));
        console.log('업데이트된 스티커 목록 (로컬 스토리지 저장됨):', stickerList);

    } else {
        alert('더 이상 받을 수 있는 스티커가 없습니다.');
        document.getElementById('sticker').style.display = 'none';
    }
});

document.getElementById('sticker').addEventListener('click', ()=>{
    document.getElementById('sticker').style.display = 'none';
    window.location.href = 'diary.html'; 
    frm.title.value = ``;
    frm.contents.value = ``;
});
