var dataTime = new Date();
let i = 0;
///function to retreve (Load) all tasks and print it on screen
let x = document.cookie.split("; ");
x.map((t) => {
  console.log(t.split("=")[1]);
  if (t.split("=")[1]) {
    if (t.includes("deleted")) {
      console.log("deleted");
    } else {
      var taskBox = document.createElement("div");
      taskBox.innerHTML = `<div class='task2'><div class='task'>
      ${
        t.split("=")[1]
      }</div><button class='done' >Done</button> <button class='delete' >Delete</button><br></div>`;
      document.getElementsByClassName("tasksBox")[0].append(taskBox);
    }
  }
});



//functuon to ((create)) && ((add)) element && ((Save)) it when we add new task
document.getElementById("btnAdd").addEventListener("click", function () {
  if (document.getElementById("taskInput").value) {
    //create
    var taskBox = document.createElement("div");
    taskBox.innerHTML = `<div class='task2'><div class='task'>
    ${
      document.getElementById("taskInput").value
    }</div><button class='done' >Done</button> <button class='delete' >Delete</button><br></div>`;

    //Add
    document.getElementsByClassName("tasksBox")[0].append(taskBox);

    //Save
    var taskInputValue = document.getElementById("taskInput").value;
    dataTime.setMonth(dataTime.getMonth() + 1);
    document.cookie = `${taskInputValue} = ${taskInputValue}  ; expires=${dataTime}`;
  } else {
    console.error("Empty value");
  }
});

// event delegation using JQ
$(document).on("click", ".delete", function () {
  var removeMe = $(this).siblings("div").text().trim();
  console.log(removeMe);
  document.cookie = `${removeMe} = ${removeMe} deleted  ; expires=1/1/2001`;
  $(this).parent(".task2").remove();
});

$(document).on("click", ".done", function () {
  $(this).parent(".task2").toggleClass("TaskDone");
});

