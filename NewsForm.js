	var myNews = {};

function delete_news(){
    	// for(var n in myNews){
  			// document.getElementById("listarticles").innerHTML='bouton'; 
  		// }
  		var nbtitles = document.getElementsByClassName("titlenews");
		var nbchecked = 0;
 
		for (var i = 0; i< nbtitles.length; i++)
		{
			
		    if (nbtitles[i].checked)
		    {
		        // nbchecked += 1;
		        myNews.splice(i,1)
		        }
		}
}

function get_value(){
	var title=document.getElementById("title").value;
	var intro=document.getElementById("intro").value;
	var content=document.getElementById("content").value;
	console.log(title,intro,content);
}

function initNews(){
/*	var icons_name=[];
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
*/
	var date = new Date();
	var day = date.getDate();
	var month = date.getMonth()+1;
	var year = date.getFullYear();

	document.getElementById("pubdate").innerHTML+='<input type="number" min="2015" max="2030" value="'+year+'"/> <input type="number" min="1" max="12" value="'+month+'"/> <input type="number" min="1" max="31" value="'+day+'" />';
}

function list_articles(){
	// var articles_name = [];
	// for (var n in news_data){
	// 	articles_name.push(news_data[n].title);
	// 	document.getElementById("listarticles").innerHTML+='<input type="checkbox" name="' + articles_name[t] +'" value="' + t + '" id="' + t +'" />'+articles_name[n];
	// }
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
        	myNews = JSON.parse(xhr.responseText); // Données textuelles récupérées
       		myDisplay(myNews);
    	}
    	for(var n in myNews){
  			document.getElementById("listarticles").innerHTML+='<input type="radio" name="'+myNews[n]["title"]+'" class="titlenews"/> <label for="'+myNews[n]["title"]+'">'+myNews[n]["title"]+'</label><br />'; 
		}
		
	};
	xhr.open("GET", "http://master-bioinfo-bordeaux.github.io/data/news.json", true);
	// xhr.open("GET", "news_json.js", true);
	xhr.send(null);
	console.log(listarticles)
}

function myDisplay(obj) {
	console.log(obj)
	;
}

