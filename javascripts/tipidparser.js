tipidparser = function(tipidurl) {
        var itemdata, yql_query, myitem, tipidparser, yql_base_uri;
        yql_base_uri = "https://query.yahooapis.com/v1/public/yql?q=";
        itemdata = [];

        yql_query = "select * from html where url='" + tipidurl + "' and xpath='//*[contains(@class,\"itemname\")] | //*[contains(@class,\"itemprice\")]'&format=json&diagnostics=true&callback=";


        $.ajax({
            url: yql_base_uri + yql_query,
            type: 'get',
            dataType: 'json',
            cache: false,
            success: function(data) {
                $.each(data.query.results, function(i, field) {
                    itemdata.push(field.content);
                });
            },
            async:false,
        });

        itemdata[1] = itemdata[1].replace("PHP ", '');

        return itemdata;

};
