// https://www.jqueryscript.net/demo/dashboard-admin-template-bootstrap/dashboard.html



$("#about,#chart").hide();


$("button").on("click",function(){
    $("#about,#chart,#dashboard").hide();
    $($(this).attr("for")).show();
})



// const data = {
//     labels: [
//       'Red',
//       'Blue',
//       'Yellow'
//     ],
//     datasets: [{
//       label: 'My First Dataset',
//       data: [300, 50, 100],
//       backgroundColor: [
//         'rgb(255, 99, 132)',
//         'rgb(54, 162, 235)',
//         'rgb(255, 205, 86)'
//       ],
//       hoverOffset: 4
//     }]
//   };

// const ctx = document.getElementById('myChart');

// new Chart(ctx, {
//   type: 'doughnut',
//   data: data,
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// });



var options = {
    chart: {
      type: 'line'
    },
    series: [{
      name: 'sales',
      data: [50,40,35,50,49,60,70,91,125]
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    }
  }
  
  var chart = new ApexCharts(document.querySelector("#Chart"), options);
  
  chart.render();