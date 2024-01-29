import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import FormContainer from "../components/FormContainer";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import FormContainerForm from "../components/FormContainerForm";

const ConnexionScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[styles.connexion, styles.connexionBg]}>
          <FormContainer />
          <View style={[styles.connexionChild, styles.connexionBg]} />
          <View style={styles.logo}>
            <View style={[styles.logoChild, styles.logoTransform]} />
            <View style={[styles.logoItem, styles.logoTransform]} />
            <Text style={styles.findsmart}>
              <Text style={styles.find}>FIND</Text>
              <Text style={styles.smart}>SMART</Text>
            </Text>
          </View>
          <FormContainerForm navigation={navigation} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around",
  },
  connexionBg: {
    backgroundColor: Color.colorWhite,
    width: "100%",
  },
  logoTransform: {
    transform: [
      {
        rotate: "-11.88deg",
      },
    ],
    position: "absolute",
  },
  connexionChild: {
    height: "69.91%",
    top: "30.09%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderTopLeftRadius: Border.br_21xl,
    borderTopRightRadius: Border.br_21xl,
    position: "absolute",
    width: "100%",
  },
  logoChild: {
    height: "35.21%",
    width: "22.03%",
    top: "17.52%",
    right: "41.41%",
    bottom: "47.27%",
    left: "36.56%",
    backgroundColor: Color.colorDarkslateblue_400,
  },
  logoItem: {
    height: "24.65%",
    width: "15.42%",
    top: "5.07%",
    right: "38.71%",
    bottom: "70.28%",
    left: "45.87%",
    backgroundColor: Color.colorGold,
  },
  find: {
    color: Color.colorDarkslateblue_400,
  },
  smart: {
    color: Color.colorGold,
  },
  findsmart: {
    top: "52.11%",
    left: "-0.88%",
    fontSize: FontSize.size_13xl,
    fontWeight: "800",
    fontFamily: FontFamily.robotoBlack,
    textAlign: "center",
    position: "absolute",
    width: "100%",
  },
  logo: {
    height: "16.82%",
    width: "58.21%",
    top: "32.23%",
    right: "21.03%",
    bottom: "50.95%",
    left: "20.77%",
    position: "absolute",
  },
  connexion: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default ConnexionScreen;
