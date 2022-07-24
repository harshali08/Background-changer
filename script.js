// function changeBG(color){
//     document.body.style.backgroundColor=color;
//     let text = document.getElementsByClassName("text");

//    if (color == "#000000") {
//     for (let elm of text) {
//       elm.style.color = "white";
//     }
//   } else {
//     for (let elm of text) {
//       elm.style.color = "black";
//     }
//   }
// }

let bl = document.getElementById("blue");
let bla = document.getElementById("black");
let pi = document.getElementById("pink");
let wh = document.getElementById("white");
let text = document.getElementsByClassName("text");

bl.addEventListener("click", function () {
  document.body.style.backgroundColor = "lightblue";
  for (let ele of text) {
    ele.style.color = "black";
  }
});

bla.addEventListener("click", function () {
  document.body.style.backgroundColor = "black";

  for (let ele of text) {
    ele.style.color = "white";
  }
});

pi.addEventListener("click", function () {
  document.body.style.backgroundColor = "pink";
  for (let ele of text) {
    ele.style.color = "black";
  }
});

wh.addEventListener("click", function () {
  document.body.style.backgroundColor = "white";
  for (let ele of text) {
    ele.style.color = "darkviolet";
  }
});
