chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.color) {
            chrome.storage.local.set({myColor: request.color});
            chrome.tabs.query({active: true}, function(tabs) {
               chrome.tabs.sendMessage(tabs[0].id, {color: request.color, tab: tabs });
            });
        }
    }
);
