$(document).ready(function(){
  var generateChart = {
    gender: function(data){
      var male = 0, female = 0;
      for(var i = 0; i < data.length; i++){
        // console.log(data[i].person.gender);
          if(data[i].person.gender === 'M'){
            male++;
          } else {
            female++;
          }
      } 

      var chartData = [
        {
          value: male,
          color: "rgb(0,127,255)",
          highlight: "rgba(0,127,255,0.5)",
          label: "Male"
        },
        {
          value: female,
          color: "rgb(255,67,101)",
          highlight: "rgba(255,67,101,0.5)",
          label: "Female"
        }
      ];
      var ctx = $('.gender canvas').get(0).getContext("2d");
      var pieChart = new Chart(ctx).Pie(chartData);
    },
    orderTotal: function(data){
      var ranges = {
        '0-14': 0,
        '15-49': 0,
        '50-99': 0,
        '100-199': 0,
        '200-299': 0
      };
      for(var i = 0; i < data.length; i++){
        // console.log(data[i].order.total);
          if(data[i].order.total <= 14){
            ranges['0-14']++;
          } else if(data[i].order.total <= 49){
            ranges['15-49']++;
          } else if(data[i].order.total <= 99){
            ranges['50-99']++;
          } else if(data[i].order.total <= 199){
            ranges['100-199']++;
          } else {(data[i].order.total <= 299)
            ranges['200-299']++;
          }
      }

      var chartData = {
        labels: ["0-14", "15-49", "50-99", "100-199", "200-299"] /* What should these labels be? */ ,
        datasets: [
          {
            fillColor: "rgba(0,127,255,0.4)",
            strokeColor: "rgba(0,127,255,0.8)",
            highlightFill: "rgba(0,127,255,0.8)",
            highlightStroke: "rgba(0,127,255,0.4)",
            data: [ranges['0-14'], ranges['15-49'], ranges['50-99'], ranges['100-199'], ranges['200-299']] /* How do we organize this data ? */
          }
        ]
      };
      var ctx = $('.order-total canvas').get(0).getContext("2d");
      var barChart = new Chart(ctx).Bar(chartData);
    },
    orderCategory: function(data){
      var categories = {
        belt: {
          value: 0,
          color: 'rgb(0,127,255)',
          highlight: 'rgba(0,127,255,0.5)',
          label: 'Belt'
        },
        shirt: {
          value: 0,
          color: 'rgb(177,143,207)',
          highlight: 'rgba(177,143,207,0.5)',
          label: 'Shirt'
        },
        pant: {
          value: 0,
          color: 'rgb(255,210,63)',
          highlight: 'rgba(255,210,63,0.5)',
          label: 'Pant'
        },
        footwear: {
          value: 0,
          color: 'rgb(255,67,101)',
          highlight: 'rgba(255,67,101,0.5)',
          label: 'Footwear'
        },
        jewelry: {
          value: 0,
          color: 'rgb(221,96,49)',
          highlight: 'rgba(221,96,49,0.5)',
          label: 'Jewelry'
        },
        jacket: {
          value: 0,
          color: 'rgb(44,246,179)',
          highlight: 'rgba(44,246,179,0.5)',
          label: 'Jacket'
        }
      };

      for(var i = 0; i < data.length; i++){
        // console.log(data[i].order.category);
        if(data[i].order.category === 'belt'){
          categories.belt.value++;
        } else if (data[i].order.category === 'shirt'){
          categories.shirt.value++;
        } else if (data[i].order.category === 'pant'){
          categories.pant.value++;
        } else if (data[i].order.category === 'footwear'){
          categories.footwear.value++;
        } else if (data[i].order.category === 'jewelry'){
          categories.jewelry.value++;
        } else {
          categories.jacket.value++;
        }
      }

      var ctx = $('.order-category canvas').get(0).getContext("2d");
      var pieChart = new Chart(ctx).Pie(categories);
    },
    orderTimeline: function(data){

      var quarters = [
        {
          Q1: 0, 
          Q2: 0, 
          Q3: 0, 
          Q4: 0
        }
      ];
      
      var chartData = {
        labels: ["Q1", "Q2", "Q3", "Q4"] /* What should these labels be? */ ,
        datasets: [
          {
            fillColor: "rgba(0,127,255,0.2)",
            strokeColor: "rgba(0,127,255,1)",
            pointColor: "rgba(0,127,255,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(0,127,255,1)",
            data: [quarters['Q1'], quarters['Q2'], quarters['Q3'], quarters['Q4']] /* How do we organize this data? */
          }
        ]
      };

      for(var i = 0; i < data.length; i++){
        // console.log(data[i].order.date);
        if(data[i].order.date >= '1/1/2015' && data[i].order.date <= '3/31/2015'){
          quarters.Q1++;
          console.log(quarters.Q1);
        } else if (data[i].order.date >= '4/1/2015' && data[i].order.date <= '6/30/2015'){
          quarters.Q2++;
        } else if (data[i].order.date >= '7/1/2015' && data[i].order.date <= '9/30/2015'){
          quarters.Q3++;
        } else {
          quarters.Q4++;
        }
      }

      var ctx = $('.order-timeline canvas').get(0).getContext("2d");
      var lineChart = new Chart(ctx).Line(chartData);
    }
  };

  $.get('https://www.batchacademy.com/api/wdfne/dummy/intellidash', function(response){
    generateChart.gender(response);
    generateChart.orderTotal(response); 
    generateChart.orderCategory(response); 
    generateChart.orderTimeline(response); 
  }) 

});
