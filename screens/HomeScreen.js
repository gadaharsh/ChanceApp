import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import icon from "../assets/Wavy_Lst-01_Single-11.jpg";
import appName from "../assets/appName.png";
import arrow from "../assets/next32.png";

const HomeScreen = () => {

  const { height } = useWindowDimensions();

  const onPressNext = () => {
    console.warn("Clicked Next Button");
  }

  const onPressSignin = () => {
      console.warn("Clicked Signin")
  }

  return (
    <View style={styles.container}>
      <View style={styles.upperSection}>
        <ImageBackground
          source={icon}
          resizeMode="cover"
          style={[styles.icon, { height: height * 0.5 }]}
        >
          <Image source={appName} style={styles.chance} />
        </ImageBackground>
      </View>

      <View style={styles.lowerSection}>
        <View>
          <Text style={styles.heading1}>
            The personality first connecting app
          </Text>
          <Text style={styles.heading2}>
            If you were a fruit, then you would be a fine-apple
          </Text>
          <Text style={styles.heading3}>
            Already a user? Try <Text onPress={onPressSignin} style={styles.signin}>Signing In</Text>
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={onPressNext}>
        <View style={styles.button}>
          <Image source={arrow} style={styles.arrow} />
        </View>
      </TouchableOpacity>
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
    // display: 'flex',
    //   flexDirection: 'column',
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: "50%",
  },
  icon: {
    // marginVertical: "2%",
    width: "100%",
    // height: "70%",
    maxHeight: 300,
    maxWidth: 400,
    resizeMode: "contain",
    // borderRadius: 2,
    // overflow: "hidden",
  },
  upperSection: {
    // backgroundColor: '#E8F2F6',
    // height: "40%",
    // flex: 1,
    borderBottomColor: "#E8F2F6",
    borderBottomWidth: 5,
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
    // borderRadius: "20%",
  },
  lowerSection: {
    flex: 1,
    alignContent: "center"
  },
  heading1: {
    fontSize: 38,
    fontWeight: "bold",
    marginHorizontal: "5%",

    paddingVertical: "5%",
    justifyContent: "center",
  },
  heading2: {
    fontSize: 14,
    // textAlign: "center",
    paddingVertical: "2%",
    marginHorizontal: "5%",
  },
  heading3: {
    fontSize: 14,
    // textAlign: "center",
    paddingVertical: "2%",
    marginHorizontal: "5%",
    // paddingHorizontal: "5%",
  },
  chance: {
    marginTop: "68%",
    height: "60%",
    width: "60%",
    marginHorizontal: "20%",
    resizeMode: "contain",
  },
  signin: {
    color: "#87B2E5",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#E8F2F6",
    margin: "20%",
    marginLeft: "40%",
    padding: "5%",
    height: 65,
    width: 65,
    borderRadius: 65,
  },
  arrow:{
    // width:"120%",
    // height: "120%",

    // marginVertical: "%",
    
}
});
