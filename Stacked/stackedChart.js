Chart.register(ChartDataLabels);
Chart.defaults.set('plugins.datalabels');

/* Data */
const data1 = [727, 589, 537, 543, 574];
const data2 = [238, 553, 746, 884, 903];
const data3 = [1238, 553, 746, 884, 903];


/* Create chart */
const my_chart = new Chart('stackedChart',{
    type: 'bar',
    data: {
        labels: ["2011", "2012", "2013", "2014", "2015"],
        datasets: [
            {
                label: "Dataset 1",
                data: data1,
                backgroundColor: 'rgba(103, 183, 220, 0.8)',
            },
            {
                label: "Dataset 2",
                data: data2,
                backgroundColor: 'rgba(103, 128, 220, 0.8)',
            },
            {
                label: "Dataset 3",
                data: data3,
                backgroundColor: 'rgba(82, 90, 176, 0.8)',
            }
        ]
    },
    plugins: [ChartDataLabels],
    options: {
        indexAxis: 'y',
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            datalabels: {
                color: "white",
            },
            title: {
                display: true,
                text: "Stacked bar example",
                font: {
                    size: 20
                }
            }
        }
    },
})