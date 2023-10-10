// AnyChart - Bar Chart Component
// Based on the below example
// https://www.anychart.com/products/anychart/gallery/Range_Charts/Diverging_Bar_Chart.php?theme=lightBlue
anychart.onDocumentReady(function () {

  // Create a bar chart
  let chart = anychart.bar();
  // Grab the survey data from Flask end
  let surveyData = ["", Math.round(outputData.somatic/60*100), Math.round(outputData.nonsomatic/72*100)];

  // Configure a function to create series
  let createSeries = function (columnNumber, name) {
    let data = [];
    let value = surveyData[columnNumber];
    const center = 0;

    if (name === "Somatic") {
        data.push({
            x: surveyData[0],
            low: -center,
            high: -center - value,
            value: value
        });
    } else {
        data.push({
            x: surveyData[0],
            low: center,
            high: center + value,
            value: value
        });
    }

    let series = chart.rangeBar(data);
    series.name(name).stroke("3 #fff 1").selectionMode("none");
    series.tooltip().title().useHtml(true).fontSize(12);
  };

  // Create series
  createSeries(1, "Somatic");
  createSeries(2, "Non-Somatic");

  // Set the chart title & style
  chart
    .title()
    .enabled(true)
    .useHtml(true)
    .text("<span style='font-size: 18px; color: #000; font-family: Helvetica; font-weight: bold'>Somatic vs Non-Somatic Symptoms % Score </span>");

  // Enable the chart legend
  chart
    .legend()
    .enabled(true);

  // Remove vertical axis ticks
  chart.xAxis().ticks(false);

  // Create a diverging bar chart from the multi-series bar chart
  chart.yScale().stackMode("value");

  // Set the min max of the horizontal axis for viewing purposes
  chart.yScale().maximum(100);
  chart.yScale().minimum(-100);

  // Display the absolute value of the score to avoid confusion
  chart
    .yAxis(0)
    .labels()
    .format(function () {
        return Math.abs(this.value);
    });

  chart
    .tooltip()
    .useHtml(true)
    .titleFormat(function () {
        return ("<span style=font-size:13px;>" + this.seriesName + " Score </span>");
    })
    .format(function () {
        return (this.getData('value') + "%");
    });

  chart.lineMarker().value(0).stroke("#CECECE");

  // Set a container id for the chart
  chart.container("somatic-container");

  // Initiate chart drawing
  chart.draw();

});

// ChartJS - Radar Chart Component
let ctx = document.getElementById('radar-chart');
let myChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: outputData.labels,
        datasets: [
            {
                label: 'Symptom Valuations',
                data: outputData.vals,
                backgroundColor: [
                    'rgba(0, 0, 255, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(0, 0, 255, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Radar Plot of Symptoms',
            fontSize: 18,
            fontColor: '#000'
        },
        scale: {
            angleLines: {
                display: false
            },
            ticks: {
                suggestedMin: 0,
                suggestedMax: 12
            },
            pointLabels: {
                fontSize: 12,
                fontColor: '#000'
            }
        }
    }
});