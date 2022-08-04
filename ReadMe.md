---
title: React Native Day 02
tags: react native
description: some simple components in react native
---
# React Native 02
you can find the code [here](https://github.com/wilson20010327/react_native/tree/flex_direction)
## Introduce some files/forder in the init project
![](https://i.imgur.com/Z3n6O0S.png =250x)
* assets : Put some static files(png/jpeg/txt/......) in it
* App.js : Modify this file to control the app
* app.json : Some information of your app
* package.json/yarn.lock : Show packages which will be used in the project ,and help to download them easily with command line (npm install or yarn)
## Simple Components Introduce
1. [StyleSheet](https://reactnative.dev/docs/StyleSheet)<br> A StyleSheet is an abstraction similar to CSS StyleSheets
2. [View](https://reactnative.dev/docs/view) <br> View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls.
3. [Text](https://reactnative.dev/docs/text)<br> A React component for displaying text.
4. [Image](https://reactnative.dev/docs/image)<br> A React component for displaying different types of images.
5. [TextInput](https://reactnative.dev/docs/TextInput)<br> A foundational component for inputting text into the app via a keyboard.
6. [ScrollView](https://reactnative.dev/docs/ScrollView)<br> Make the screen can slip with the long data
### StyleSheet & View 
Modify the App.js

* **[Flex](https://reactnative.dev/docs/flexbox) & Color change**
    With flex we can fill the screen, caculate the sum of flex in the same level and get the fraction which tell you how many part of screen you will get. 
    * App output![](https://i.imgur.com/FxTMHvE.png =250x)
```jsx=
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,View } from 'react-native'; //before using the components make sure to import them 

export default function App() {
  return (
    <View style={styles.container}> 
    {/* 
    use View to fill the screen with StyleSheet.flex 
    only one component can be return, simply will use a View to pack all the components
    */}
      <View style={styles.black}>
          {/* 
          Get half of the screen because in the same level sum of the flex=2 and this view get 1 
          */}
      </View>
      <View style={styles.green}>
          {/* 
          Get half of the screen because in the same level sum of the flex=2 and this view get 1 
          */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  black: {
    flex: 1,
    backgroundColor: 'black', //change the color of the View to make the result of flex more visible
  },
  green: {
    flex: 1,
    backgroundColor: 'green',// beside the name of the color you can also use color code 	#008000
  },
});

```
* **[Flex Direction]**(https://reactnative.dev/docs/flexbox)
     Controls the direction in which the children of a node are laid out.There are four types (column、row、column-reverse、row-reverse)you can choose in flex direction, bellow will show you how the different between row and column
     * App output ![](https://i.imgur.com/wHfVaF0.png =250x)

```jsx=
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native"; //before using the components make sure to import them

export default function App() {
  return (
    <View style={styles.container}>
      {/* 
    use View to fill the screen with StyleSheet.flex 
    only one component can be return, simply will use a View to pack all the components
    */}
      <View style={styles.black}>
        {/* 
          Get half of the screen because in the same level sum of the flex=2 and this view get 1 
          */}
        <View style={styles.container_black}>
          {/* 
            change the flex direction and the order of the blocks will become different, in default is column
            */}
          <View style={styles.pink}></View>
          <View style={styles.black}></View>
        </View>
      </View>

      {/* half of the screen*/}
      <View style={styles.green}>
        {/* 
          Get half of the screen because in the same level sum of the flex=2 and this view get 1 
          */}
        <View style={styles.container_green}>
          {/* 
            change the flex direction and the order of the blocks will become different, this is row
            */}
          <View style={styles.pink}></View>
          <View style={styles.green}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  black: {
    flex: 1,
    backgroundColor: "black", //change the color of the View to make the result of flex more visible
  },
  green: {
    flex: 1,
    backgroundColor: "green", // beside the name of the color you can also use color code 	#008000
  },
  pink: {
    flex: 1,
    backgroundColor: "pink", //change the color of the View to make the result of flex more visible
  },
  container_black: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  container_green: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
});

```
### Text & Textinput & [useState](https://www.w3schools.com/react/react_usestate.asp)
In this example the text component will echo what the content textinput is, to make the text flexible we use UseState function which is import from react 
* **UseState** : To make the variable can be flexible, whenever the variable change all the components which content this variable will be changed as well.
* **Text** : Will show the text 
* **Textinput** : create some line for user to type in. 
* App output ![](https://i.imgur.com/wsN03fD.png =250x)
```jsx=
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

```

### Image & ScrollView  
This example will show how to use the image and scrollview components, and three images are use in scrollview.
* **Image**: To show the image ( Including network images, static resources, temporary local images, and images from local disk) which is given by the user 
    * there are five simple ways to resize pic (ResizeMode)
        * **contain** : Scale the image uniformly (maintain the image's aspect ratio) so that both dimensions (width and height) of the image will be equal to or less than the corresponding dimension of the view (minus padding).
        * **center** : Center the image in the view along both dimensions. If the image is larger than the view, scale it down uniformly so that it is contained in the view.
        * **cover** : Scale the image uniformly (maintain the image's aspect ratio) so that both dimensions (width and height) of the image will be equal to or larger than the corresponding dimension of the view (minus padding).
        * **skretch** : Scale width and height independently, This may change the aspect ratio of the src.
        * **repeat** : Repeat the image to cover the frame of the view. The image will keep its size and aspect ratio, unless it is larger than the view, in which case it will be scaled down uniformly so that it is contained in the view. 
* **ScrollView**: Make the screen can be slidable. Use the style can easy to controll the layout of this, you can change the direction which you want to slide with **( horizontal={true} or vertical={true} )**
* app output![](https://i.imgur.com/CgxrnVY.png =250x)
 
```jsx=
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
              style={{ height:400,width:400}} //can controll the style of this conponent
              resizeMode="contain" // simple options to insert picture  
              
            />
            {/* this component can show the picture whcih are located at the address which is given to source*/}
          </View>
          <View style={styles.black}>
            <ScrollView horizontal={true} style={{ flex: 1}}>
              <Image
                source={require("./assets/dog.jpg")} //to show the address of your pitures
                style={{ height:400,width:400}}
                resizeMode="contain" // simple options to insert picture  
                
              />
              <Image
                source={require("./assets/dog.jpg")} //to show the address of your pitures
                style={{ height:400,width:400}}
                resizeMode="contain" // simple options to insert picture  
                
              />
              <Image
                source={require("./assets/dog.jpg")} //to show the address of your pitures
                style={{  height:400,width:400}}
                resizeMode="contain" // simple options to insert picture  
                
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
    //alignContent:'center',
    //alignItems:'center',
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

```