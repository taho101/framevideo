function insertFrameVideo(form){
	
	if(form.qAlign[0].checked) {
		qPos = "left";
		
	} else if(form.qAlign[1].checked) {
		qPos = "center";
		
	} else {
		qPos = "right";
		
	}
	
	var qT = form.qTitle.value;
	var qL = form.qLink.value;
	
	if(qT != '')
		htm = "<p align='" + qPos + "'>" + qT + "</p>";
	else if(qL != '')
		htm = "<p align='" + qPos + "'>" + 
				"<iframe width='" + form.qWidth.value + "' height='" + form.qHeight.value + "' src='" + qL.split('&')[0].replace('/watch?v=','/embed/') + "' frameborder='0' allowfullscreen></iframe>" +
		      "</p>";
	
	tinyMCE.execCommand("Delete", false, null)
	tinyMCE.execCommand('mceInsertContent', false, htm)
	tinyMCEPopup.close();
}