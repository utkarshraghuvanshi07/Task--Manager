const inp = document.querySelector("input");
const btn = document.querySelector("#add");
const todoBox = document.querySelector(".todo-list");


btn.addEventListener("click", () => {
  const value = inp.value;

  if (value.trim() === "") return;

  todoBox.innerHTML += `<div class="li">
          <h3 class ="taskName">${value}</h3>
          <div>
            <button class="btn edit">Edit</button>
            <button class="btn del">Delete</button>
          </div>
        </div>`;

  inp.value = "";
  
  const edit = document.querySelector(".edit");
  let h3= document.querySelector(".taskName");
  edit.addEventListener("click", ()=>{
    h3.contentEditable = "true";
    console.log("edit");
});

const del = document.querySelector(".del");
del.addEventListener("click", ()=>{
   
});

});






