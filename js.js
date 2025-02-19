let addbt=document.querySelector('.ADDBT');
let input=document.querySelector('input');
let tasklist=document.querySelector('.todolist');

addbt.addEventListener('click' , ()=>{
    let text= input.value;
    let task= creatnode(text);
    task.innerHTML+='<span class="closebt"><i class="fa-solid fa-trash-can"></i></span>';
    tasklist.appendChild(task);
    input.value='';
})
tasklist.addEventListener('click', (e)=>{
    if(e.target.nodeName ==='I'){
        e.target.parentElement.parentElement.style='display:none';
    }
    if(e.target.nodeName === 'LI'){
        e.target.classList.toggle('done');
    }
})
function creatnode(text){
    let li= document.createElement('li');
    li.textContent= text;
    return li;
}
addbt.addEventListener('click' , ()=>{
    let task=input.value;
    let li=document.createElement('li');
    tasklist.appendChild(li);
    li.innerHTML=task;
    li.addEventListener('click', ()=>{
        li.classList.toggle('deactive');
    })
})
// time : 
var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();
