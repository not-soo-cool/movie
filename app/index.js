import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Dimensions, Platform, Image, StatusBar, useColorScheme } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeftIcon, PencilSquareIcon, EyeIcon, ClipboardDocumentListIcon, ChartBarIcon, ChevronRightIcon } from "react-native-heroicons/outline"
import img1 from '../assets/images/123.jpg'
import { LinearGradient } from 'expo-linear-gradient'
import Genre from '../components/Genre'
import Social from '../components/Social'
import Cine from '../components/Cine'
import Liked from '../components/Liked'


var { width, height } = Dimensions.get('window');
const ios = Platform.OS === 'ios';

export default function index() {

    const scheme = useColorScheme();

    useEffect(() => {
        StatusBar.setBarStyle(scheme === 'dark' ? 'light-content' : 'dark-content');
        if (Platform.OS === 'android') {
            StatusBar.setBackgroundColor(scheme === 'dark' ? 'black' : 'white');
        }
    }, [scheme]);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 20
      }}
      style={styles.scroll}
    >
        <View style={styles.view0}>
            <View style={styles.view1}>
                {/* <SafeAreaView style={styles.saf}> */}
                    <TouchableOpacity style={styles.touch}>
                        <ChevronLeftIcon size="28" color="white" strokeWidth={2.5} />
                    </TouchableOpacity>
                    <Text style={styles.text1}>Account Analytics</Text>
                {/* </SafeAreaView> */}
            </View>
            <View style={styles.view2}>
                <Image source={img1} style={styles.img1} />
                <LinearGradient 
                    colors={['transparent', 'rgba(0, 0, 0, 0.8)', 'rgba(0, 0, 0, 1)']} 
                    style={styles.gradient}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 0.8 }}
                />
                <View style={styles.view3}>
                    <View style={styles.view4}>
                        <Text style={styles.text2}>My Activity</Text>
                    </View>
                    <View style={styles.view5}>
                        <View style={styles.view6}>
                            <View style={styles.view8}>
                                <Text style={styles.text3}>28</Text>
                                <View style={styles.view9}>
                                    <PencilSquareIcon style={styles.icon} size="28" color="white" strokeWidth={2.5} />
                                    <Text style={styles.text4}>Reviews Wrote</Text>
                                </View>
                                <TouchableOpacity style={styles.touch2}>
                                    <Text style={styles.text5}>Know More</Text>
                                    <ChevronRightIcon style={styles.icon2} size="28" color="white" strokeWidth={2.5} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.view8}>
                                <Text style={styles.text3}>22 <Text style={styles.text6}>hrs</Text></Text>
                                <View style={styles.view9}>
                                    <EyeIcon style={styles.icon} size="28" color="white" strokeWidth={2.5} />
                                    <Text style={styles.text4}>Watch time</Text>
                                </View>
                                <TouchableOpacity style={styles.touch2}>
                                    <Text style={styles.text5}>Know More</Text>
                                    <ChevronRightIcon style={styles.icon2} size="28" color="white" strokeWidth={2.5} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.view6}>
                            <View style={styles.view8}>
                                <Text style={styles.text3}>3</Text>
                                <View style={styles.view9}>
                                    <ClipboardDocumentListIcon style={styles.icon} size="28" color="white" strokeWidth={2.5} />
                                    <Text style={styles.text4}>Lists Added</Text>
                                </View>
                                <TouchableOpacity style={styles.touch2}>
                                    <Text style={styles.text5}>Know More</Text>
                                    <ChevronRightIcon style={styles.icon2} size="28" color="white" strokeWidth={2.5} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.view8}>
                                <Text style={styles.text3}>#9k</Text>
                                <View style={styles.view9}>
                                    <ChartBarIcon style={styles.icon} size="28" color="white" strokeWidth={2.5} />
                                    <Text style={styles.text4}>Leaderboard</Text>
                                </View>
                                <TouchableOpacity style={styles.touch2}>
                                    <Text style={styles.text5}>Know More</Text>
                                    <ChevronRightIcon style={styles.icon2} size="28" color="white" strokeWidth={2.5} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* <View style={styles.view7}></View> */}
                    </View>
                </View>
            </View>
        </View>

        <Genre />

        <Social />

        <Cine />

        <Liked />

    </ScrollView>
  )
}


const styles = StyleSheet.create({
    scroll: {
        // borderColor: 'red',
        // borderWidth: 1,
        // borderStyle: 'solid',
        flex: 1,
        backgroundColor: 'black',
    },
    view0: {
        // borderColor: 'aqua',
        // borderWidth: 1,
        // borderStyle: 'solid',
        height: height*0.91,
        // display: 'flex',
        zIndex: 20,
        position: 'relative',
        flex: 1,
        height: height*0.91,
        // width: '100%',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    view1: {
        // borderColor: 'green',
        // borderWidth: 1,
        // borderStyle: 'solid',
        height: '10%',
        display: 'flex',
        zIndex: 20,
        position: 'relative',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(46, 46, 46, 1)',
    },
    // safe: {
    //     borderColor: 'blue',
    //     borderWidth: 1,
    //     borderStyle: 'solid',
    //     // position: 'absolute',
    //     zIndex: 20,
    //     width: '100%',
    //     flexDirection: 'row',
    //     justifyContent: 'flex-start',
    //     alignItems: 'center',
    //     gap: 20
    // },
    touch: {
        // borderColor: 'red',
        // borderWidth: 1,
        // borderStyle: 'solid',
        position: 'absolute',
        left: 8,
        // backgroundColor: 'rgba(47, 47, 47, 0.6)',
        backgroundColor: 'rgba(66, 66, 66, 1)',
        height: 35,
        width: 35,
        borderRadius: 8,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text1: {
        // borderColor: 'red',
        // borderWidth: 1,
        // borderStyle: 'solid',
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    view2: {
        // borderColor: 'brown',
        // borderWidth: 1,
        // borderStyle: 'solid',
        height: '90%',
        display: 'flex',
        position: 'relative',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img1: {
        // borderColor: 'yellow',
        // borderWidth: 1,
        // borderStyle: 'solid',
        width: '100%',
        height: '100%',
        // width: 100,
        // height: height*0.91,
        // zIndex: 25,
        resizeMode: 'cover',
    },
    gradient: {
        // borderColor: 'red',
        // borderWidth: 1,
        // borderStyle: 'solid',
        height: '100%',
        width: '100%',
        position: 'absolute',
        // zIndex: 40,
    },
    view3: {
        // borderColor: 'pink',
        // borderWidth: 1,
        // borderStyle: 'solid',
        position: 'absolute',
        height: '60%',
        display: 'flex',
        width: '100%',
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 10
    },
    view4: {
        // borderColor: 'green',
        // borderWidth: 1,
        // borderStyle: 'solid',
        height: '15%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text2: {
        // borderColor: 'red',
        // borderWidth: 1,
        // borderStyle: 'solid',
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    view5: {
        // borderColor: 'green',
        // borderWidth: 1,
        // borderStyle: 'solid',
        height: '85%',
        width: '100%',
    },
    view6: {
        // borderColor: 'blue',
        // borderWidth: 1,
        // borderStyle: 'solid',
        height: '50%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    view7: {
        // borderColor: 'blue',
        // borderWidth: 1,
        // borderStyle: 'solid',
        height: '50%',
        width: '100%',
    },
    view8: {
        // borderColor: 'yellow',
        // borderWidth: 1,
        // borderStyle: 'solid',
        height: '80%',
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text3: {
        // borderColor: 'red',
        // borderWidth: 1,
        // borderStyle: 'solid',
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    text6: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    view9: {
        // borderColor: 'green',
        // borderWidth: 1,
        // borderStyle: 'solid',
        // height: '40%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 5,
        gap: 10
    },
    icon: {
        // borderColor: 'blue',
        // borderWidth: 1,
        // borderStyle: 'solid',
        // width: '10%'
    },
    text4: {
        color: 'white',
        fontSize: 18,
        // fontWeight: 'bold',
        // width: '90%',
        textAlign: 'center',
    },
    touch2: {
        // borderColor: 'green',
        // borderWidth: 1,
        // borderStyle: 'solid',
        // height: '25%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20
    },
    text5: {
        color: 'yellow',
        fontSize: 16,
        // fontWeight: 'bold',
        // width: '90%',
        textAlign: 'center',
    },
    icon2: {
        // borderColor: 'blue',
        // borderWidth: 1,
        // borderStyle: 'solid',
        width: '10%',
        color: 'yellow'
    },
})