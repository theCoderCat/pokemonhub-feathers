(function() {
    var parseBtn = document.getElementById('do-parsing');
    var saveBtn = document.getElementById('do-saving');
    var getBtn = document.getElementById('do-fetching');
    var resultBox = document.getElementById('results');
    var boxData = null;

    var PokemonModel = new Backbone.Model.extend({
        idAttribute: "_id",
        url: "/pokemon"
    });

    var PokemonCollection = new Backbone.Collection;
    PokemonCollection.url = '/pokemon';
    // PokemonCollection.model = PokemonModel;
    // .extend({
    //     url: '/pokemon',
    //     model: PokemonModel,
    //     parse: function(res) {
    //         return res.data;
    //     }
    // });


    var parseCSV = function() {
        var file;
        if (file = document.getElementById('csv').files[0]) {
            Papa.parse(file, buildConfig());
        } else {
            alert('please choose a file');
            return;
        }

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
        boxData = results.data;
        console.log(['result: ', results]);
        resultBox.innerHTML = JSON.stringify(results, null, "\t");
    }

    var errorFn = function(err, file) {
        console.log("ERROR:", err, file);
    }

    var getBox = function() {
        console.log('fetching...');

        var res = PokemonCollection.fetch({
            success: function(model, res, actions) {
                console.log(res);
                boxData = res.data;
            },
            error: function(model, res, actions) {}
        });
    }

    var saveBox = function() {
        parseCSV();
        PokemonCollection.add(boxData);
        console.log(PokemonCollection);
        PokemonCollection.sync();
    }

    parseBtn.addEventListener('click', parseCSV);
    saveBtn.addEventListener('click', saveBox);
    getBtn.addEventListener('click', getBox);
})();