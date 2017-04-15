document.addEventListener('DOMContentLoaded',
    function() {
        $('#color').on('change', function() {
            chrome.runtime.sendMessage({color: $('#color').val()});
        });
        chrome.storage.local.get('myColor', function(val){
            $('#color').val(val.myColor || 'n');
        });
    }
);
