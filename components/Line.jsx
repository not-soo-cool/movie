import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { LineChart } from 'react-native-chart-kit';

let screenWidth = Dimensions.get('window').width;

export default function Line() {

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
            color: (opacity = 1) => `rgba(255, 255, 255, 0.5)`, // optional
            strokeWidth: 1 // optional
          }
        ],
        // legend: ["Rainy Days"] // optional
    };

    const chartConfig = {
        backgroundGradientFrom: "#000000", // background gradient starting color
        backgroundGradientTo: "#000000", // background gradient ending color
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // color of the line and labels
        color: (opacity = 1) => `rgba(255, 255, 255, 0.1)`, // color of the line and labels
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // color of the x-axis and y-axis labels
        strokeWidth: 2, // width of the line
        decimalPlaces: 0, // number of decimal places in y-axis values
        propsForDots: {
          r: "6", // radius of the dots
          strokeWidth: "0", // width of the border around the dots
          stroke: "#ffa726" // color of the border around the dots
        },
        propsForBackgroundLines: {
          strokeDasharray: "", // solid lines for the grid
        },
        style: {
          borderRadius: 16, // round the corners of the chart
        },
    };
      

    return (
        <View>
            <LineChart
                data={data}
                width={screenWidth}
                height={300}
                chartConfig={chartConfig}
                style={{
                    left: 8
                }}
            />
        </View>
    )
}