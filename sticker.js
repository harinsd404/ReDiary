let stickerList = JSON.parse(localStorage.getItem('stickerList')) || [
    {name:'clover', title:'행운의 네잎 클로버', tmi:'네잎클로버는 행운을 가져와 준다.', hands: false},
    {name:'tomato', title:'행운의 토마토', tmi:'토마토가 처음 유럽으로 들어왔을 때는 황금사과라고 불렸다.', hands: false},
    {name:'star', title:'행운의 별', tmi:'별똥별을 보게 된다면 소원을 빌어보자.', hands: false},
    {name:'cat', title:'행운의 고양이', tmi:'고양이를 쓰다듬는 행위는 스트레스 해소에 도움이 된다.', hands: false},
    {name:'mp3', title:'행운의 mp3', tmi:'어떤 일을 하든 노래는 중요하다.', hands: false},
    {name:'latte', title:'라떼', tmi:'라떼는 매우 귀엽다.', hands: false}
];

function rendStickerPage(){
    const stickersContainer = document.getElementById('stickers');
    stickersContainer.innerHTML = ''; // 기존 내용 초기화

    stickerList.forEach(item => {
        if (item.hands === true) {
            stickersContainer.insertAdjacentHTML('beforeend',
                `<img src="./assets/sticker/${item.name}.png" alt="${item.title}" class="sticker-item" data-sticker-name="${item.name}">`
            );
        } else {
            stickersContainer.insertAdjacentHTML('beforeend',
                `<img src="./assets/sticker/question.png" alt="미획득 스티커" class="sticker-item" data-sticker-name="question">`
            );
        }
    });
}
rendStickerPage();

// 이벤트 위임을 사용하여 스티커 클릭 이벤트 처리
document.getElementById('stickers').addEventListener('click', (e) => {
    if (e.target.classList.contains('sticker-item')) {
        const clickedStickerName = e.target.dataset.stickerName; 
        const clickedStickerData = stickerList.find(sticker => sticker.name === clickedStickerName);

        if (clickedStickerData) {
            // 스티커 오버레이 내용 업데이트 (innerHTML 대신 요소 속성 변경)
            document.querySelector('#sticker .glare-card img').src = `./assets/sticker/${clickedStickerData.name}.png`;
            document.querySelector('#sticker .sticker-text h3').textContent = clickedStickerData.title;
            document.querySelector('#sticker .sticker-text p').textContent = `${clickedStickerData.tmi}아무 곳이나 Tab`; // 고정 텍스트
            
            document.getElementById('sticker').style.display = 'flex';

            console.log('클릭된 스티커 데이터:', clickedStickerData);
        } else {
            console.log('클릭된 스티커 데이터를 찾을 수 없습니다.');
        }
    }
});

document.getElementById('sticker').addEventListener('click', ()=>{
    document.getElementById('sticker').style.display = 'none';
});

document.getElementById('sticker').addEventListener('click', ()=>{
    document.getElementById('sticker').style.display = 'none';
});