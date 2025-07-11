/* 날씨 버튼 눌렀을 때 값이 바뀜 */
const whetherList = ['맑음', '흐림', '비'];
const letter = {
    /*'title': '제목',
    'whether': whether[0],
    'diaryWrite': 'write',
    'date': '2025년 07월 02일 22:05:11',*/
};
const whether = document.querySelector('.whether')


whether.addEventListener('click', ()=>{
    console.log('click');
    if (whether.value == '날씨: ' + whetherList[whetherList.length-1]){
        whether.value = '날씨: ' + whetherList[0];
        return;
    }
        
    for(let i=0;i<(whetherList.length)-1;i++){
            if(whether.value == '날씨: '+ whetherList[i]){
                whether.value = '날씨: ' + whetherList[i+1];
                return;
        }
    }
});


document.querySelector('.write').addEventListener('click', (e) => {
    e.preventDefault;

    const title = document.querySelector('.who');
    const whether = document.querySelector('.letter');
    const diaryWrite = document.querySelector()

    

    let today = new Date(); 
    
    let year = today.getFullYear();
    let month = (today.getMonth() + 1).toString().padStart(2, '0');
    let day = today.getDate().toString().padStart(2, '0');
    let hours = today.getHours().toString().padStart(2, '0');
    let minutes = today.getMinutes().toString().padStart(2, '0'); 
    
    const date = `${year}-${month}-${day} ${hours}:${minutes}`;
    console.log(date);
    letterData.push({whoData: who.value.trim(), letterData: letter.value.trim(), dateData: date});
    who.value = ``;
    letter.value = ``;
    
    localStorage.setItem('letterData', JSON.stringify(letterData));
    window.location = './letter-page.html';
});