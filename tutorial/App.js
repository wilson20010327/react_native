import { StatusBar } from "expo-status-bar";
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
