var c = '';
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        // $('div').css('background-color', request.color === 'n' ? '' : request.color);
        c = request.color === 'n' ? '' : request.color;
});

var isC = false;
setInterval(function() {
    isC = !isC;
    $('div').css('background-color', isC ? '' : c);
}, 300);
