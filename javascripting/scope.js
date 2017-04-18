(function firstFunction(){
    var b = 5, c = 6;
    var msg;

    (function secondFunction(){
        var b = 8;

        (function thirdFunction(){
            var a = 7, c = 9;
            (function fourthFunction(){
                var a = 1, c = 8;
                msg = "a: "+a+", b: "+b;
            })();
        })();
        console.log(msg + ", c: "+c);
    })();
})();
