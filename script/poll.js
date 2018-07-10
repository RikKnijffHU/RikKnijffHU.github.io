let ws = new WebSocket('ws://localhost:3001/poll');

ws.onopen = function () {
    console.log('websocket is connected ...')
}
var male = 0;
var female = 0;
var other = 0;
ws.onmessage = function (e) {
    console.log(e.data)
    var ctx = document.getElementById("myChart");
    if(e.data == "male"){
        male += 1;
    } else if(e.data =='female'){
        female += 1;
    } else{
        other += 1;
    }
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Red", "Blue", "Yellow"],
            datasets: [{
                label: '# of Votes',
                data: [male, female, other],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}
function Submit() {
    var radios = document.getElementsByName('gender');

    for (var i = 0, length = radios.length; i < length; i++)
    {
     if (radios[i].checked)
     {
      // do whatever you want with the checked radio
      console.log(radios[i].value);
    ws.send(radios[i].value);
      // only one radio can be logically checked, don't check the rest
      break;
     }
    }

}