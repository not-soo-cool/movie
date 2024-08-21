import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Ranking({img, title, subtitle, num1, num2, rank}) {

    return (
        <View style={styles.container}>

            <View style={styles.poster}>
                <Image source={img} style={styles.posterImg} />
            </View>

            <View style={styles.content}>
                {/* <View style={styles.contentDiv}> */}
                    <Text style={styles.text1}>{title}</Text>
                    <Text style={styles.text2}>{subtitle}</Text>
                {/* </View> */}
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
        height: 100,
        width: '48%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
        // paddingRight: 10,
        gap: 10,
        borderRadius: 10,
        position: 'relative',
        // backgroundColor: 'rgba(255, 255, 255, 0.2)',
        backgroundColor: 'rgba(46, 46, 46, 0.9)',
        shadowColor: '#000', // Shadow color (black)
        shadowOffset: { width: 0, height: 10 }, // Offset the shadow slightly downward
        shadowOpacity: 0.3, // Semi-transparent shadow
        shadowRadius: 20, // Soft, wide shadow
        elevation: 15,
    },
    poster: {
        // borderColor: 'orange',
        // borderWidth: 1,
        // borderStyle: 'solid',
        height: 40,
        width: 40,
        borderRadius: 20,
    },
    posterImg: {
        height: '100%',
        width: '100%',
        borderRadius: 20,
    },
    content: {
        // borderColor: 'orange',
        // borderWidth: 1,
        // borderStyle: 'solid',
        height: '100%',
        width: '80%',
        justifyContent: 'center',
        gap: 8,
        // marginLeft: 20,
    },
    contentDiv: {
        borderColor: 'red',
        borderWidth: 1,
        borderStyle: 'solid',
        height: '70%',
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: 8,
    },
    text1: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    text2: {
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.8)',
    },
    text5: {
        // borderColor: 'pink',
        // borderWidth: 1,
        // borderStyle: 'solid',
        position: 'absolute',
        left: 0,
        top: 24,
        fontSize: 26,
        fontWeight: 'bold',
        color: 'black',
        textShadowColor: 'rgb(255, 223, 0)',
        textShadowRadius: 6,
        // textShadowOffset
    }
})

// 0 0 5px yellow, 0 0 10px yellow, 0 0 15px yellow