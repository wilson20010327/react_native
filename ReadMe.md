---
title: React Native Day 03
tags: react native
description: Some components which can react when user press them 
---
# React Native 03
## User Interface component introduction
1. [**Button**](https://reactnative.dev/docs/button) : A basic button component that should render nicely on any platform. 
2. [**Switch**](https://reactnative.dev/docs/switch) : Renders a boolean input.
### Button & Switch
In this example, the switch component will control the button can be press or not, and if the button been pressed, the title of button will show the total times you press the button
* **Button** : Can change the argument disable to make it touchable or not, and the argument color will change different part of it according to the os(ios(text) or android(background))
* **Switch** : Just like a simple button which have toggle style, and it will have its own value (true or false).
* App output ![](https://i.imgur.com/IuCEQKJ.png =250x) ![](https://i.imgur.com/DKcI06H.png =250x)

```jsx=
//App.js
import { useState } from "react";
import { StyleSheet, Button, View, Switch, Text } from "react-native"; //before using the components make sure to import them

export default function App() {
  var [count, setCount] = useState(0); //define a timer to count the pressing time
  var [text, setTitle] = useState("press me" + "\n" + "count:" + count); //define a text to change the press button been press

  const [isEnabled, setIsEnabled] = useState(false);
  var [switch_text, setSwitch] = useState("Button disable is " + !isEnabled);
  const toggleSwitch = (value) => ( //the switch press action
    setIsEnabled(value),
    setSwitch("Button disable is " + !value)
  );
  const ButtonOnPress = () => (
    //the button press action
    setCount(count + 1), //to assign +1 to count
    setTitle("press me" + "\n" + "count:" + count) //to assign new text to text
  );
  return (
    <View style={styles.container}>
      <View style={styles.black}>
        <View style={styles.container_black}>
          <View style={styles.pink}>
            <View style={{ width: 200, minheight: 50, backgroundColor: "red" }}>
              <Button disabled={!isEnabled} color="green" title={text} onPress={ButtonOnPress} />
              {/* this component can be press and do the action which you get at onpress*/}
            </View>
          </View>
          <View style={styles.white}>
            <Text>{switch_text}</Text>
            <Switch
              onValueChange={toggleSwitch} //when the component been pressed, what action will do
              value={isEnabled} //the value will change the appearance of this component
              thumbColor={isEnabled ? "white" : "black"} //the color of circle in the switch
              trackColor={{ false: "#767577", true: "#81b0ff" }} //the color of other part in the switch
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
  white: {
    flex: 1,
    justifyContent: "center", // move the component to center
    backgroundColor: "white", //change the color of the View to make the result of flex more visible
    alignItems: "center", //  align the child in ths component to center
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
});
```
