import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import icon from "../assets/Wavy_Lst-01_Single-11.jpg";
import appName from "../assets/1.jpg";

// const appName = { uri :" "};

const HomeScreen = () => {
  const { height } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View style={styles.upperSection}>
        <ImageBackground
          source={icon}
          resizeMode="cover"
          style={[styles.icon, { height: height * 0.5 }]}
        >
            <Image source={appName}  />
        </ImageBackground>
      </View>

      <View style={styles.lowerSection}>
        <Text>The personality first connecting app</Text>
        <Text>If you were a fruit, then you would be a fine-apple</Text>
        <Text>Already a user? Try Signing In</Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: "center",
    // justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: "50%",
  },
  icon: {
    // margin: "15%",
    width: "100%",
    // height: "70%",
    maxHeight: 300,
    maxWidth: 300,
    resizeMode: "contain",
    // borderRadius: 2,
    // overflow: "hidden",
  },
  upperSection:{

  },
  lowerSection:{

  }
});
