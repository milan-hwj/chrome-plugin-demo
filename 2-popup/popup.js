var x = 1;
document.addEventListener('DOMContentLoaded',
    function() {
        x++;
        chrome.browserAction.setBadgeText({
            text: '' + x
        });
        chrome.browserAction.setBadgeBackgroundColor({
            color: '#FF0000'
        });
        $('#color').on('change', function() {
            chrome.runtime.sendMessage({color: $('#color').val()});
        });
    }
);
