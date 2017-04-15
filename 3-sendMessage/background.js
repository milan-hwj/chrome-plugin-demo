chrome.runtime.onMessage.addListener(
function(request, sender, sendResponse) {
    if(request.msg) {
        sendResponse({data: 'hello'});
    }
});
