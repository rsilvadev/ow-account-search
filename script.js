function getinfo(){
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
	else{
		region = document.getElementById("kr").value;
	}

	url = "https://api.lootbox.eu/pc/" + region + "/" + name + "/profile";

	response = request(url);

	document.getElementById("footer").innerHTML = response;
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

	return obj.data.username;
}