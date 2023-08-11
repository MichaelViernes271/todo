	var todoTask = new Array();
	var todoStat = new Array();
	var countTracker = 0;
	var divTag = document.getElementsByTagName('div')[0];
	var blankTask = "No more tasks."
	console.log('This \"Console log\" will write entries of your task, status, and array count. \n');
	function enter(){
		var getTask = document.getElementById('task').value;
		var getStatus = document.getElementById('completionstatus').value;
		if(getTask == ""){
			alert("No entry.");
			return false;
		}
		todoTask.push(getTask.toString());
		todoStat.push(getStatus.toString());
		var task = document.createElement('p');
		document.body.appendChild(task);
		task.setAttribute('class', 'text-info');
		var taskText = document.createTextNode("Task: " + getTask + " || Status: " + getStatus);
		task.appendChild(taskText);
		divTag.appendChild(task);
		++countTracker;
		console.log('New task: ' + getTask + '\nNew status: ' + getStatus + ' \nCounter: ' + countTracker);
	}
	function removerFirst(){
		if(!(countTracker <= 0)){
			console.log('Removed: ' + todoTask[countTracker - 1] +
				' || ' + todoStat[countTracker - 1] + 
				'\nCounter: ' + (countTracker - 1)
			);
			$('p:first').remove();
			todoTask.shift();
			todoStat.shift();
			--countTracker;
		}else
			alert(blankTask);
	}
	function removerLast(){
		if(!(countTracker <= 0)){
		console.log('Removed: ' + todoTask[todoTask.length - 1] + 
			' || ' + todoStat[todoStat.length - 1] + 
			'\nCounter: ' + (countTracker - 1));
		$('p:last').remove();
		todoTask.pop();
		todoStat.pop();	
		--countTracker
		}else
			alert(blankTask);
	}