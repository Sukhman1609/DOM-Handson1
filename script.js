let first=document.getElementById("text");
console.log(first.innerHTML);
first.innerHTML="Hello"

let second=document.getElementsByTagName("h1");
console.log(second[0].innerHTML);
second[0].innerHTML="Hello World"

let third=document.getElementsByClassName("box");
console.log(third[0].textContent);

let fourth=document.getElementsByClassName('changeText');
fourth[0].addEventListener('click',()=>{
    fourth[0].innerHTML="Hello World";
})

let fifth=document.getElementsByClassName('replaceText');
function replaceText(){
    fifth[0].innerHTML="Welcome to Elevation academy";
}

let sixth=document.getElementById('heading');
sixth.addEventListener('click',()=>{
    sixth.style.color='red';
})

let seventh=document.getElementsByClassName('main');
function changeFlex(){
    seventh[0].style.flexDirection='column';
    seventh[0].style.gap='20px';
}

let display=document.querySelectorAll("h2");
display[0].addEventListener('click',()=>{
    function startClock(){
        let time = new Date();
        let hrs=time.getHours();
        let mins=time.getMinutes();
        let secs=time.getSeconds();

        let period = "AM";
        if (hrs === 0) {
          hrs = 12;
        } else if (hrs >= 12) {
          hrs-= 12;
          period = "PM";
        }

        console.log(`Time: ${hrs}:${mins}:${secs}`);
        display[1].innerHTML=`${hrs}:${mins}:${secs} ${period}`;
    }
    setInterval(() =>{
        startClock();
    },1000)
    })



    //game
    




