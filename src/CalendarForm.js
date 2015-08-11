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

	//remplissage des listes de dates
	var yearselect;
	var monthselect;
	var dayselect;
	var hourselect;
	var minselect;
	var year=[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030]
	for (var y=0;y<year.length;y++){
		yearselect+='<option value="'+year[y]+'">'+year[y]+'</option>';
	}

	var month=["01","02","03","04","05","06","07","08","09","10","11","12"];
	for (var mo=0;mo<month.length;mo++){
		monthselect+='<option value="'+month[mo]+'">'+month[mo]+'</option>';
	}
	var day=["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"]
	for (var d=0;d<day.length;d++){
		dayselect+='<option value="'+day[d]+'">'+day[d]+'</option>';
	}
	var hour=["00","08","09","10","11","12","13","14","15","16","17","18","19"]
	for (var h=0;h<hour.length;h++){
		hourselect+='<option value="'+hour[h]+'">'+hour[h]+'</option>';
	}
	var minute=["00","15","30","45"]
	for (var min=0;min<minute.length;min++){
		minselect+='<option value="'+minute[min]+'">'+minute[min]+'</option>';
	}
	document.getElementById("startYearevent").innerHTML+=yearselect;
	document.getElementById("startMonthevent").innerHTML+=monthselect;
	document.getElementById("startDayevent").innerHTML+=dayselect;
	document.getElementById("startHourevent").innerHTML+=hourselect;
	document.getElementById("startMinevent").innerHTML+=minselect;
	document.getElementById("endYearevent").innerHTML+=yearselect;
	document.getElementById("endMonthevent").innerHTML+=monthselect;
	document.getElementById("endDayevent").innerHTML+=dayselect;
	document.getElementById("endHourevent").innerHTML+=hourselect;
	document.getElementById("endMinevent").innerHTML+=minselect;
	document.getElementById("startYear").innerHTML+=yearselect;
	document.getElementById("startMonth").innerHTML+=monthselect;
	document.getElementById("startDay").innerHTML+=dayselect;
	document.getElementById("startHour").innerHTML+=hourselect;
	document.getElementById("startMin").innerHTML+=minselect;
	document.getElementById("endYear").innerHTML+=yearselect;
	document.getElementById("endMonth").innerHTML+=monthselect;
	document.getElementById("endDay").innerHTML+=dayselect;
	document.getElementById("endHour").innerHTML+=hourselect;
	document.getElementById("endMin").innerHTML+=minselect;

	//mise à la date du jour
	var date = new Date();
	startYearevent.value=date.getFullYear().toString();
	startMonthevent.value=("0" + (date.getMonth()+1)).slice(-2);
	startDayevent.value=("0" + (date.getDate())).slice(-2);
	endYearevent.value=date.getFullYear().toString();
	endMonthevent.value=month[date.getMonth()];
	endDayevent.value=("0" + (date.getDate())).slice(-2);
	startYear.value=date.getFullYear().toString();
	startMonth.value=("0" + (date.getMonth()+1)).slice(-2);
	startDay.value=("0" + (date.getDate())).slice(-2);
	endYear.value=date.getFullYear().toString();
	endMonth.value=month[date.getMonth()];
	endDay.value=("0" + (date.getDate())).slice(-2);

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
			var typepar= parcours[g][n].value;
			parselect +=' <input type="checkbox" name="'+namepar+'" id="'+namepar+'" value="'+typepar+'" /> <label for="'+namepar+'">'+namepar+'</label>';
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
	var sem=document.getElementById("semester").value;
	if (sem===7 || sem===8){
		var year=1;
	}
	else{
		var year=2;
	}
	var author=document.getElementById("author").value;
	var datecrea = new Date();
	var cday = ("0" + (datecrea.getDate())).slice(-2);
	var cmonth = ("0" + (datecrea.getMonth()+1)).slice(-2);
	var cyear = datecrea.getFullYear().toString();
	var chour = ("0" + (datecrea.getHours())).slice(-2);
	var cmin = ("0" + (datecrea.getMinutes())).slice(-2);
	var csec = ("0" + (datecrea.getSeconds())).slice(-2);
	var creadate = cyear+cmonth+cday+"T"+chour+cmin+csec;

	var summary=document.getElementById("uesemester").value;
	var ue= summary.split("-");
	var stu= course_data[ue[0]].students;
	var stusplit = stu.split(",");
	var parc=[];
	for (var i in stusplit){
		var parca = stusplit[i].split("[");	
		parc.push(parca[0]);
	}
	var sum=0;
	for(var p in parc){
		console.log(p);
		sum=sum+parcours["Parcours"][p].value;
	}
	var sumsum=(sum.toString(16))
	if (sumsum==="f"){
		sumsum="F"
	}


	newCourse.id = "C"+year+sumsum+creadate+"@"+author;
	newCourse.summary=summary

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

function createCalendarEvent(){

	var newEvent={};

	var author=document.getElementById("authorevent").value;
	var datecrea = new Date();
	var cday = ("0" + (datecrea.getDate())).slice(-2);
	var cmonth = ("0" + (datecrea.getMonth()+1)).slice(-2);
	var cyear = datecrea.getFullYear().toString();
	var chour = ("0" + (datecrea.getHours())).slice(-2);
	var cmin = ("0" + (datecrea.getMinutes())).slice(-2);
	var csec = ("0" + (datecrea.getSeconds())).slice(-2);
	var creadate = cyear+cmonth+cday+"T"+chour+cmin+csec;

	var year = document.getElementById("yearstudy").value;

	var sum=0;
	var checkboxes = document.getElementById("parcours").getElementsByTagName("input");
	for (var i = 0, iMax = checkboxes.length; i < iMax; ++i) {
   		var check = checkboxes[i];
   		if (check.type == "checkbox" && check.checked) {
   			sumnum=parseInt(check.value)
   			sum=sum+sumnum;
   		}
	}
	var sumsum=(sum.toString(16))
	if (sumsum==="f"){
		sumsum="F"
	}
	newEvent.id = "E"+year+sumsum+creadate+"@"+author;


	newEvent.summary=document.getElementById("uesemester").value;

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