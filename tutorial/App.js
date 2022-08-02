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
  const [text, SetText] = useState("I am text"); // define a variable which is "I am text" as default and can chage the value though using the function SetText
  return (
    <View style={styles.container}>
      <View style={styles.black}>
        <View style={styles.container_black}>
          <View style={styles.pink}>
            <Text style={styles.text_font /*give the text propety */}>
              {text}
            </Text>
            {/* this component can show the words whcih are between*/}
          </View>
          <View style={styles.black}>
            <TextInput
              style={styles.input}
              placeholder="type word to change text" //the default text will show
              onChangeText={SetText} // the action when the input textinput has change
            />
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
  },
  pink: {
    flex: 1,
    justifyContent: "center", // move the component to center
    backgroundColor: "pink", // change the color of the View to make the result of flex more visible
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
