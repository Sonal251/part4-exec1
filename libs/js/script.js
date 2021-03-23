
//earthquake
function constructTable(earthQuakeResult) {
    let domStr = "<table>";
    domStr += "<tr><th>Date Time</th><th>Magitude</th><th>Latitude</th><th>Longitude</th></tr>"
    for (let i = 0; i < earthQuakeResult.length; i++) {
        const { datetime, magnitude, lat, lng } = earthQuakeResult[i];
        domStr += "<tr>";
        domStr += `<td>${datetime}</td>`;
        domStr += `<td>${magnitude}</td>`;
        domStr += `<td>${lat}</td>`;
        domStr += `<td>${lng}</td>`;
        domStr += "</tr>";
    }
    domStr += "</table>"
    return domStr;
}
$(document).ready(function () {
    $('#btnSubmit1').click(function () {
        $.ajax({
            url: "libs/php/getEarthquakeInfo.php",
            type: 'POST',
            dataType: 'json',
            data: {
                    north: $('#north').val(),
                    south: $('#south').val(),
                    east: $('#east').val(),
                    west: $('#west').val()

            },
           
            success: function (result) {

                console.log(JSON.stringify(result));

                $('#result').html(constructTable(result["earthquakes"]));

            },
            error: function (jqXHR, textStatus, errorThrown) {
                //come back to this
                console.log("not working");
            }
        });


    });

    //weather
    function constructTable1(weatherResult) {
        let domStr = "<table>";
        domStr += "<tr><th>Date Time</th><th>Temperature</th><th>Humidity</th><th>Station Name</th></tr>"
        for (let i = 0; i < weatherResult.length; i++) {
            const { datetime, temperature, humidity, stationName } = weatherResult[i];
            domStr += "<tr>";
            domStr += `<td>${datetime}</td>`;
            domStr += `<td>${temperature}</td>`;
            domStr += `<td>${humidity}</td>`;
            domStr += `<td>${stationName}</td>`;
            domStr += "</tr>";
        }
        domStr += "</table>"
        return domStr;
    }
    $('#btnSubmit2').click(function () {
        $.ajax({
            url: "libs/php/getWeatherInfo.php",
            type: 'POST',
            dataType: 'json',
            data: {
                north: $('#north2').val(),
                south: $('#south2').val(),
                east: $('#east2').val(),
                west: $('#west2').val()

        },
            success: function (result) {

                console.log(JSON.stringify(result));

                $('#result').html(constructTable1(result["weatherObservations"]));

            },
            error: function (jqXHR, textStatus, errorThrown) {
                //come back to this
                console.log("not working");
            }
        });


    });

    //wikiresult
    function constructTable2(wikiResult) {
        let domStr = "<table>";
        domStr += "<tr><th>Name</th><th>Summary</th></tr>"
        for (let i = 0; i < wikiResult.length; i++) {
            const { title, summary } = wikiResult[i];
            domStr += "<tr>";
            domStr += `<td>${title}</td>`;
            domStr += `<td>${summary}</td>`;
            domStr += "</tr>";
        }
        domStr += "</table>"
        return domStr;
    }
    $('#btnSubmit3').click(function () {
        $.ajax({
            url: "libs/php/getWikiInfo.php",
            type: 'POST',
            dataType: 'json',
            data: {
                q: $('#q').val(),
                maxRows: $('#maxRows').val()
        },
               success: function (result) {

                console.log(JSON.stringify(result));

                $('#result').html(constructTable2(result["geonames"]));
         
            },
            error: function (jqXHR, textStatus, errorThrown) {
                //come back to this
                console.log("not working");
            }
        });


    });
});
