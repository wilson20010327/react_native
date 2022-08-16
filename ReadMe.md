---
title: React Native Day 04
tags: react native
description: Some useful components (flatlist, alert, TouchableOpacity, keyboard.dismiss,TouchableWithoutFeedback) 
---
# React Native 04
## Useful component & api introduction
1. [Flatlist](https://reactnative.dev/docs/flatlist) : Just like ScrollView, but when loading the data ScrollView will load all the data of it, in compare flatlist will only load the data which it  is goring to show. 
2. [TouchableOpacity](https://reactnative.dev/docs/touchableopacity) : A wrapper for making views respond properly to touches. 
3. [Alert](https://reactnative.dev/docs/alert/) : Launches an alert dialog with the specified title and message.
4. [Keyboard.dismiss](https://reactnative.dev/docs/keyboard#dismiss) : Dismisses the active keyboard and removes focus.
5. [TouchableWithoutFeedback](https://reactnative.dev/docs/touchablewithoutfeedback)  
## Flatlist & TouchableOpacity
In this example there are some components (View) which are customized to button(with TouchableOpacity), when they been press they will disapear, but when you slide to the top or press the refresh button the list will be refresh.
* **Flatlist** : just like a scrollview but with much more api can use, in this example I use the [onRefresh](https://reactnative.dev/docs/flatlist#onrefresh) to achieve the refreah function.
* **TouchableOpacity** : package the component which you want to make it pressible.
* App output ![](https://i.imgur.com/iwRq9de.gif =250x)
```jsx=
//App.js
import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Button,
  Dimensions,
} from "react-native"; //before using the components make sure to import them
const DATA = [
  {
    id: 1,
    title: "First Item",
  },
  {
    id: 2,
    title: "Second Item",
  },
  {
    id: 3,
    title: "Third Item",
  },
  {
    id: 4,
    title: "Four Item",
  },
  {
    id: 5,
    title: "Five Item",
  },
  {
    id: 6,
    title: "Six Item",
  },
  {
    id: 7,
    title: "Seven Item",
  },
  {
    id: 8,
    title: "Eight Item",
  },
  {
    id: 9,
    title: "Nine Item",
  },
];
//get the window size
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function App() {
  var [data, setData] = useState(DATA); // make the data flexible
  var [isFetching, setIsFetching] = useState(false);
  var itemOnPress = (id) => {
    setData((prev) => {
      return prev.filter((data) => data.id != id);
    });
  };
  /* make the component has the action when the press event happened*/
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => itemOnPress(item.id)}>
      <View style={styles.item}>
        <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <View style={styles.black}>
        <View style={styles.container_black}>
          <View style={styles.white}>
            {/*list the data which is .json like data*/}
            <FlatList
              data={data} //specify the data
              renderItem={
                renderItem
              } /*each item in the data will be the argument of this function*/
              onRefresh={() => {
                //it is not necessary, can refreah when slide to the top
                setIsFetching(true); 
                setData(DATA);
                setIsFetching(false);
              }}
              refreshing={isFetching}// it is necessary when you want to use onrefresh 
              //keyExtractor={(item) => item.id} you can change the order of the list
            />
            
            <Button
              style={{ paddingBottom: 20 }}
              title="refresh"
              onPress={() => {
                setData(DATA);
              }}
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
    alignItems: "center",
  },
  white: {
    paddingTop: 50,
    flex: 1,
    paddingBottom: 20,
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
  item: {
    backgroundColor: "orange",
    width: windowWidth * 0.8,
    height: windowHeight * 0.1,
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});

```

## Alert & Keyboard.dismiss & TouchableWithoutFeedback
In this example there is a textinput that the user can type in, beside there is a button next to it when this button been pressed the alert dailog will pop out and the msg will be what the user type in the textinput. Moreover, we want user has a joyful experience when typing, so implement keyboard dismiss when user press on other part of the screen.
* **Alert** : to pop out a dailog, you can change the title, msg and the button bellow the dialog 
* **Keyboard**.dismiss : when call this api the forcus on keyboard will be discard.
* **TouchableWithoutFeedback** : when the press action happened but don't have  any event will be implement, then the event which is connect with TouchableWithoutFeedback will be implement 
* App output : ![](https://i.imgur.com/u6bOOje.gif =250x)


```jsx=
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

```