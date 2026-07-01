const inp = document.querySelector("input");
const btn = document.querySelector("#add");
const todoBox = document.querySelector(".todo-list");
const list = document.querySelector("ul");
list.style.listStyleType = "none";


btn.addEventListener("click", () => {
  const value = inp.value;

  if (value.trim() === "") return;

  let li = document.createElement("li");
  li.classList.add('li');
  li.innerHTML = `
          <h3 class ="taskName">${value}</h3>
          <div>
            <button class="btn edit">Edit</button>
            <button class="btn del">Delete</button>
          </div>`;
  list.appendChild(li);
  inp.value = ""; 

});


const edit = document.querySelector(".edit");
  let h3 = document.querySelector(".taskName");
  
  edit.addEventListener("click", ()=>{
    h3.contentEditable = "true";
    h3.focus();
    console.log("edit");
});



let del = document.querySelector(".del");
del.addEventListener("click", ()=>{
    let li = event.target.closest(".li");
    li.remove();
    console.log("utkarsh");
});

