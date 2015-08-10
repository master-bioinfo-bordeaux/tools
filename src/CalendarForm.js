var listUE7 = [];
var listUE8 = [];
var listUE9 = [];
var listUE10 = [];
var locTalence = [];
var locCarreire = [];
var listbat = [];

function initCalendar() {
	var sem;
	var acro;
	for (var c in course_data){
		if (course_data[c].visibility==="visible"){
			acro=course_data[c].acronym;
			if (course_data[c].link){
				var link=course_data[c].link;
				sem=course_data[link].semester
			}
			else{
				sem=course_data[c].semester
			}
			if (sem == 7){
				listUE7.push(acro);
				listUE7.sort();
			}
			else if(sem == 8){
				listUE8.push(acro);
				listUE8.sort();
			}
			else if(sem == 9){
				listUE9.push(acro);
				listUE9.sort();
			}
			else if(sem == 10){
				listUE10.push(acro);
				listUE10.sort();
			}	
		}		
	}
	for (var l in locations){
		var nameloc= locations[l].name;
		var selectloc=nameloc;
		if(locations[l].loc ==="Talence"){
			locTalence.push(nameloc);
		}
		else if(locations[l].loc ==="Carreire"){
			locCarreire.push(nameloc);
		}
		if(locations[l].type !=="bat"){
			listbat.push(nameloc);
		}
		document.getElementById("location").innerHTML+=selectloc;
	}
}

function selectUE(){
	var sem=document.getElementById('semester').value;
	sem=parseInt(sem);
	var listUE;
	if (sem == 7){
		listUE=listUE7;
	}
	else if(sem == 8){
		listUE=listUE8;
	}
	else if(sem == 9){
		listUE=listUE9;
	}
	else if(sem == 10){
		listUE=listUE10;
	}
	var html ='<h3>UE</h3>     <select name="uesemester" id="uesemester"">';
	for (var m=0;m<listUE.length;m++){
		html += '<option value="'+listUE[m]+'">'+listUE[m]+'</option>';
	}
	html += '</select>';
	document.getElementById("ue").innerHTML = html;
}

function selectRoom(){
	var loc=document.getElementById('location').value;
	for (var l=0;l<listbat.length;l++){
		console.log(listbat[l]);
		console.log(loc);
		if (loc===listbat[l]){
			var html=' ';
		}
		else{
			var html='<h3>Room</h3>     <input type="text" name="room" id="room" required/>';;
		}
		document.getElementById("rooms").innerHTML=html;
	}
	
}


