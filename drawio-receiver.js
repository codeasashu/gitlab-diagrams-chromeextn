'use strict';

function getCloestDropzone(drawioBtnId) {
	let buttonElement = document.getElementById(drawioBtnId)
	if(!buttonElement) return null;
	let mdEditor = buttonElement.closest(".md-write-holder")
	if(mdEditor) {
		let divDropzone = mdEditor.getElementsByClassName('div-dropzone')
		if(divDropzone.length) {
			return divDropzone[0].hasOwnProperty('dropzone') ? divDropzone[0].dropzone : null
		}
	}
	return null
}

document.addEventListener('GitlabDrawioCustomEvent', function (e) {
	var data = e.detail;
	let GlDropzoneInstance = getCloestDropzone(data.drawioTriggerid)
	if(GlDropzoneInstance) {
		GlDropzoneInstance.addFile(data.svgfile)
	}
});
