const form_2 = document.querySelector(".gretting");
const input = form_2.querySelector("input");
const h3 = document.querySelector(".grettings_result");

const NAME_LS = "currentName"
const SHOWING_CN_2 ="showing";


function askForName(){
    form_2.classList.add(SHOWING_CN_2); // class 추가하기
    form_2.addEventListener("submit",handleSubmit)
    console.log('야');
}

function addGreeting(text){
    const date = new Date();
    const dateToday = date.getDate();
    const month =date.getMonth();
    const year =date.getFullYear();

    
    form_2.classList.remove(SHOWING_CN_2);
    h3.classList.add(SHOWING_CN_2);
    h3.innerText =`${text}님! "${year}-${month}-${dateToday}" 
    오늘 할일을 적어주세요!`;
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