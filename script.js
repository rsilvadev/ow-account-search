function profile(){
	var name;
	var region;
	var url;
	var response;

	name = document.getElementById("input").value;

	if(document.getElementById("eu").checked){
		region = document.getElementById("eu").value;
	}
	else if(document.getElementById("us").checked){
		region = document.getElementById("us").value;
	}
	else if(document.getElementById("kr")){
		region = document.getElementById("kr").value;
	}
	else{
		region = document.getElementById("ch").value;
	}

	url = "https://api.lootbox.eu/pc/" + region + "/" + name + "/profile";

	response = request(url);

	document.getElementById("image").style.backgroundImage = "url(" + response.data.avatar + ")";
	document.getElementById("name").innerHTML = response.data.username;
	document.getElementById("btnumber").innerHTML = "#" + name.match(/\d+/);
	document.getElementById("rankimg").style.backgroundImage = "url(" + response.data.competitive.rank_img + ")";
	document.getElementById("rank").innerHTML = response.data.competitive.rank;
}

function request(url){
	var obj;
	req = null;
	req = new XMLHttpRequest();

	if(req!=null){
		req.open("GET", url, false);
		req.send();

		if(req.readyState == 4){
			if(req.status == 200){ 
				obj = JSON.parse(req.responseText);
			}
		}
	}

	return obj;
}