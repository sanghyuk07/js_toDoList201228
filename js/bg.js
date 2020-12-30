const body = document.querySelector('body');

const IMG_NUMBER = 3; //몇개의 이미지가 있나



function paintImage(imgNumber){
    const image = new Image();
    image.src = `background/${imgNumber + 1}.jpg`
    image.classList.add("bgimage");
    body.append(image);
}

function getRandom(){
    const number =Math.floor(Math.random() * IMG_NUMBER);
    //Math.floor 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환한다. 
    //Math.random() 함수는 0이상 1미만의 구간에서 근사적으로 균일한 값을 랜덤으로 반환 
    return number;
}


function init(){
    const randomNumber = getRandom();
    paintImage(randomNumber);
}
init();