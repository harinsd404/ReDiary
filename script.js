/* 날씨 버튼 눌렀을 때 값이 바뀜 */
const whetherList = ['맑음', '흐림', '비'];
const whether = document.querySelector('.whether')

let diaryData = {
    /*'title': '제목',
    'whether': whether[0],
    'diaryWrite': 'write',
    'date': '2025년 07월 02일 22:05:11',*/
};

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
    e.preventDefault();

    if (frm.title.value.trim() === '') {
        frm.title.focus();
        alert('제목을 작성해 주세요.');
        return;
    } else if(frm.contents.value.trim() === ''){
        frm.contents.focus();
        alert('일기를 작성해 주세요.');
        return;
    }

    let today = new Date(); 
    
    let year = today.getFullYear();
    let month = (today.getMonth() + 1).toString().padStart(2, '0');
    let day = today.getDate().toString().padStart(2, '0');
    let hours = today.getHours().toString().padStart(2, '0');
    let minutes = today.getMinutes().toString().padStart(2, '0'); 
    
    const date = `${year}-${month}-${day} ${hours}:${minutes}`;
    console.log(date);

    diaryData.push({title: frm.title.value.trim(), whetherData: frm.whether.value, contents: frm.contents.value.trim(), dateData: date});
    frm.title.value = ``;
    frm.contents.value = ``;
    
    localStorage.setItem('diaryData', JSON.stringify(diaryData));
    console.log(diaryData);
});