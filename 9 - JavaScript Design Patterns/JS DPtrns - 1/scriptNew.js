//////////////////////////////////// Create ///////////////////////////////////////////////////////////////////////////
function Create(){
    var taskBox = document.createElement("div");
    taskBox.innerHTML = `<div class='task2'>
                            <div class='task'>
                                ${$("#taskInput").val()}
                            </div>
                            <button class='done'>   Done   </button> 
                            <button class='delete'> Delete </button> <br>
                        </div>`;
    return taskBox;
}
//////////////////////////////////// Add //////////////////////////////////////////////////////////////////////////////
function Add(taskBox){
$(".tasksBox")[0].append(taskBox);  
}
/////////////////////////////////// Save //////////////////////////////////////////////////////////////////////////////
function Save(){
    var dataTime = new Date();
    var taskInputValue = $("#taskInput").val();
    dataTime.setMonth(dataTime.getMonth() + 1);
    document.cookie = `${taskInputValue} = ${taskInputValue}  ; expires=${dataTime}`;
}
////////////////////////////////// Delete /////////////////////////////////////////////////////////////////////////////
function Delete(){
    $(document).on("click", ".delete", function () {
        var removeMe = $(this).siblings("div").text().trim();
        console.log(removeMe);
        document.cookie = `${removeMe} = ${removeMe} deleted  ; expires=1/1/2001`;
        $(this).parent(".task2").remove();
    });
}
//////////////////////////////// MarkAsDone /////////////////////////////////////////////////////////////////////////// 
function MarkAsDone(){
    $(document).on("click", ".done", function () {
        $(this).parent(".task2").toggleClass("TaskDone");
    });
}
//////////////////////////////// Retreve Tasks & print them /////////////////////////////////////////////////////////// 
function RetriveTasks(){
    let x = document.cookie.split("; ");
    x.map((t) => {
        console.log(t.split("=")[1]);
        if (t.split("=")[1]) {
            if (t.includes("deleted")) console.log("deleted");
            else {
                var taskBox = document.createElement("div");
                taskBox.innerHTML = `<div class='task2'>
                                        <div class='task'>
                                            ${t.split("=")[1]}
                                        </div>
                                        <button class='done'>   Done   </button>
                                        <button class='delete'> Delete </button>  <br>
                                    </div>`;
                $(".tasksBox")[0].append(taskBox);
            }
        }    
    });
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function TasksEntry(){
    $("#btnAdd").click(function () {
        if ($("#taskInput").val()) {
            var Task = Create()
            Add(Task)
            Save()
        } 
        else console.error("Empty value");
    });
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

RetriveTasks();

TasksEntry();

Delete();

MarkAsDone();











