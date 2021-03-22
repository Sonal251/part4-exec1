
//earthquake
function constructTable(earthQuakeResult) {
    let domStr = "<table>";
    domStr += "<tr><th>Datetime</th><th>Magitude</th><th>Latutude</th><th>Longitude</th></tr>"
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
        domStr += "<tr><th>Datetime</th><th>Temperature</th><th>Humidity</th><th>StationName</th></tr>"
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

    //postalcodecountryinfo
    function constructTable2(postalResult) {
        let domStr = "<table>";
        domStr += "<tr><th>Country Name</th><th>Number of Postal Codes</th><th>Min Postal Code</th><th>Max Postal Code</th></tr>"
        for (let i = 0; i < postalResult.length; i++) {
            const { countryName, numPostalCodes, minPostalCode, maxPostalCode} = postalResult[i];
            domStr += "<tr>";
            domStr += `<td>${countryName}</td>`;
            domStr += `<td>${numPostalCodes}</td>`;
            domStr += `<td>${minPostalCode}</td>`;
            domStr += `<td>${maxPostalCode}</td>`;
            domStr += "</tr>";
        }
        domStr += "</table>"
        return domStr;
    }
    $('#btnSubmit3').click(function () {
        $.ajax({
            url: "libs/php/getPostalcodeInfo.php",
            type: 'POST',
            dataType: 'json',
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









/*    $.ajax({
       url: "api.geonames.org/earthquakesJSON?",
       contentType: 'application/json',
       method: 'POST',
       timeout: 3000,
       data: {

       },
       success: function(data) {
           console.log('success', data)
       },
       error: function(){
           $('#error').show();
       }
   }); */

/*     $.ajax({
        type: "GET",
        url: "libs/php/getEarthquakeInfo.php",
        success: function(data){
            console.log(JSON.stringify(data));
            if (data.status.name == "ok") {

                $('#des1').html(data['data'][0]['continent']);

            }
        }

    }); */
