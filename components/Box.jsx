import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { ChevronRightIcon } from 'react-native-heroicons/outline'

export default function Box() {
  return (
    <View style={styles.container}>
        <View style={styles.box1}>
            <Text style={styles.text1}>My Movie Time</Text>
            <TouchableOpacity style={styles.btn}>
                <ChevronRightIcon size="28" color="white" strokeWidth={2.5} />
            </TouchableOpacity>
        </View>
        <View style={styles.box2}>
            <Text style={styles.text2}>Get into  a deeper insights on your movies tastes and other details</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        // borderColor: 'green',
        // borderWidth: 1,
        // borderStyle: 'solid',
        flex: 1,
        backgroundColor: 'black',
        gap: 40,
        justifyContent: 'center',
    },
    box1: {
        // borderColor: 'yellow',
        // borderWidth: 1,
        // borderStyle: 'solid',
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        // paddingVertical: 10,
    },
    box2: {
        // borderColor: 'pink',
        // borderWidth: 1,
        // borderStyle: 'solid',
        // flex: 1,
        // backgroundColor: 'white',
        marginLeft: 18,
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%'
    },
    text1: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    text2: {
        fontSize: 16,
        // fontWeight: 'bold',
        color: 'rgba(255, 255, 255, 0.8)',
    },
    btn: {
        padding: 10,
    }
})