let stickerList = JSON.parse(localStorage.getItem('stickerList')) || [
    {name:'clover', title:'행운의 네잎 클로버', hands: false},
    {name:'tomato', title:'행운의 토마토', hands: false},
    {name:'star', title:'행운의 별', hands: false},
    {name:'latte', title:'라떼', hands: false}
];

function rendStickerPage(){
    document.getElementById('stickers').innerHTML = ``;
    for(let i=0;i<6;i++){
        if (stickerList[i].hands === true) {
            document.getElementById('stickers').insertAdjacentHTML('beforeend',
                `<img src="./assets/sticker/${stickerList[i].name}.png" alt="" class="sticker">`
            );
        } else {
            document.getElementById('stickers').insertAdjacentHTML('beforeend',
                `<img src="./assets/sticker/question.png" alt="">`
            );
        }
    }
}
rendStickerPage();

document.querySelector('.sticker').addEventListener('click', ()=>{
    document.getElementById('sticker').innerHTML = `
    <div class="glare-card">
        <div class="glare-card-inner">
            <div class="card-content">
                <img src="./assets/sticker/clover.png" alt="" style="width: 100%; height: 100%; object-fit: contain;">
            </div>
            <div class="glare-layer"></div>
            <div class="foil-layer"></div>
        </div>
    </div>
    <div class="sticker-text">
        <h3>행운의 네잎 클로버</h3>
        <p>아무 곳이나 Tab</p>
    </div>
    `
    document.getElementById('sticker').style.display = 'flex';
});