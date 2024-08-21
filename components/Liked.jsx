import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import React from 'react'
import img from "../assets/images/horror.jpg"
import { LinearGradient } from 'expo-linear-gradient';
import Bar from './Bar';

const { width, height } = Dimensions.get('window');

export default function Liked() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Most Liked Genre
                </Text>
                <Image source={img} style={styles.headerImg} />
                <LinearGradient 
                    colors={['transparent', 'rgba(0, 0, 0, 0.8)', 'rgba(0, 0, 0, 1)']} 
                    style={styles.gradient}
                    start={{ x: 0.3, y: 0.5 }}
                    end={{ x: 0, y: 0.5 }}
                />
                <LinearGradient 
                    colors={['transparent', 'rgba(0, 0, 0, 0.8)', 'rgba(0, 0, 0, 1)']} 
                    style={styles.gradient}
                    start={{ x: 0.6, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                />
                <LinearGradient 
                    colors={['transparent', 'rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.8)']} 
                    style={styles.gradient}
                    start={{ x: 0.5, y: 0.3 }}
                    end={{ x: 0.5, y: 0 }}
                />
            </View>

            <View style={styles.content}>
                <Text style={styles.contentText}>
                    My Top 5 Genre
                </Text>
                <Bar />
            </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // borderColor: 'red',
        // borderWidth: 1,
        // borderStyle: 'solid',
        height: height*0.9,
        backgroundColor: 'black',
        gap: 40,
        // justifyContent: 'center',
        alignItems: 'center',

    },
    header: {
        // borderColor: 'yellow',
        // borderWidth: 1,
        // borderStyle: 'solid',
        height: '40%',
        width: '90%',
        gap: 20,
        justifyContent: 'space-between'
    },
    headerText: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        letterSpacing: 0.4,
    },
    headerImg: {
        // borderColor: 'red',
        // borderWidth: 1,
        // borderStyle: 'solid',
        height: '80%',
        width: '100%',
        borderRadius: 10,

    },
    gradient: {
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        borderStyle: 'solid',
        height: '80%',
        width: '100%',
        position: 'absolute',
        bottom: 0
    },
    content: {
        // borderColor: 'yellow',
        // borderWidth: 1,
        // borderStyle: 'solid',
        height: '40%',
        width: '90%',
        gap: 20,
    },
    contentText: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        letterSpacing: 1,
    },

})