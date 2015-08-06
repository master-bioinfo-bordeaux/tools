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
		document.getElementById(ident).innerHTML+='<input type="radio" name="' + icons_name[t] +'" value="' + t + '" id="' + t +'" /> <img src="../img/'+icons_name[t]+'_thumb.jpg">';
	}

	var date = new Date();
	var day = date.getDate();
	var month = date.getMonth()+1;
	var year = date.getFullYear();

	document.getElementById("pubdate").innerHTML+='<input type="number" min="2015" max="2030" value="'+year+'"/> <input type="number" min="1" max="12" value="'+month+'"/> <input type="number" min="1" max="31" value="'+day+'" />';

	getNewsJSON();
	// updateNewsDisplay(myNews);
	}

function getNewsJSON(){
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
        	myNews = JSON.parse(xhr.responseText); // Données textuelles récupérées
        		console.log(myNews);

       		// myDisplay(myNews);
    	}
		
	};
	// xhr.open("GET", "http://master-bioinfo-bordeaux.github.io/data/news.json", true);
	xhr.open("GET", "news_json.js", true);
	xhr.send(null);
	console.log(myNews);
}

// function updateNewsDisplay(arr) {
// 	  for(var n in arr){
//   		document.getElementById("listForModify").innerHTML+='<input type="radio" name="'+arr[n]["title"]+'" class="titlenews"/> <label for="'+arr[n]["title"]+'">'+arr[n]["title"]+'</label><br />'; 
//   		document.getElementById("listForDelete").innerHTML+='<input type="radio" name="'+arr[n]["title"]+'" class="titlenews"/> <label for="'+arr[n]["title"]+'">'+arr[n]["title"]+'</label><br />'; 
// 	}

// }

// function createNews(){

// 	updateNewsDisplay();
// }

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









