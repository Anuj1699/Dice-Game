const rollbtn = document.querySelector('.roll');
const leftimg = document.querySelector('.left');
const rightimg = document.querySelector('.right');

const firstRandomNum = Math.floor(Math.random() * 6) + 1;
const randomDice1 = 'dice' + firstRandomNum + '.png';
leftimg.setAttribute('src', randomDice1);


const SecondRandomNum = Math.floor(Math.random() * 6) + 1;
const randomDice2 = 'dice' + SecondRandomNum + '.png';
rightimg.setAttribute('src', randomDice2);
 


if (firstRandomNum > SecondRandomNum) {
    document.querySelector('.title').innerHTML = "🌟Player1 Wins ";
    document.getElementById('p1').style.color = "white";
}
else if (firstRandomNum < SecondRandomNum){
    document.querySelector('.title').innerHTML = "Player2 Wins🌟";
    document.getElementById('p2').style.color = "white";
}
else {
    document.querySelector('.title').innerHTML = "😩!!Draw!!😩";
}
 
rollbtn.addEventListener('click', () => {
    location.reload();
})