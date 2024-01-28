import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import { FontFamily, Color, Border, Padding, FontSize } from "../GlobalStyles";

const FormContainer = () => {
  const navigation = useNavigation();
  return (
    <View style={[styles.headerBg, styles.barrePosition]}>
      <View style={[styles.headerBgChild, styles.headerPosition]} />
      <View style={[styles.headerBgItem, styles.headerPosition]} />
      <Text
        style={[styles.icon, styles.iconBorder]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.fi2223615Icon}
          contentFit="cover"
          source={require("../assets/fi-2223615.png")}
        />
      </Text>
      <View style={styles.heading}>
        <Text style={styles.seConnecter}>Se connecter</Text>
        <Text style={[styles.veuillezConnecterVotre, styles.textTypo]}>
          Veuillez connecter votre compte
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  barrePosition: {
    width: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
  },
  headerPosition: {
    opacity: 0.5,
    position: "absolute",
  },
  iconBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  textTypo: {
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
  },
  borderPosition: {
    bottom: "0%",
    position: "absolute",
  },
  headerBgChild: {
    height: "187.17%",
    width: "179.49%",
    top: "-68.45%",
    right: "10.26%",
    bottom: "-18.72%",
    left: "-89.74%",
    backgroundColor: Color.colorDarkslateblue_300,
  },
  headerBgItem: {
    height: "131.55%",
    width: "126.15%",
    top: "-40.64%",
    right: "36.92%",
    bottom: "9.09%",
    left: "-63.08%",
    backgroundColor: Color.colorDarkslateblue_100,
  },
  fi2223615Icon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  icon: {
    height: "8.82%",
    width: "8.46%",
    top: "14.84%",
    right: "85.51%",
    bottom: "76.34%",
    left: "6.03%",
    borderRadius: Border.br_5xl,
    borderColor: Color.colorGold,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_5xs,
    position: "absolute",
  },
  seConnecter: {
    fontSize: FontSize.size_13xl,
    lineHeight: 32,
    fontWeight: "700",
    width: 256,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorWhite,
  },
  veuillezConnecterVotre: {
    fontSize: FontSize.size_base,
    lineHeight: 16,
    color: Color.colorLightslategray,
    marginTop: 8,
  },
  heading: {
    marginTop: -53,
    marginLeft: -171,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  barreReseauheureChild: {
    top: 0,
    height: 47,
    left: "0%",
    right: "0%",
  },
  border: {
    height: "100%",
    width: "90.43%",
    right: "9.57%",
    borderRadius: 3,
    borderColor: Color.colorWhite,
    opacity: 0.35,
    borderWidth: 1,
    borderStyle: "solid",
    left: "0%",
    top: "0%",
  },
  capIcon: {
    height: "35.29%",
    width: "5.46%",
    top: "32.35%",
    bottom: "32.35%",
    left: "94.54%",
    maxWidth: "100%",
    maxHeight: "100%",
    opacity: 0.4,
    overflow: "hidden",
    right: "0%",
    position: "absolute",
  },
  capacity: {
    height: "64.71%",
    width: "73.99%",
    top: "17.65%",
    right: "17.79%",
    bottom: "17.65%",
    left: "8.22%",
    borderRadius: 1,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  battery: {
    height: "94.44%",
    width: "36.61%",
    bottom: "5.56%",
    left: "63.39%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  batteryParent: {
    height: "75%",
    width: "18.43%",
    top: "25%",
    left: "81.57%",
    right: "0%",
  },
  text: {
    width: "48.27%",
    fontSize: FontSize.size_smi,
    color: Color.colorWhite,
    fontWeight: "600",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  frameParent: {
    height: "34.04%",
    width: "92.42%",
    top: "27.66%",
    right: "3.73%",
    bottom: "38.3%",
    left: "3.85%",
    position: "absolute",
  },
  barreReseauheure: {
    height: "12.57%",
    bottom: "87.43%",
    left: "0%",
    right: "0%",
    top: "0%",
  },
  headerBg: {
    height: "44.31%",
    bottom: "55.69%",
    backgroundColor: Color.colorDarkslateblue_500,
    overflow: "hidden",
    left: "0%",
    right: "0%",
    top: "0%",
  },
});

export default FormContainer;
