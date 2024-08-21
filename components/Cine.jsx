import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Poster from './Poster';
import img from '../assets/images/joseph.jpg'
import Ranking from './Ranking';

var { width, height } = Dimensions.get('window');

export default function Cine() {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    My Cine Highlights
                </Text>
                <View style={styles.headerSub}>
                    <Text style={styles.headerSubText}>
                        Most watched cast
                    </Text>
                </View>
            </View>

            <View style={styles.content}>
                <Poster img={img} title="Joseph Vijay" subtitle="Actor & Director" num1="22" num2="12" rank={"1"} />
                <View style={styles.contentDiv}>
                    <Ranking img={img} title="Joseph Vijay" subtitle="Actor & Director" rank={"2"} />
                    <Ranking img={img} title="Joseph Vijay" subtitle="Actor & Director" rank={"3"} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        height: height*0.6,
        width: width,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 20,
    },
    header: {
        // borderColor: 'yellow',
        // borderWidth: 1,
        // borderStyle: 'solid',
        height: '30%',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'space-around',
        gap: 10
    },
    headerText: {
        // borderColor: 'blue',
        // borderWidth: 1,
        // borderStyle: 'solid',
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
    },
    headerSub: {
        // borderColor: 'blue',
        // borderWidth: 1,
        // borderStyle: 'solid',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 5
    },
    headerSubText: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold'
    },
    content: {
        // borderColor: 'pink',
        // borderWidth: 1,
        // borderStyle: 'solid',
        height: '70%',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        // gap: 20
    },
    contentDiv: {
        // borderColor: 'red',
        // borderWidth: 1,
        // borderStyle: 'solid',
        height: '50%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16
    }
})