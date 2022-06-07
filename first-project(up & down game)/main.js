let UserNumber = document.getElementById("user-number");
let SendData = document.getElementById("send-user-number");
let Result = document.getElementById("result");
let SuccessSound = document.getElementById("success-sound");
let FailSound = document.getElementById("fail-sound");
let Reset = document.getElementById("game-reset");
let chance = document.getElementById("chance");
SendData.addEventListener("click",StartGame);
Reset.addEventListener("click",ResetGame);
UserNumber.addEventListener("focus",function(){UserNumber.value = ""});

let RandomNumber;
let count = 5;
let history = [];

// 랜덤함수 생성
function SelectNumber(){
    RandomNumber = Math.floor(Math.random()*100)+1;
    console.log(RandomNumber);

    
}

function StartGame(){
    
    let UserValue = UserNumber.value;

    // 숫자 범위 지정
    if(UserValue > 100 || UserValue < 1)
    {
        Result.style.fontSize = "30px";
        Result.textContent = "1~100 사이의 숫자를 입력해주세요";
        return;
    }

    // 같은숫자 입력시 실행
    if(history.includes(UserValue))
    {
        Result.style.fontSize = "30px";
        Result.textContent = "이미 입력한 숫자입니다."
        return;
    }
    Result.style.fontSize = "100px";
    count --;
    chance.textContent = `남은 기회 : ${count}`;

    // 숫자 비교 
    if(UserValue > RandomNumber)
    {
        
        Result.textContent = "DOWN";
        
    }
    else if(UserValue < RandomNumber)
    {
        
        Result.textContent = "UP";
    }

    // 숫자를 맞출시 게임 성공
    else if(UserValue == RandomNumber)
    {
        SuccessSound.play();
        Result.textContent = "정답!";
        SendData.disabled = true;
        return;
    }

     // 기회가 0이 될 경우 게임 실패
     if(count == 0)
     {
         FailSound.play();
         Result.textContent = "실패!";
         SendData.disabled = true;
         return;
     }

    history.push(UserValue);
}


// 게임 리셋
function ResetGame(){
    UserNumber.value = "";
    Result.textContent = "";
    count = 5;
    chance.textContent = `남은 기회 : ${count}`;
    SendData.disabled = false;
    history = [];
    

    SelectNumber();
}




SelectNumber();