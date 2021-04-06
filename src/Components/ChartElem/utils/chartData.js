const chartData = (data) => {
  return {
    labels: ['Scatter'],
    datasets: [{
      label: data.chartTitle,
      type: 'scatter',
      data: data.value,
      backgroundColor: [
        'lightblack'
      ],
      borderColor: [
        'black'
      ],
      borderWidth: 5,
      lineTension: 0,
      showLine: true,
      fill: 1
    }]
  };
};

export default chartData;
