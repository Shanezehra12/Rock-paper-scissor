import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

const ICONS = ['hand-rock', 'hand-paper', 'hand-scissors'];

const DisplayResult = ({userChoice, computerChoice}) => {
  return (
    <>
    <View style = {styles.column}>
         <FontAwesome5
         name = {ICONS[userChoice -1]}
         size = {64}
         color = "#FFD200"
         solid
         style = {userChoice === 3 ? styles.scissorsLeftIcon : styles.leftIcon}
         />
         <Text style = {styles.playerName}> YOU </Text>
    </View>

    <View style = {styles.column}>
         <FontAwesome5
         name = {ICONS[userChoice -1]}
         size = {64}
         color = "#FD746C"
         solid
         style = {userChoice === 3 ? styles.scissorsRightIcon : styles.RightIcon}
         />
         <Text style = {styles.playerName}> COMPUTER </Text>
    </View>
    </>
  )
}


const styles = StyleSheet.create({
  column: {
    flex: 1,
    justifyContent : "center",
    alignItems : "center"
  },

  playerName : {
    color : "#373737",
    fontSize : 20,
    marginTop : 16
  },

  leftIcon : {
    transform : [{rotateZ: '80deg'}]
  },

  scissorsLeftIcon : {
    transform : [{rotateZ : '180deg'}, {rotateX : '180deg'}]
  },

  RightIcon : {
    transform : [
      {rotateZ : '180deg'},
      {rotateY : '180deg'},
      {rotateX : '180deg'},
    ],
  },

  scissorsRightIcon : {

  },

  

})

export default DisplayResult

