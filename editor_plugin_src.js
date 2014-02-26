/**
 * editor_plugin_src.js
 *
 * Copyright 2009, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://tinymce.moxiecode.com/license
 * Contributing: http://tinymce.moxiecode.com/contributing
 */

(function() {
	tinymce.create('tinymce.plugins.FrameVideo', {
		init : function(ed, url) {
			this.editor = ed;

			// Register commands
			ed.addCommand('frVideo', function() {
				ed.windowManager.open({
					file : url + '/framevideo.php',
					width : 480 + parseInt(ed.getLang('framevideo.delta_width', 0)),
					height : 180 + parseInt(ed.getLang('framevideo.delta_height', 0)),
					inline : 1
				}, {
					plugin_url : url
				});
			});

			// Register buttons
			ed.addButton('framevideo', {
				title : 'Качи YouTube видео',
				cmd : 'frVideo',
				image : 'tinymce/jscripts/tiny_mce/plugins/framevideo/images/frVideo.png'
			});

		},

		getInfo : function() {
			return {
				longname : 'Frame Video',
				author : 'IDG Bulgaria',
				authorurl : 'http://idg.bg/',
				infourl : 'http://idg.bg/',
				version : tinymce.majorVersion + "." + tinymce.minorVersion
			};
		}
	});

	// Register plugin
	tinymce.PluginManager.add('framevideo', tinymce.plugins.FrameVideo);
})();