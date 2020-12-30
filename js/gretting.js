const form_2 = document.querySelector(".gretting");
const input = form_2.querySelector("input");
const h3 = document.querySelector(".grettings_result");

const NAME_LS = "currentName"
const SHOWING_CN_2 ="showing";


function askForName(){
    form_2.classList.add(SHOWING_CN_2); // class 추가하기
    form_2.addEventListener("submit",handleSubmit)
   
}

function addGreeting(text){
    const date = new Date();
    const dateToday = date.getDate();
    const month =date.getMonth();
    const year =date.getFullYear();

    
    form_2.classList.remove(SHOWING_CN_2);
    h3.classList.add(SHOWING_CN_2);
    h3.innerText =`${year}년 ${month+1}월 ${dateToday}일
    ${text}님, 오늘 할일 하나씩 정리해보세요.`;
    
    console.log(text);
}


function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    addGreeting(currentValue);
    saveName(currentValue);
}



function saveName(text){
    localStorage.setItem(NAME_LS, text);
}

function loadName(){
    const currentName = localStorage.getItem(NAME_LS);
    if(currentName === null){
        //이름이 입력안된 경우
        askForName();
        console.log('askname했어?');
        
    }else{
        addGreeting(currentName);
    }
}



function init(){
    loadName();
    console.log('안나오?');

}
init();