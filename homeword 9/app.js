let box = document.querySelectorAll(".box");
let btn = document.querySelectorAll(".btn");
let numberClicks = 0;

//bai 1
btn[0].onclick = function(){
   box[0].classList.toggle('hide');
}

//bai 2

listColor = ['Pink', 'Red', 'Green', 'Blue'];

btn[1].onclick = function(){
   let ramdomColor = listColor[Math.floor(Math.random()*listColor.length)];
   box[1].style.backgroundColor = ramdomColor;
}

// bai 3

let div1 = document.getElementById("div-1");
let div2 = document.getElementById("div-2");

console.log(div2.textContent);
console.log(div1.textContent);
let tg;

btn[2].onclick = function (){
   numberClicks++;

  if (numberClicks%2 === 0) {
    div1.innerText = div2.innerText;
    div2.innerText = tg;
    
  }
  else{
   tg = div2.innerText;
   div2.innerText = div1.innerText;
   div1.innerText = tg;
  }

}

//bai 4
let fontDefault = 14;
btn[3].onclick = function () {
   box[2].style.fontSize = fontDefault + "px";
   fontDefault++;
}

