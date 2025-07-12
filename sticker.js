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
                `<img src="./assets/sticker/${item.name}.png" alt="${item.title}" class="sticker-item">`
            );
        } else {
            stickersContainer.insertAdjacentHTML('beforeend',
                `<img src="./assets/sticker/question.png" alt="미획득 스티커" class="sticker-item">`
            );
        }
    });
}
rendStickerPage();

document.getElementById('stickers').addEventListener('click', (e) => {
    let targetData;
    for(let data of stickerList){
        if (data.title == e.target.alt)
            targetData = data;
    }
        
    if (e.target.classList.contains('sticker-item')) {
        console.log('click'); 
        console.log('스티커 클릭됨:', e.target.alt);        
        document.getElementById('sticker').innerHTML = `
        <div class="glare-card">
            <div class="glare-card-inner">
                <div class="card-content">
                    <img src="./assets/sticker/${targetData.name}.png" alt="" style="width: 100%; height: 100%; object-fit: contain;">
                </div>
                <div class="glare-layer"></div>
                <div class="foil-layer"></div>
            </div>
        </div>
        <div class="sticker-text">
            <h3>${targetData.title}</h3>
            <p>아무 곳이나 Tab</p>
        </div>`;
        document.getElementById('sticker').style.display = 'flex';
    }
});

document.getElementById('sticker').addEventListener('click', ()=>{
    document.getElementById('sticker').style.display = 'none';
});