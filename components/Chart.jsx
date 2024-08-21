import React, { useState } from 'react';
import { BarChart } from 'react-native-chart-kit';
import { View, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function Chart() {
    const [selectedBar, setSelectedBar] = useState(null);

    const data = {
        labels: ["Jan", "Mar", "May", "Jul", "Sept", "Nov"],
        datasets: [
        {
            data: [10, 6, 40, 16, 30, 52, 45, 15, 20, 34, 32, 14],
        },
        ],
    };

    const chartConfig = {
        backgroundGradientFrom: "#000000",
        backgroundGradientTo: "#000000",
        decimalPlaces: 0, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // text and axis color
        labelColor: (opacity = 1) => `rgba(255, 255, 255, 0.5)`, // label color
        barPercentage: 0.35,
    };

    const handleBarClick = (data, index) => {
        setSelectedBar(index);
    };

    return (
        <View>
        <BarChart
            style={{
                marginVertical: 8,
                borderRadius: 16,
                left: -8,
            }}
            data={data}
            width={screenWidth-8}
            height={360}
            yAxisLabel=""
            chartConfig={chartConfig}
            verticalLabelRotation={0}
            fromZero={true}
            showBarTops={false}
            withInnerLines={true}
            onDataPointClick={({ index }) => handleBarClick(data, index)}
        />
        </View>
    );
}