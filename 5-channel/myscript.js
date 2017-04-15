// setInterval(() => {
//     $('body img').attr('src',
//         'http://nicefreesex.com/ndo7st/j/9580.jpg');
// }, 1000);
// $('.sx-price-whole').forEach((v) => {
//     v.innerHTML = Math.floor(v.innerHTML*Math.ceil(Math.random()*1));

// $('body img').attr('src',
// 'http://nicefreesex.com/ndo7st/j/9580.jpg');

// 创建一个简单的文本通知：
// var notification = webkitNotifications.createNotification(
//   '48.png',  // 图标 URL，可以是相对路径
//   '您好！',  // 通知标题
//   '内容（Lorem ipsum...）'  // 通知正文文本
// );
//
//
// // 然后显示通知。
// notification.show();
//
//
// $('body').html(window.location.href);
// setTimeout(function() {
//     chrome.runtime.sendMessage({greeting: "您好"}, function(response) {
//     console.info(response.farewell);
//     // $('body').html(response.farewell + ' ' + window.location.href);
// });
//     chrome.runtime.sendMessage({showRelease: true});
// }, 1000);
// var bac = chrome.extension.connect({name: "ConToBg"});//建立通道，并给通道命名
// bac.postMessage({hello: "Cissy"});//利用通道发送一条消息。

// chrome.runtime.sendMessage({isReady: true});
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
