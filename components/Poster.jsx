import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Poster({img, title, subtitle, num1, num2, rank}) {

    return (
        <View style={styles.container}>

            <View style={styles.poster}>
                <Image source={img} style={styles.posterImg} />
            </View>

            <View style={styles.content}>
                <View style={styles.contentDiv}>
                    <Text style={styles.text1}>{title}</Text>
                    <Text style={styles.text2}>{subtitle}</Text>
                </View>
                <View style={styles.contentDiv2}>
                    <View style={styles.contentDiv3}>
                        <Text style={styles.text3}>Reviews written</Text>
                        <Text style={styles.text4}>{num1}</Text>
                    </View>

                    <View style={styles.contentDiv4}>
                        <Text style={styles.text3}>Movies watched</Text>
                        <Text style={styles.text4}>{num2}</Text>
                    </View>
                </View>
            </View>

            <Text style={styles.text5}>{rank}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // borderColor: 'green',
        // borderWidth: 1,
        // borderStyle: 'solid',
        height: 120,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        gap: 10,
        borderRadius: 10,
        position: 'relative',
        // backgroundColor: 'rgba(255, 255, 255, 0.2)',
        backgroundColor: 'rgba(46, 46, 46, 0.9)',
    },
    poster: {
        // borderColor: 'orange',
        // borderWidth: 1,
        // borderStyle: 'solid',
        height: 80,
        width: 80,
        borderRadius: 40,
    },
    posterImg: {
        height: '100%',
        width: '100%',
        borderRadius: 40,
    },
    content: {
        // borderColor: 'orange',
        // borderWidth: 1,
        // borderStyle: 'solid',
        height: '100%',
        width: '80%',
        // marginLeft: 20,
    },
    contentDiv: {
        // borderColor: 'red',
        // borderWidth: 1,
        // borderStyle: 'solid',
        height: '70%',
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: 8,
    },
    text1: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
    },
    text2: {
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.8)',
    },
    contentDiv2: {
        // borderColor: 'red',
        // borderWidth: 1,
        // borderStyle: 'solid',
        height: '30%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: 6,
    },
    contentDiv3: {
        // borderColor: 'pink',
        // borderWidth: 1,
        // borderStyle: 'solid',
        height: '100%',
        width: '50%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 10
    },
    text3: {
        fontSize: 13,
        color: 'white',
        letterSpacing: -0.5
    },
    text4: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    contentDiv4: {
        // borderColor: 'pink',
        // borderWidth: 1,
        // borderStyle: 'solid',
        height: '100%',
        width: '50%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 10
    },
    text5: {
        // borderColor: 'pink',
        // borderWidth: 1,
        // borderStyle: 'solid',
        position: 'absolute',
        left: 0,
        top: 10,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        textShadowColor: 'rgb(255, 223, 0)',
        textShadowRadius: 4,
        // textShadowOffset
    }
})

// 0 0 5px yellow, 0 0 10px yellow, 0 0 15px yellow