import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";
import icon from "../assets/Wavy_Lst-01_Single-11.jpg";
import appName from "../assets/appName.png";

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
          <Image source={appName} style={styles.chance} />
        </ImageBackground>
      </View>

      <View style={styles.lowerSection}>
        <Text style={styles.heading1}>
          The personality first connecting app
        </Text>
        <Text style={styles.heading2}>
          If you were a fruit, then you would be a fine-apple
        </Text>
        <Text style={styles.heading3}>Already a user? Try <Text style={styles.signin}>Signing In</Text></Text>
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
    borderBottomWidth: 3,
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
    // borderRadius: "20%",
  },
  lowerSection: {
    flex: 1,
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
});
