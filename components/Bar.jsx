import React, { useState } from 'react';
import { BarChart } from 'react-native-chart-kit';
import { View, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function Bar() {
    const [selectedBar, setSelectedBar] = useState(null);

    const barColors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFD700'];

    const data = {
        labels: ["Horror", "Action", "Thriller", "Animation", "Biography"],
        datasets: [
        {
            data: [250, 200, 180, 120, 60],
            colors: barColors.map((color) => (opacity = 1) => `${color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`)
        },
        ],
    };

    const chartConfig = {
        backgroundGradientFrom: "#000000",
        backgroundGradientTo: "#000000",
        decimalPlaces: 0, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // text and axis color
        labelColor: (opacity = 1) => `rgba(255, 255, 255, 0.5)`, // label color
        barPercentage: 0.9,
        // barColor: 'white'
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
            width={screenWidth*0.9}
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