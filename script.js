const btn = document.querySelector("button");
btn.addEventListener("click", function addtask(e) {
  e.preventDefault();

  const taskvalue = document.querySelector("#task");
  const tasklist = document.querySelector(".list");
  let render = taskvalue.value;
  if (render == "") {
    alert("plz enter task");
  } else {
    let newlist = document.createElement("li");
    newlist.innerHTML = `<span class="text-task mt-5 bg-rose-800 text-white  text-2xl pl-30 flex text-center">${render}</span>
                      <button class = "edit-btn border ml-15 mt-5 p-2 w-25 h-10 bg-green-400">Edit</button>
                      <button class= "delete-btn border ml-15 mt-5 p-2 w-25 h-10 bg-green-400">Delete</button>`;

    const editbtn = newlist.querySelector(".edit-btn");
    editbtn.addEventListener("click", function () {
      const taskspan = newlist.querySelector(".text-task")
      const newtaskspan = prompt("edit your task:", taskspan.textContent);
      if (newtaskspan !== null && newtaskspan.trim() !== "") {
         taskspan.textContent = newtaskspan;
    
      }
    });
    const deleteBtn = newlist.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", function () {
      newlist.remove();
    });

    tasklist.appendChild(newlist);

    taskvalue.value = "";
  }
});
