'use strict';

chrome.contextMenus.create({
	title: "Add drawio",
	contexts:["editable"],
	onclick: (info, tab) => chrome.tabs.sendMessage(tab.id, {action: "open_drawio_box"})
});
