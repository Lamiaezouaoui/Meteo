function meteoAjax() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var users = JSON.parse(xmlhttp.responseText);
            $v = meteo(users);
            document.getElementById("txtHint").innerHTML = $v;
        }
    };
    xmlhttp.open("GET", 'https://www.prevision-meteo.ch/services/json/paris', true);
    xmlhttp.send();
}
meteoAjax();






function meteo(users) {

    var month = ["Jan", "Fev", "Mars", "Avr", "Mai", "Juin", "Juil", "Aou", "Sep", "Oct", "Nov", "Dec", ]
    var y = users.fcst_day_1.date.split(".");
    var y1 = users.fcst_day_0.date.split(".");
    var y2 = users.fcst_day_2.date.split(".");
    var y3 = users.fcst_day_3.date.split(".");

    alert(y[0] + " " + month[y[1] - 1]);
    if (users.fcst_day_0.tmin < 5)

        return '<h3 class="E">Météo de ' + users.city_info.name + ',France</h3> <br>' +
        '<hr class="E">' +
        '<table> ' +
        '<tr>' +
        '<td><img  class="b" src= ' + users.current_condition.icon + ' width="160"height="160"/><br> <strong class="b"> T.ressentie :</strong> <br>' +
        '<strong class="b"> Humidité :</strong>' + users.current_condition.humidity + ' %' +
        '<td> ' +
        '<h1 class="R">' + users.current_condition.tmp + '°</h1>' +
        '<h4 class="T"> Min ' + users.fcst_day_0.tmin + '° | Max' + users.fcst_day_0.tmax +
        '°</h4> ' +
        '<h4 class="D">' + users.current_condition.condition + '</h4>'


    +
    '<strong class="D" > Pression : </strong>' + users.current_condition.pressure +
        'hPa <br>' +
        '<strong class="D"> Vent : </strong>' + users.current_condition.wnd_spd +
        ' Km/h </td> '




    +
    '<td class="css">' +
    '<ul class="C">' +
    '<li class="a"><span>' + users.fcst_day_0.day_short +
        '</span><br>' + y1[0] + " " + month[y1[1] - 1] +
        '<br><img  src= ' + users.fcst_day_0.icon + ' width="45"height="45"/><br>' + users.fcst_day_0.tmin +
        '||' + users.fcst_day_0.tmax +
        '</li></td>' +
        '<td class="css"><li class="a"><span>' + users.fcst_day_1.day_short +
        '</span><br>' + y[0] + " " + month[y[1] - 1] +
        '<br><img  src= ' + users.fcst_day_1.icon + ' width="45"height="45"/><br>' + users.fcst_day_1.tmin +
        '||' + users.fcst_day_1.tmax +
        '</li></td>' +
        '<td class="css"><li class="a"><span>' + users.fcst_day_2.day_short +
        '</span><br>' + y2[0] + " " + month[y2[1] - 1] +
        '<br><img  src= ' + users.fcst_day_2.icon + ' width="45"height="45"/><br>' + users.fcst_day_2.tmin +
        '||' + users.fcst_day_2.tmax +
        '</li></td>' +
        '<td class="css"><li class="a"><span>' + users.fcst_day_3.day_short +
        '</span><br>' + y3[0] + " " + month[y3[1] - 1] +
        '<br><img  src= ' + users.fcst_day_3.icon + ' width="45"height="45"/><br>' + users.fcst_day_3.tmin +
        '||' + users.fcst_day_3.tmax +
        '</li></td>' +
        '</ul>' +
        '</td>'

    +
    '</tr>' +
    '</table>'

}