document.addEventListener('DOMContentLoaded',
    function() {
        $('#color').on('change', function() {
            chrome.runtime.sendMessage({color: $('#color').val()});
        });
    }
);
