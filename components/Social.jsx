import { View, Text, StyleSheet, Dimensions, Platform, TouchableOpacity } from 'react-native'
import React from 'react'
import Line from './Line';
import Chart from './Chart';
import { ArrowDownIcon, InformationCircleIcon, LockClosedIcon } from 'react-native-heroicons/outline';

var { width, height } = Dimensions.get('window');
const ios = Platform.OS === 'ios';

export default function Social() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>
                My Social Insights
            </Text>
            <Text style={styles.headerSubText}>
                Oops! due to insufficient activity the data can't be utilized for analysis to obtain insights of your account. To get insights, explore your social section by engaging in more activities.
            </Text>
        </View>

        <View style={styles.content}>
            <Line />
            <View style={styles.contentDiv}>
                <View style={styles.contentDiv2}>
                    <Text style={styles.text1}>
                        My Social Interaction
                    </Text>
                    <TouchableOpacity style={styles.btn}>
                        <InformationCircleIcon size="24" color="white" strokeWidth={1.5} />
                    </TouchableOpacity>
                </View>

                <View style={styles.contentDiv3}>
                    <Text style={styles.text2}>
                        201 <Text style={styles.text3}>10%<ArrowDownIcon size="16" color="white" strokeWidth={2} style={styles.arrow} /></Text>
                    </Text>
                </View>
            </View>

            <View style={styles.float}>
                <LockClosedIcon size="24" color="white" strokeWidth={1.5} />
            </View>
        </View>

        <View style={styles.button}>
            <TouchableOpacity style={styles.btn1}>
                <Text style={styles.btnText}>Explore</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        // borderColor: 'red',
        // borderWidth: 1,
        // borderStyle: 'solid',
        flex: 1,
        backgroundColor: 'black',
        height: height*0.91,
        width: width,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    header: {
        // borderColor: 'blue',
        // borderWidth: 1,
        // borderStyle: 'solid',
        // height: '30%',
        width: width*0.9,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 25,
    },
    headerText: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
    },
    headerSubText: {
        color: 'white',
        fontSize: 14,
        letterSpacing: -1,
        lineHeight: 20,
        textAlign: 'center',
        marginTop: 10,
    },
    content: {
        // borderColor: 'blue',
        // borderWidth: 1,
        // borderStyle: 'solid',
        height: '40%',
        width: width*0.9,
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
        paddingLeft: 10,
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
        gap: 2,
    },
    text1: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        // letterSpacing: -0.5,
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
    float: {
        // borderColor: 'yellow',
        // borderWidth: 1,
        // borderStyle: 'solid',
        position: 'absolute',
        top: 0,
        left: 0,
        height: '85%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    button: {
        // borderColor: 'blue',
        // borderWidth: 1,
        // borderStyle: 'solid',
        height: '8%',
        width: width*0.9,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn1: {
        backgroundColor: 'rgb(255, 222, 1)',
        height: '100%',
        width: '100%',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    }
})