var listUE7 = [];
var listidUE7= [];
var listUE8 = [];
var listidUE8= [];
var listUE9 = [];
var listidUE9= [];
var listUE10 = [];
var listidUE10= [];
var locTalence = [];
var locCarreire = [];
var listbat = [];

function initCalendar() {
	//création des listes de cours
	var sem;
	var acro;
	var idue;
	for (var c in course_data){
		if (course_data[c].visibility==="visible"){
			acro=course_data[c].acronym;
			idue=course_data[c].id
			ue=idue+"-"+acro
			if (course_data[c].link){
				var link=course_data[c].link;
				sem=course_data[link].semester
				ue=idue;
			}
			else{
				sem=course_data[c].semester
			}
			if (sem == 7){
				listUE7.push(ue);
				listUE7.sort();
			}
			else if(sem == 8){
				listUE8.push(ue);
				listUE8.sort();
			}
			else if(sem == 9){
				listUE9.push(ue);
				listUE9.sort();
			}
			else if(sem == 10){
				listUE10.push(ue);
				listUE10.sort();
			}	
		}		
	}
	//création de la liste des professeurs
	var lectselect='';
	var listlect=[];
	for (var lec in lecturers){
		for (var na=0;na<lecturers[lec].length;na++){
			var namelec= lecturers[lec][na].name;
			listlect.push(namelec)
		}
	}
	listlect.sort();
	for (var llec in listlect){
		lectselect +='<option value="'+listlect[llec]+'">'+listlect[llec]+'</option>';
	}
	document.getElementById("lecturer").innerHTML+=lectselect;



	//création de la liste des lieux
	var locselect='';
	for (var l in locations){
		var nameloc= locations[l].name;
		locselect +='<option value="'+nameloc+'">'+nameloc+'</option>';
		if(locations[l].type !=="bat"){
			listbat.push(nameloc);
		}
	}
	document.getElementById("location").innerHTML+=locselect;
	document.getElementById("locationevent").innerHTML+=locselect;

	//création de la liste des groupes
	var groupselect='';
	for (var g in groups){
		for (var n=0;n<groups[g].length;n++){
			var namegroup= groups[g][n].name;
			groupselect +='<option value="'+namegroup+'">'+namegroup+'</option>';
		}
	}
	document.getElementById("groups").innerHTML+=groupselect;

	//création de la liste des parcours
	var parselect='';
	for (var g in parcours){
		for (var n=0;n<parcours[g].length;n++){
			var namepar= parcours[g][n].name;
			parselect +=' <input type="checkbox" name="'+namepar+'" id="'+namepar+'" /> <label for="'+namepar+'">'+namepar+'</label>';
		}
	}	
	document.getElementById("parcours").innerHTML+=parselect;

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
		if (loc===listbat[l]){
			var html=' ';
		}
		else{
			var html='<h3>Room</h3>     <input type="text" name="room" id="room" required/>';;
		}
		document.getElementById("rooms").innerHTML=html;
	}
}

function selectRoomEvent(){
	var loc=document.getElementById('locationevent').value;
	for (var l=0;l<listbat.length;l++){
		if (loc===listbat[l]){
			var html=' ';
		}
		else{
			var html='<h3>Room</h3>     <input type="text" name="roomevent" id="roomevent" required/>';;
		}
		document.getElementById("roomsevent").innerHTML=html;
	}
}

function createCalendarCourse(){

	var newCourse={};

	var author=document.getElementById("author").value;
	var datecrea = new Date();
	var cday = ("0" + (datecrea.getDate())).slice(-2);
	var cmonth = ("0" + (datecrea.getMonth()+1)).slice(-2);
	var cyear = datecrea.getFullYear().toString();
	var chour = ("0" + (datecrea.getHours())).slice(-2);
	var cmin = ("0" + (datecrea.getMinutes())).slice(-2);
	var csec = ("0" + (datecrea.getSeconds())).slice(-2);
	var creadate = cyear+cmonth+cday+"T"+chour+cmin+csec;
	newCourse.id = creadate+"@"+author;

	newCourse.summary=document.getElementById("uesemester").value;

	var yearstart=document.getElementById("startYear").value;
	var monthstart=document.getElementById("startMonth").value;
	var daystart=document.getElementById("startDay").value;
	var hourstart=document.getElementById("startHour").value;
	var minstart=document.getElementById("startMin").value;
	if ((hourstart===00 && minstart===00) || (allday.checked) ){
		var hourstart="00";
		var minstart="00";
		var yearend=yearstart;
		var monthend=monthstart;
		var dayend=daystart;
		var hourend=23;
		var minend=59;
	}
	else{
	var yearend=document.getElementById("endYear").value;
	var monthend=document.getElementById("endMonth").value;
	var dayend=document.getElementById("endDay").value;
	var hourend=document.getElementById("endHour").value;
	var minend=document.getElementById("endMin").value;		
	}
	newCourse.date_start=yearstart+monthstart+daystart+"T"+hourstart+minstart;
	newCourse.date_end=yearend+monthend+dayend+"T"+hourend+minend;

	newCourse.group=document.getElementById("groups").value;
	newCourse.lecturer=document.getElementById("lecturer").value;

	var bat=document.getElementById("location").value;
	if (locations[bat].type!=="bat"){
		newCourse.location=bat;
	}
	else{
		var room=document.getElementById("room").value;
		newCourse.location="room"+room+"@"+bat;
	}

	newCourse.description=document.getElementById("content").value;

	JSON.stringify(newCourse);
}
