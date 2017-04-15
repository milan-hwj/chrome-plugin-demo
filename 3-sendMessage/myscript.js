chrome.runtime.sendMessage({msg: 'from content script'}, function(res) {
    console.info('response: ' + res.data);
});
