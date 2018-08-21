(function () {
    "use strict";

    function get(url){
        let promise = new Promise(function(ok,nok){
            let xmlHttp = new XMLHttpRequest();
            xmlHttp.open('GET', url);
            xmlHttp.onload = () => {
                let json = JSON.parse(xmlHttp.responseText);
                ok(json);
            };
            xmlHttp.setRequestHeader("Cache-Control", "max-age=0");
            xmlHttp.onerror = () => {
                nok("iets is misgelopen, contacteer de administrator");
            };

            xmlHttp.send(null);
        });

        return promise;
    }

    window.api = {
        get: get
    };

})();
