let diaryData = JSON.parse(localStorage.getItem('diaryData')) || [];

function rendPage(){
    const main = document.getElementById('main');

    if (diaryData == ''){
        document.querySelector('.main').innerHTML = `
        <h4>아직 일기가 작성되지 않았습니다.</h4>
        `;
    } else {
        main.innerHTML = ``;
        diaryData.forEach(item=>{
            main.insertAdjacentHTML('beforeend', `
                <div class="diary">
                    <div class="head">
                        <label for="" class="title">제목:<input type="text" class="title" value="${item.title}" readonly></label>
                        <input class="whether" type="button" value="${item.weatherData}" readonly>
                    </div>
                    <div class="contents">
                        <textarea class="lined diaryWrite" placeholder="오늘의 일기를 작성해주세요." readonly>${item.contents}</textarea>
                        <div class="line">
                            
                        </div>
                    </div>
                    <div class="date">
                        <p>${item.dateData}</p>
                    </div>
                </div>
            `);
        });
    }
}

rendPage();