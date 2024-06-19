document.getElementById("addbutton").addEventListener("click", addtask);
function addtask() {
    try{
    document.getElementById("welcome").remove()
    }
    catch{
        console.log("welcome message already removed")
    }
  var tk = document.getElementById("add").value;
  if (tk == "") {
    alert("task cannot be empty");
    return;
  }
  var new_div = document.createElement("div");
  var t = document.createElement("input");
  var d = document.getElementById("tasks");
  t.className = "taskk";
  t.type = "text";
  t.value = tk;
  t.style.textTransform="capitalize"
  var b = document.createElement("button");
  var del = document.createElement("button");
  del.textContent = "Delete";
  del.className = "debutton";
  del.addEventListener("click", del_task);
  b.textContent = "Done";
  b.className = "dobutton";
  b.addEventListener("click", done_task);
  new_div.appendChild(t);
  new_div.appendChild(b);
  new_div.appendChild(del);
  new_div.appendChild(document.createElement("br"));
  d.appendChild(new_div);
  document.getElementById("add").value = "";
  console.log("button clicked");
}

function del_task() {
  console.log("delete button clicked");
  if(confirm("delete this task"))
  this.parentNode.remove();
  try{
  var wel=getElementById("welcome")
  }
  catch
  {
    if(document.getElementById("tasks").innerText=="")
      {
    console.log("welcome block removed")
    var well=document.createElement("div")
    well.id="welcome"
    well.innerHTML="No Task for Today. <br> You can simply add your tasks by clicking on ADD button on your screen.<br> For editing Task just click on the Task."
    document.getElementById("tasks").appendChild(well)
      }
  }
}

function done_task() {
  console.log("done button clicked");
  var don = this.parentNode.querySelector("input");
  don.style.textDecoration = "line-through";
  don.style.pointerEvents = "none";
  alert(don.value+" task completed")
}