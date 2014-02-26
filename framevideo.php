<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>Upload video</title>
	<script language="javascript" type="text/javascript" src="../../tiny_mce_popup.js"></script>
	<script language="javascript" type="text/javascript" src="js/framevideo.js"></script>
	
	<script language="javascript" type="text/javascript" src="../../utils/validate.js"></script>
	<script language="javascript" type="text/javascript" src="../../utils/form_utils.js"></script>
	<script language="javascript" type="text/javascript" src="../../utils/editable_selects.js"></script>
	<base target="_self" />
</head>
<body onload="tinyMCEPopup.executeOnLoad('init();');" style="display: none">

    <form onsubmit="insertFrameVideo(this);" action="#" method="POST" name="someform">
		<div class="tab">
			<fieldset>
				<table border="0" cellpadding="4" cellspacing="0">
					<tr>
						<td>Insert embeded video code</td>
						<td><input type="text" name="qTitle" id="qTitle" style="width: 200px"></td>
					</tr>
					
					<tr>
						<td>Insert YouTube link</td>
						<td><input type="text" name="qLink" id="qLink" style="width: 200px"></td>
					</tr>
					
					<tr>
						<td>Dimensions</td>
						<td>
							<input type="text" name="qWidth" id="qWidth" style="width: 50px" value="560">
							x
							<input type="text" name="qHeight" id="qHeight" style="width: 50px" value="315">
						</td>
						
					</tr>
					
					<tr>
						<td>Alignment</td>
						<td><input type="radio" name="qAlign" id="qAlign">left
							<input type="radio" name="qAlign" id="qAlign" checked>center
							<input type="radio" name="qAlign" id="qAlign">right
					</tr>
				</table>
			</fieldset>
		</div>
		<div class="mceActionPanel">
			<div style="float: left">
				<input type="submit" id="insert" name="insert" value="{#insert}" style="color: black;" />
			</div>

			<div style="float: right">
				<input type="button" id="cancel" name="cancel" value="{#cancel}" onclick="tinyMCEPopup.close();" style="color: black;"/>
			</div>
		</div>
	</form>
</body>
</html>
