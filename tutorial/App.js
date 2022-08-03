import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native"; //before using the components make sure to import them

export default function App() {
  
  return (
    <View style={styles.container}>
      <View style={styles.black}>
        <View style={styles.container_black}>
          <View style={styles.pink}>
            <Image
              source={require("./assets/dog.jpg")} //to show the address of your pitures
              style={{ flex: 1}} //can controll the style of this conponent
              resizeMode="contain" // simple options to insert picture  
              
            />
            {/* this component can show the picture whcih are located at the address which is given to source*/}
          </View>
          <View style={styles.black}>
            <ScrollView horizontal={true} style={{ flex: 1}}>
              <Image
                source={require("./assets/dog.jpg")} //to show the address of your pitures
                style={{ flex: 1,height:400}}
                resizeMode="center" // simple options to insert picture  
                
              />
              <Image
                source={require("./assets/dog.jpg")} //to show the address of your pitures
                style={{ flex: 1,height:400}}
                resizeMode="center" // simple options to insert picture  
                
              />
              <Image
                source={require("./assets/dog.jpg")} //to show the address of your pitures
                style={{ flex: 1,height:400}}
                resizeMode="center" // simple options to insert picture  
                
              />
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text_font: {
    color: "red", //change the color of text
    textAlign: "center", //set the position of the text
    fontSize: 20, //set the size of the text
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  black: {
    flex: 1,
    justifyContent: "center", // move the component to center
    backgroundColor: "white", //change the color of the View to make the result of flex more visible
    alignContent:'center',
    alignItems:'center',
  },
  pink: {
    flex: 1,
    justifyContent: "center", // move the component to center
    backgroundColor: "pink", // change the color of the View to make the result of flex more visible
    alignContent:'center',
    alignItems:'center',
  },
  container_black: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 50, // change the witdh of the margin
    borderColor: "red", //change the border's color
    borderWidth: 1, // change the witdh of the border
    padding: 10, //add so space around the component
  },
});
