import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {FontAwesome5} from '@expo/vector-icons';


const Actions = ({play, canPlay }) => {
  return (
    <View style = {styles.actions}>
      <TouchableOpacity                                                      // ROCK
           disabled = {!canPlay}
           style = {styles.actionButton}
           onPress = {() => play(1)}
      >
        <FontAwesome5 name = {'hand-rock'} size = {40} color = "black" />
      </TouchableOpacity>

      <TouchableOpacity                                                      // PAPER
           disabled = {!canPlay}
           style = {styles.actionButton}
           onPress = {() => play(2)}
      >
        <FontAwesome5 name = {'hand-paper'} size = {40} color = "black" />
      </TouchableOpacity>

      <TouchableOpacity                                                       // SCISSOR
           disabled = {!canPlay}
           style = {styles.actionButton}
           onPress = {() => play(3)}
      >
        <FontAwesome5 name = {'hand-scissors'} size = {40} color = "black"
        style = {{ transform : [{ rotate : "67deg" }]}}
        />
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create ({
    actions : {
        height : 100,
        flexDirection : "row",
        justifyContent : "space-around",
        alignItems : "center",
    },

    actionButton : {
        width : 90,
        height: 90,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "white",
        borderRadius : 26,
        borderColor: "#C06C84",
        borderWidth: 7,
        marginBottom:20
    },

})

export default Actions

