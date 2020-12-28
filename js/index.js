const form = document.querySelector('form'); // likes js-toDOFrom input을 감싸고 있는 상위 태그 
const toDoinput = form.querySelector('input'); //입력값
const notCompleted = document.querySelector('.notCompleted');
const Completed = document.querySelector('.Completed'); //리스트

const TODO_LS = "todo_NComplited";  
const TODO_LS_C = "todo_Complited";  

let ToDos_array =[]; //할일 목록이 생각날 때마다, ToDos라는 빈 배열에 추가한다. 
let ToDos_array_c =[]; //완료항목에 추가한다. 




function deleteToDo(event){ //event가 전달한 객체에 대한 참조
    const delbtn = event.target;
    const li_delbtn = delbtn.parentNode.parentNode;
    notCompleted.removeChild(li_delbtn);

    const cleanToDos = ToDos_array.filter(function(toDo){
        return toDo.id !== parseInt(li_delbtn.id);
         //parseInt 함수는 첫 번째 인자를 문자열로 변환하고 파싱하고,  그 문자열을 파싱하여 정수나 NaN을 리턴합니다.
    });
    ToDos_array = cleanToDos;
    console.log(cleanToDos,'여긴 성공버전');
    saveToDos();
}

function deleteToDo_C(event){ //event가 전달한 객체에 대한 참조
    const delbtn_C = event.target;
    const li_delbtn_C = delbtn_C.parentNode.parentNode;
    Completed.removeChild(li_delbtn_C);

    const cleanToDos_c = ToDos_array_c.filter(function(toDo_c){
        console.log(toDo_c.id,'toDo.id');
        // console.log(parseInt(li_delbtn_C.id),'li_del_C.id');
        console.log(parseInt(li_delbtn_C.id),'33');
        return toDo_c.id !== parseInt(li_delbtn_C.id);
         //parseInt 함수는 첫 번째 인자를 문자열로 변환하고 파싱하고,  그 문자열을 파싱하여 정수나 NaN을 리턴합니다.
    });
    ToDos_array_c = cleanToDos_c;
    console.log(cleanToDos_c,'여기 뭐가나와?');
    saveToDos_C();
}



function localdataPassing(event){ //notComplied의 값을 Complited로 전달하는 함수 , 같은 id는 제거해서 보내자 ! 
    const completed_btn = event.target;
    const li_completed_btn = completed_btn.parentNode.parentNode;
    // console.log(li_completed_btn,"fff");
    const newToDos = ToDos_array.filter(function(toDo){
        return toDo.id !== parseInt(li_completed_btn.id);
         //parseInt 함수는 첫 번째 인자를 문자열로 변환하고 파싱하고,  그 문자열을 파싱하여 정수나 NaN을 리턴합니다.
    });
    ToDos_array = newToDos
    // cleanToDos.remove();
    saveToDos(); // 보낸 값은 빼고 나머지 값을 새롭게 저장 
    // 참고: saveToDos 를 텍스트 값으로 분류해서 같으면 저장, 아니면 삭제로 분류해보자 !
}





function checkToDo(event){
    const ckbtn = event.target.parentNode.parentNode;
    ckbtn.remove();
    
    // Completed.appendChild(ckbtn);
//saveToDos 주이고 테스트 
    const ckbtn_text = ckbtn.innerText;
    // const ckbtn_id = ckbtn.id;
    const ckbtn_id = ToDos_array_c.length +1;
    addList_C(ckbtn_text, ckbtn_id); //completed에서 노출시키는 함수 
    // const ToDoObj_C= {
    //     text: ckbtn_text,
    //     id : ckbtn_id
    // };
    
    // ToDos_array_c.push(ToDoObj_C);
    // ckbtn_deleted_btn.addEventListener("click",deleteToDo);
   
    // console.log(TODO_LS_C,'11');
    // console.log(TODO_LS_C.value,'22');
    // console.log(ToDos_array_c,'33');
    // console.log(ToDos_array_c.value,'44');

    // if (ToDos_array_c !==null ){
    //     const newToDos_array_c = ToDos_array_c.filter(function(toDo_C){
    //     console.log(toDo_C.text,'todo_C-t');
    //     // // console.log(parseInt(ckbtn.innerText),'1');
    //     console.log(ckbtn.innerText+'3r','ckbtn.innerText');
    //     const ckbtn_change = ckbtn.innerText+'3r';
    //     // // console.log(parseInt(ckbtn.innerText,'ckbt-t')
    //     // console.log(ckbtn,'1');
    //     // console.log(ckbtn_ck_n,'2'); 

    //     return toDo_C.text !== ckbtn_change;
    
    //     });
    //     ToDos_array_c = newToDos_array_c;
    //     console.log(ToDos_array_c)
    //     saveToDos_C();
    // };


    // saveToDos_C();
    
}




function addList_C(text,id){ //save를 여기서 하면 유지된다. 
    
    const li = document.createElement('li');
    const checkBtn = document.createElement('button');
    const delBtn = document.createElement('button');
    delBtn.setAttribute('class',"delbtn_c");
    const newId = id;
    // console.log(newId, 'd여기 테스트');

    // checkBtn.innerHTML ="<i class='fa fa-check'></i>";
    delBtn.innerHTML ="<i class='fa fa-trash'></i>";
    li.innerText= text;

    li.appendChild(delBtn);
    li.appendChild(checkBtn);
    li.id = newId;
    Completed.appendChild(li);

    console.log(text,newId,'addList_C');
    const ToDoObj_C= {
        text: text,
        id : id
    };

    ToDos_array_c.push(ToDoObj_C);
    delBtn.addEventListener("click", deleteToDo_C); 
    saveToDos_C(); 
    
 
    // return Completed;
 
}




function saveToDos_C(){
    localStorage.setItem(TODO_LS_C,JSON.stringify(ToDos_array_c));
}

function saveToDos(){
    localStorage.setItem(TODO_LS,JSON.stringify(ToDos_array)); // js는 모든 데이터를 string형태로만 저장 가능하다.
    

}

function handleSubmit(event){ //왜 event라고 붙여주는 걸까?
    event.preventDefault(); //이벤트를 취소할 수 있는 경우, 이벤트의 전파를 막지않고 그 이벤트를 취소합니다.
    const currentValue = toDoinput.value;
    addList(currentValue);
   

    toDoinput.value="";
}


function addList(text){ //paintToDos
    // console.log (text);

    const li = document.createElement('li');
    const checkBtn = document.createElement('button');
    const delBtn = document.createElement('button');
    delBtn.setAttribute('class',"delbtn");
    const newId = ToDos_array.length +1;

    checkBtn.innerHTML ="<i class='fa fa-check'></i>";
    delBtn.innerHTML ="<i class='fa fa-trash'></i>";
    li.innerText=text;

    li.appendChild(delBtn);
    li.appendChild(checkBtn);
    li.id = newId;
    notCompleted.appendChild(li);
  // deleteToDo함수 
    checkBtn.addEventListener("click",checkToDo); // checkToDo 함수 
    checkBtn.addEventListener("click",localdataPassing); 
    
    const ToDoObj = {
        text: text,
        id : newId
    };


    ToDos_array.push(ToDoObj);
    delBtn.addEventListener("click", deleteToDo); 
    saveToDos();

    
}

function loadToDos_C(){
    const loadedToDos_C = localStorage.getItem(TODO_LS_C);
    if (loadedToDos_C !== null){
        const parsedToDos_C =JSON.parse(loadedToDos_C);
        // console.log(parsedToDos_C,'33');
        parsedToDos_C.forEach(function(toDo){
            addList_C(toDo.text,toDo.id);
        })
    }
    
}


function loadToDos(){
    const loadedToDos = localStorage.getItem(TODO_LS);
    if(loadedToDos !== null){
        const parsedToDos =JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            // console.log(toDo);
            addList(toDo.text);
        });
        
        //foreach는 기본적으로 array에 담겨있는 것들을 한번씩 함수를 실행시켜줌 ,function(toDo)함수를 하나
        // 만들어서 실행한다. 
        }
    
    }



function init(){
    loadToDos();
    loadToDos_C();
    form.addEventListener("submit", handleSubmit);
    // btn.addEventListener("click",handleSubmit);
    


 
}
init();