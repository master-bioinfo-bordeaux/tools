	var myNews;
	//fonction de recherche des éléments
	function initNews() {

	var title=document.getElementById("title").value;
	var intro=document.getElementById("intro").value;
	var content=document.getElementById("content").value;

	var icons_name=[];
	var icons_type=[];
	for (var n in img){
		icons_name.push(img[n].name);
		icons_type.push(img[n].type)
	}
	for (var t in icons_name ){
		if(icons_type[t]=="biology"){
			var ident="biology";
		}
		else if(icons_type[t]=="teaching"){
			var ident="teaching";
		}
		else{
			var ident="misc";
		}
		document.getElementById(ident).innerHTML+='<input type="radio" name="' + icons_name[t] +'" value="' + t + '" id="' + t +'" class="imgselected" /> <img src="img/'+icons_name[t]+'_thumb.jpg">';
	}

	var date = new Date();
	var pday = date.getDate();
	var pmonth = date.getMonth()+1;
	var pyear = date.getFullYear();

	document.getElementById("pubdate").innerHTML+='<input type="number" min="2015" max="2030" value="'+pyear+'" id="publiyear"/> <input type="number" min="1" max="12" value="'+pmonth+'" id="publimonth"/> <input type="number" min="1" max="31" value="'+pday+'" id="publiday" />';

	getNewsJSON();
	}

function getNewsJSON(){
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
        	myNews = JSON.parse(xhr.responseText); // Données textuelles récupérées
        		console.log(myNews);
	    		updateNewsDisplay(myNews);
    	}
		
	};
	// xhr.open("GET", "http://master-bioinfo-bordeaux.github.io/data/news.json", true);
	xhr.open("GET", "news_json.js", true);
	xhr.send(null);
}

function updateNewsDisplay(arr) {
	  for(var n in arr){
  		document.getElementById("listForModify").innerHTML+='<input type="radio" name="'+arr[n]["title"]+'" class="titlenews"/> <label for="'+arr[n]["title"]+'">'+arr[n]["title"]+'</label><br />'; 
  		document.getElementById("listForDeletion").innerHTML+='<input type="radio" name="'+arr[n]["title"]+'" class="titlenews"/> <label for="'+arr[n]["title"]+'">'+arr[n]["title"]+'</label><br />'; 
	}

}

function createNews(){
	var author=document.getElementById("author").value;
	var title=document.getElementById("title").value;
	var intro=document.getElementById("intro").value;
	var content=document.getElementById("content").value;

  	var selectedimg = document.getElementsByClassName("imgselected");
	for (var i = 0; i< selectedimg.length; i++)
	{
	   if (selectedimg[i].checked){
	   	var img=selectedimg[i].name;
	   }
	}

	var yearpubli=document.getElementById("publiyear").value;
	var monthpubli=document.getElementById("publimonth").value;
	var daypubli=document.getElementById("publiday").value;
	var publidate=yearpubli+monthpubli+daypubli;

	var datecrea = new Date();
	var cday = datecrea.getDate()+'';
	var cmonth = datecrea.getMonth()+1+'';
	var cyear = datecrea.getFullYear()+'';
	var chour = datecrea.getHours()+'';
	var cmin = datecrea.getMinutes()+'';
	var csec = datecrea.getSeconds()+'';
	var creadate = cyear+cmonth+cday+"T"+chour+cmin+csec;
	var id = creadate+"@"+author;

	// document.getElementById("result").innerHTML='{';
	// document.getElementById("result").innerHTML+='"ID" : "'+id+'",<br>';
	// document.getElementById("result").innerHTML+='"Date" : "'+publidate+'",<br>';
	// document.getElementById("result").innerHTML+='"Title" : "'+title+'",<br>';
	// document.getElementById("result").innerHTML+='"Content" : "'+intro+'<-more->'+content+'",<br>';
	// document.getElementById("result").innerHTML+='"Image" : "'+img+'"<br>';
	// document.getElementById("result").innerHTML+='},'
	updateNewsDisplay();
}

// function deleteNews(){
//   		var nbtitles = document.getElementsByClassName("titlenews");

// 		for (var i = 0; i< nbtitles.length; i++)
// 		{
			
// 		    if (nbtitles[i].checked)
// 		    {
// 		        myNews.splice(i,1)
// 		        }
// 		}
// 		console.log(myNews);
// 		console.log(typeof(myNews));

// 		updateNewsDisplay();
// }

// function get_value(){

// 	console.log(title,intro,content);
// }









