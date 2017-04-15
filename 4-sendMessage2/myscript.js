chrome.runtime.onMessage.addListener(
function(request, sender, sendResponse) {
    console.info(request.msg);
});
