window._skel_config = {
    prefix: 'css/style',
    preloadStyleSheets: true,
    resetCSS: true,
    boxModel: 'border',
    grid: { gutters: 30 },
    breakpoints: {
        wide: { range: '1200-', containers: 1140, grid: { gutters: 50 } },
        narrow: { range: '481-1199', containers: 960 },
        mobile: { range: '-480', containers: 'fluid', lockViewport: true, grid: { collapse: true } }
    }


};

$(document).ready(function () {
    $("#convertbutton").click(function () {
        var metricValue = $("#inputID").val();
       // var metricValue = $("#metricinput").val();
        var imperialValue = $("#imperialinput").val();

        $("#ansID").val(Converter.convertFromMetricToImperial(metricValue));

        if (((metricValue.length != 0) && (imperialValue.length != 0))
            || ((metricValue.length == 0) && imperialValue.length == 0)) {
            alert("Please set one field to convert")
        }
        if (metricValue.length != 0) {
            $("#imperialinput").val(Converter.convertFromPoundsToKIlo(metricValue));
        }
        else if (imperialValue.length != 0) {
            $("#metricinput").val(Converter.convertFromMetricToImperial(imperialValue));
        }



    });
    $("#clearbutton").click(function () {
        $("#inputIDt").val('');
        $("#ansID").val('');
    });

    $('#foo :selected').val();
    $('#foo').change(function () {
        var metricValue = $("#inputID").val();
        var cw = $("#inputID").val();
        var selected =  $('#foo :selected').val();
        alert("Selected " + metricValue + " " + selected)
        console.log($('#foo :selected').val());

        $("#ansID").val(calculate(selected, metricValue));
    }).change();

});

function calculate(selected, cw) {



    switch (selected) {
        case "pk":
            return Converter.convertFromImperialToMetric(cw);
            break;
        case "kp":

            return Converter.convertFromMetricToImperial(cw);
            break;
        case "ci":
            return Converter.convertFromCentimetersToInches(cw);
            break;
        case "ic":
            return Converter.convertFromInchesToCentimeters(cw);
            break;
        case "mk":
            return Converter.convertFromMilesToKilometers(cw);
            break;
        case "km":
            return Converter.convertFromKilometersToMiles(cw);
            break;

        default:

            return "Error ! No Conversion";

            //  code to be executed if n is different from case 1 and 2
    }





}