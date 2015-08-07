var listUE7 = [];
var listUE8 = [];
var listUE9 = [];
var listUE10 = [];
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
	if (loc==="CREMI::Talence" || loc==="A21::Talence" || loc==="A29::Talence" ||loc==="A30::Talence" ||loc==="B4::Talence" || loc==="B5::Talence" || loc==="B7::Talence" || loc==="ED::Carreire"){
		var html='<h3>Room</h3>     <input type="text" name="room" id="room" required/>';
	}
	if (loc==="Amphi A5::Carreire"){
		var html=' ';
	}
	document.getElementById("rooms").innerHTML=html;

	//faire json pour rooms -> nombat::lieu { "type"}
}