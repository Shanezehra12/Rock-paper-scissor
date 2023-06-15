import React, {useState, useRef} from 'react';
import {StyleSheet, SafeAreaView, View, Text, Animated, ImageBackground} from 'react-native';
import { Constants } from 'expo-constants';
import DisplayResult from '../Components/DisplayResult';
import Actions from './Actions';

export default function Rockpaper (){
    const [userChoice, setUserChoice] = useState(0)
    const [computerChoice, setComputerChoice] = useState(0)
    const [result, setResult] = useState("")
    const [canPlay, setPlay] = useState(true)

    // FOR ANIMATION 

    const fadeAnimation = useRef(new Animated.Value(1)).current;

    function play(choice) 
    {
        // WE HAVE 3 CHOICES
        // 1 = ROCK
        // 2 = PAPER
        // 3 = SCISSORS

    const randomComputerChoice = Math.floor(Math.random() * 3) + 1;
    let resultString = "";

    if (choice === 1) {
        resultString = randomComputerChoice === 3 ? "WIN" : "LOSE"
    }
    else if (choice === 2) {
        resultString = randomComputerChoice === 1 ? "WIN" : "LOSE"
    }
    else {
        resultString = randomComputerChoice === 2 ? "WIN" : "LOSE"
    }

    if (choice === randomComputerChoice) {
        resultString = "DRAW"
    }

    setUserChoice(choice);
    setComputerChoice(randomComputerChoice);

    // WAIT ANIMATION HIDE OLD RESULT
    setTimeout(() =>{
        setResult(resultString);
    }, 300)


    //ANIMATION HIDE OLD RESULT AND SHOW NEW RESULT
    Animated.sequence([
        Animated.timing(fadeAnimation ,{
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }),

        Animated.timing(fadeAnimation, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        })
    ]).start();

    // DISABLE ACTION WHEN ANIMATION RUNNING
    setPlay(false)
    setTimeout(() =>{
        setPlay(true);
    }, 600);
    }

    // RETURN THE VIEW
    return (
        
        <SafeAreaView style = {styles.container}>

    <ImageBackground
    source={require('../assets/RedSunset.jpg')}
    style= {{width: "100%", height:"100%"}}
    >
        <View style = {styles.content}>

            <View style = {styles.result}>

                <Text style={{color:'white', fontSize: 40, fontWeight: "500",paddingTop:40}}>
                    Rock Paper Scissor </Text>

                    <Animated.Text
                    style = {styles.resultText}
                    >
                        {result}
                    </Animated.Text>
            </View>

                <View style = {styles.screen}>
                    {!result ? (
                        <Text style = {styles.readyText}> Let's Play </Text>
                    ) : (
                        <DisplayResult
                             userChoice = {userChoice}
                             computerChoice = {computerChoice}
                        />
                    )}
                </View>

                <Actions play = {play} canPlay = {canPlay} />

        </View>

    </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },

    content : {
        flex : 1,
    },

    result : {
        justifyContent : "flex-end",
        alignItems : "center"
    },

    resultText : {
        fontSize : 40,
        fontWeight : "500",
        color: "white",
        marginTop: 60
    },

    screen : {
        flex : 1,
        flexDirection : "row",
    },

    readyText : {
        marginTop : -48,
        alignSelf : "center",
        textAlign : "center",
        width : "100%",
        fontSize : 50,
        fontWeight : "500",
        color: "white"
    },
})


