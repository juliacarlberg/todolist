class Todo{
  constructor(todo, finished){
    this.todo= todo;
    this.finished= finished;
  }
}

let taskOne= new Todo("Plugga");
let taskTwo= new Todo("Äta")
let taskThree= new Todo("Sova")

let theTasks= [taskOne, taskTwo, taskThree];

const one= Object.values(taskOne);
const two= Object.values(taskTwo);
const three= Object.values(taskThree);

let myArrays= [one, two, three];

function start(){
    let ulTag= document.getElementById("theList");

    for(let i=0; i<myArrays.length; i++){
        let liTag= document.createElement("li");
        liTag.innerHTML= (myArrays[i]);
        ulTag.appendChild(liTag);
    }
}

start();


function removeTask(){
    let myCloseList= document.getElementsByTagName("li");
    for(i=0; i<myCloseList.length; i++){
      let closeButton= document.createElement("BUTTON");
      closeButton.className="close";
      myCloseList[i].appendChild(closeButton);
      closeButton.innerHTML="&#10005;";
    } 

    let close= document.getElementsByClassName("close");
    for(i=0; i<close.length; i++){
        close[i].onclick= function(){
            let div= this.parentElement;
            div.style.display= "none";
        }
    }

}


removeTask();

function addTask(){
  let inputTag= document.getElementById("input");
  let ulTag= document.getElementById("theList");
  let liTag= document.createElement("li");
  liTag.innerHTML= (inputTag.value);
  ulTag.appendChild(liTag);
  let closeButton= document.createElement("BUTTON");
  closeButton.className="close";
  liTag.appendChild(closeButton);
  closeButton.innerHTML="&#10005;";
}


let list = document.querySelector("ul");
list.addEventListener("click", function(ev) {
  if (ev.target.tagName === "LI") {
    ev.target.classList.toggle("checked");
  }
}, false);