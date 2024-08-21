import { View, Text, StyleSheet, Dimensions, Platform, TouchableOpacity } from 'react-native'
import React from 'react'
import { ArrowDownIcon, InformationCircleIcon, PencilSquareIcon } from "react-native-heroicons/outline"
import Chart from './Chart';
import Box from './Box';

var { width, height } = Dimensions.get('window');
const ios = Platform.OS === 'ios';

export default function Genre() {
  return (
    <View style={styles.container}>

        <View style={styles.header}>
            <Text style={styles.headerText}>Horror</Text>
            <View style={styles.headerSub}>
                <PencilSquareIcon size="28" color="white" strokeWidth={2.5} />
                <Text style={styles.headerSubText}>Favorite Genre</Text>
            </View>
        </View>

        <View style={styles.content}>
            <Chart />
            <View style={styles.contentDiv}>
                <View style={styles.contentDiv2}>
                    <Text style={styles.text1}>
                        My Overall Activity
                    </Text>
                    <TouchableOpacity style={styles.btn}>
                        <InformationCircleIcon size="28" color="white" strokeWidth={1.5} />
                    </TouchableOpacity>
                </View>

                <View style={styles.contentDiv3}>
                    <Text style={styles.text2}>
                        201 <Text style={styles.text3}>10%<ArrowDownIcon size="16" color="white" strokeWidth={2} style={styles.arrow} /></Text>
                    </Text>
                </View>
            </View>
        </View>

        <View style={styles.footer}>
            <Box />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        height: height*0.91,
        width: width,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 20,
    },
    header: {
        // borderColor: 'blue',
        // borderWidth: 1,
        // borderStyle: 'solid',
        // height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    headerText: {
        // borderColor: 'yellow',
        // borderWidth: 1,
        // borderStyle: 'solid',
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    headerSub: {
        // borderColor: 'red',
        // borderWidth: 1,
        // borderStyle: 'solid',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    headerSubText: {
        // borderColor: 'green',
        // borderWidth: 1,
        // borderStyle: 'solid',
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    content: {
        // borderColor: 'blue',
        // borderWidth: 1,
        // borderStyle: 'solid',
        height: '50%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentDiv: {
        // borderColor: 'red',
        // borderWidth: 1,
        // borderStyle: 'solid',
        flexDirection: 'row',
        height: '10%',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    contentDiv2: {
        // borderColor: 'green',
        // borderWidth: 1,
        // borderStyle: 'solid',
        // height: '100%',
        // width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
    },
    text1: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    btn: {
        // borderColor: 'white',
        // borderWidth: 1,
        // borderStyle: 'solid',
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    contentDiv3: {
        // borderColor: 'purple',
        // borderWidth: 1,
        // borderStyle: 'solid',
        // height: '100%',
        // width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
    },
    text2: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginRight: 5,
    },
    text3: {
        color: 'white',
        fontSize: 14,
        
    },
    arrow: {
        color: 'red',
        marginBottom: 2,
        marginLeft: 2,
    },
    footer: {
        borderColor: 'rgba(255, 255, 255, 0.7)',
        borderWidth: 1,
        borderStyle: 'solid',
        height: '25%',
        width: '90%',
        paddingHorizontal: 16,
        borderRadius: 16,
        justifyContent: 'center',
        // alignItems: 'center',
    },
})