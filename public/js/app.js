// (function() {
    var file = document.getElementById('csv').files[0];
    var parseBtn = document.getElementById('do-parsing');
    var resultBox = document.getElementById('results');
    
    var parseCSV = function() {
        Papa.parse(file, buildConfig());

    }

    var buildConfig = function() {
        return {
            delimiter: "",
            header: true,
            dynamicTyping: "",
            skipEmptyLines: "",
            preview: "",
            step: "",
            encoding: "UTF8",
            worker: "",
            comments: "",
            complete: completeFn,
            error: errorFn,
            download: false
        };
    }

    var completeFn = function(results) {
        console.log(['result: ', results]);
        resultBox.innerHTML = JSON.stringify(results, null, "\t");
    }

    var errorFn = function(err, file) {
        console.log("ERROR:", err, file);
    }
    
    parseBtn.addEventListener('click', parseCSV);
// })();