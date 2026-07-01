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



list.addEventListener("click",(event)=>{
    if(event.target.classList.contains("edit")){
        const h3 = event.target.closest(".li").querySelector(".taskName");
        h3.contentEditable ="true";
        h3.focus();
    }

    if(event.target.classList.contains("del")){
        event.target.closest(".li").remove();
    }
});


