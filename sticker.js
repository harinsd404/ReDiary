let stickerList = JSON.parse(localStorage.getItem('stickerList')) || [
    {name:'clover', title:'행운의 네잎 클로버', hands: false},
    {name:'tomato', title:'행운의 토마토', hands: false},
    {name:'star', title:'행운의 별', hands: false},
    {name:'latte', title:'라떼', hands: false}
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
            document.querySelector('#sticker .sticker-text p').textContent = '아무 곳이나 Tab'; // 고정 텍스트
            
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