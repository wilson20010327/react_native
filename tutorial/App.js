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
