var a,x,y;
var task=[];
var completed=[];
function add(){
     a=document.getElementById('task').value;
     if(a=='') {
     	document.getElementById('task').focus();
     }
     else{
     	document.getElementById('task').value='';
     	task.push(a);
     	display();
     }
     
}
function display(){
document.getElementById('todo').style.display='inline';
text = "<ul>";
for (i = 0; i < task.length	; i++) {
  text += "<li class='text-white'>"+"<input type='checkbox' onclick='check("+i+")'>" + task[i] +
   "<input type='text' id='edit-text("+i+")'>" + "<input type='button' value='edit' class='btn btn-info' onclick='edit("+i+")'>" + "<input type='button' class='btn btn-danger' value='delete' onclick='del("+i+")'>"+ "</li>";
}
text += "</ul>";
document.getElementById('dis').innerHTML=text;
}

function del(a){
	task.splice(a,1);
	display();
}
function edit(a){
	for(i=0;i<task.length;i++) {
		if(a==i){
			if(document.getElementById("edit-text("+i+")").value=='') {
			  document.getElementById("edit-text("+i+")").value=task[i];
		    }
		    else{
		     x=document.getElementById("edit-text("+i+")").value;
		    task[i]=x;
		    display();	
		    }
		}
	}
}

function check(a){
for(i=0 ;i<task.length;i++){
	if(a==i){
		completed.push(task[i]);
		task.splice(a,1);
		display();
		display2();
	}
}
}

function display2(){
document.getElementById('completed').style.display='inline';
text2 = "<ul>";
for (i = 0; i < completed.length; i++) {
  text2 += "<li class='text-white'>"+"<input type='checkbox' checked onclick='check2("+i+")'>" + completed[i] +
   "<input type='text' id='edit-text2("+i+")'>" + "<input type='button' value='edit' class='btn btn-info' onclick='edit2("+i+")'>" + "<input type='button' class='btn btn-danger' value='delete' onclick='del2("+i+")'>"+ "</li>";
}
text2 += "</ul>";
document.getElementById('dis2').innerHTML=text2;
}

function del2(a){
	completed.splice(a,1);
	display2();
}
function edit2(a){
	for(i=0;i<completed.length;i++) {
		if(a==i){
			if(document.getElementById("edit-text2("+i+")").value=='') {
			  document.getElementById("edit-text2("+i+")").value=completed[i];
		    }
		    else{
		     x=document.getElementById("edit-text2("+i+")").value;
		    completed[i]=x;
		    display2();	
		    }
		}
	}
}

function check2(a){
for(i=0 ;i<completed.length;i++){
	if(a==i){
		task.push(completed[i]);
		completed.splice(a,1);
		display();
		display2();
	}
}
}