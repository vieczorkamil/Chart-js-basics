/* Data */
// const bubble_data = [
//     {x:5, y:1, r:11},
//     {x:29, y:7, r:18}
// ]

const bubble_data = [];

for (let i = 0; i < 20; i++) {
    const x = Math.floor(Math.random() * 51);
    const y = Math.floor(Math.random() * 51);
    const r = Math.floor(Math.random() * 20) + 1;

    const bubble = { x: x, y: y, r: r };
    bubble_data.push(bubble);
}

const bubble_data_2 = [];

for (let i = 0; i < 20; i++) {
    const x = Math.floor(Math.random() * 51);
    const y = Math.floor(Math.random() * 51);
    const r = Math.floor(Math.random() * 20) + 1;

    const bubble = { x: x, y: y, r: r };
    bubble_data_2.push(bubble);
}

/* Create chart */

const my_chart = new Chart('bubbleChart',{
    type: 'bubble',
    data: {
        datasets: [
            {
                label: "Dataset 1",
                data: bubble_data,
                backgroundColor: 'rgba(255, 99, 132, 0.7)',
            },
            {
                label: "Dataset 2",
                data: bubble_data_2,
                backgroundColor: 'rgba(99, 255, 132, 0.7)',
            },
        ]
    },
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                title:{
                    display: true,
                    text: "Axis X"
                },
                min: -5,
                max: 55,
            },
            y: {
                type: 'linear',
                position: 'left',
                title: {
                    display: true,
                    text: "Axis Y"
                },
                min: -5,
                max: 55,
            }
        },
        plugins: {
            title: {
                display: true,
                text: "Bubble chart example"
            },
            legend: {
                position: 'right',
            }
        }
    }
})