//your JS code here. If required.
const select = document.getElementById('colorSelect');

const options = document.getElementById('colorSelect').children;
 function remove() {
	
 	for(x of options){
		if(x.value == select.value){
			
			x.remove();
		}
	}
 }
