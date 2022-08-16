import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
  Keyboard,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native"; //before using the components make sure to import them

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function App() {
  var [input, setInput] = useState("");
  var buttonOnPress = () => {
    {/*whwn the button been pressed the alert dialog will pop out, you can change the title, msg and the button bellow the dialog */ }
    Alert.alert("This is alert", input,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]);
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss() /*pack all component in this project when the touch screen event happened but without any feetback then implement keyboard dismiss */}> 
      <View style={styles.container}>
        <View style={styles.black}>
          <View style={styles.container_black}>
            <View style={styles.pink}>
              <View style={{ flexDirection: "row" }}>
                <TextInput style={styles.input}
                  placeholder="Type word" //the default text will show
                  onChangeText={setInput}
                />
                <TouchableOpacity onPress={buttonOnPress}>
                  <View style={styles.button}>
                    <Text >Ready</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    alignItems: "center",
  },
  white: {
    flex: 1,
    //justifyContent: "center", // move the component to center
    backgroundColor: "white", //change the color of the View to make the result of flex more visible
    //alignItems: "center", //  align the child in ths component to center
  },
  pink: {
    flex: 1,
    justifyContent: "center", // move the component to center
    backgroundColor: "pink", // change the color of the View to make the result of flex more visible
    alignItems: "center", // align the child in ths component to center
  },
  container_black: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  input: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.1,
    borderColor: "red", //change the border's color
    borderWidth: 1, // change the witdh of the border
  },
  button: {
    width: windowWidth * 0.2,
    height: windowHeight * 0.1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: 'orange'
  },
});
