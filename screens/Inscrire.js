import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";
import Toast from 'react-native-toast-message';
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";
// import { TextInput } from "react-native-gesture-handler";

const Inscrire = () => {
  const navigation = useNavigation();
  const [username, onChangeUsername] = React.useState('')
  const [password, onChangePassword] = React.useState('')
  const [telephone, onChangeTelephone] = React.useState('')
  const [email, onChangeEmail] = React.useState('')


  const handleRegister = async () => {
    
    try {
      const response = await axios.post('https://find-smart.net/api/register', { name: username, password: password, email: email,
    telephone: telephone });
      // await AsyncStorage.setItem('jwtToken', response.data.token);
      if(response.data.user.length != 0 ) {
        alert('Inscription reussie ! Veuillez vous connectez');
        navigation.navigate('Connexion');
      }
      
    } catch (error) {
      alert('Arrr matey! No treasure found. (Invalid credentials)');
    }
  }

  return (
    
    <View style={styles.inscrire}>
      <View style={styles.headerBg}>
        <Image
          style={[styles.headerBgChild, styles.headerLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Image
          style={[styles.headerBgItem, styles.headerLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Pressable style={styles.icon} onPress={() => navigation.goBack()}>
          <Image
            style={styles.fi2223615Icon}
            contentFit="cover"
            source={require("../assets/fi-2223615.png")}
          />
        </Pressable>
        <View style={[styles.heading, styles.headingPosition]}>
          <Text style={[styles.sinscrire, styles.sinscrireTypo]}>
            S’inscrire
          </Text>
          <Text style={[styles.veuillezVousInscrire, styles.textTypo]}>
            Veuillez vous inscrire
          </Text>
        </View>
      </View>
      <View style={styles.inscrireChild} />
      <View style={styles.logo}>
        <Image
          style={[styles.logoChild, styles.logoLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-31.png")}
        />
        <Image
          style={[styles.logoItem, styles.logoLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-32.png")}
        />
        <Text style={styles.findsmart}>
          <Text style={styles.find}>FIND</Text>
          <Text style={styles.smart}>SMART</Text>
        </Text>
      </View>
      <View style={[styles.divParent, styles.headingPosition]}>
        <View style={[styles.div, styles.divPosition]}>
          <View style={styles.emailpassFlexBox}>
            <View style={[styles.input, styles.pB]}>
              <Image
                style={styles.fi1077063Icon}
                contentFit="cover"
                source={require("../assets/fi-1077063.png")}
              />
              <TextInput onChangeText={onChangeUsername} value={username} placeholder="Nom & Prenom"
                style={[styles.nomPrenom, styles.loginLayout, { height : 20}]}
              />
            </View>
            <View style={[styles.inputShadowBox, styles.pB]}>
              <Image
                style={styles.fi1077063Icon}
                contentFit="cover"
                source={require("../assets/fi-646094.png")}
              />
              <TextInput onChangeText={onChangeEmail} style={[styles.nomPrenom, styles.loginLayout, styles.inputStyle]} value={email} placeholder="Email" />
            </View>
            <View style={[styles.inputShadowBox, styles.pB]}>
              <Image
                style={styles.fi1077063Icon}
                contentFit="cover"
                source={require("../assets/fi-2889676.png")}
              />
              <TextInput onChangeText={onChangePassword} secureTextEntry={true} style={[styles.nomPrenom, styles.loginLayout, styles.inputStyle]} value={password} placeholder="Mot de passe" />
            </View>
            <View style={[styles.inputShadowBox, styles.pB]}>
              <Image
                style={styles.fi1077063Icon}
                contentFit="cover"
                source={require("../assets/fi-159832.png")}
              />
              <TextInput onChangeText={onChangeTelephone} style={[styles.nomPrenom, styles.loginLayout, styles.inputStyle]} value={telephone} placeholder="Telephone" />
            </View>
          </View>
          <TouchableOpacity style={styles.input4} onPress={handleRegister }>
            <Text style={[styles.sinscrire1, styles.emailpassFlexBox]}>
              S’inscrire
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tab}>
          <Pressable style={styles.tabShadowBox} onPress={() => {}}>
            <Text style={[styles.login, styles.loginLayout]}>Login</Text>
          </Pressable>
          <View style={[styles.tabButton1, styles.tabShadowBox]}>
            <Text
              style={[styles.register, styles.loginLayout]}
            >{`Register `}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
  pB: {
    paddingBottom: 30
  },
  inputStyle: { height: 20, marginLeft: 10},
  headerLayout: {
    opacity: 0.5,
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  headingPosition: {
    left: "6.15%",
    // position: "absolute",
  },
  sinscrireTypo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    color: Color.extendedWhite,
  },
  textTypo: {
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
  },
  divPosition: {
    bottom: "0%",
    position: "absolute",
  },
  logoLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  loginLayout: {
    lineHeight: 20,
    fontSize: FontSize.textSmLeading5FontMedium_size,
  },
 
  tabShadowBox: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    borderRadius: Border.br_29xl,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
  },
  headerBgChild: {
    height: "187.17%",
    width: "179.49%",
    top: "-68.45%",
    right: "10.26%",
    bottom: "-18.72%",
    left: "-89.74%",
  },
  headerBgItem: {
    height: "131.55%",
    width: "126.15%",
    top: "-40.64%",
    right: "36.92%",
    bottom: "9.09%",
    left: "-63.08%",
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
    borderRadius: 24,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderColor: Color.colorGold,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  sinscrire: {
    lineHeight: 32,
    width: 256,
    textAlign: "left",
    color: Color.extendedWhite,
    fontSize: FontSize.size_13xl,
  },
  veuillezVousInscrire: {
    fontSize: 16,
    lineHeight: 16,
    color: "#94a3b8",
    width: 153,
    marginTop: 8,
    textAlign: "left",
  },
  heading: {
    height: "14.97%",
    width: "65.64%",
    top: "35.83%",
    right: "28.21%",
    bottom: "49.2%",
  },
  barreReseauheureChild: {
    top: 0,
    height: 47,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  border: {
    height: "100%",
    width: "90.43%",
    right: "9.57%",
    borderRadius: 3,
    borderColor: Color.extendedWhite,
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
    opacity: 0.4,
    right: "0%",
  },
  capacity: {
    height: "64.71%",
    width: "73.99%",
    top: "17.65%",
    right: "17.79%",
    bottom: "17.65%",
    left: "8.22%",
    borderRadius: 1,
    position: "absolute",
    backgroundColor: Color.extendedWhite,
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
    textAlign: "left",
    color: Color.extendedWhite,
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
    position: "absolute",
    width: "100%",
  },
  headerBg: {
    height: "44.31%",
    bottom: "55.69%",
    backgroundColor: "#032048",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  inscrireChild: {
    height: "70.85%",
    top: "30.09%",
    bottom: "-0.95%",
    borderTopLeftRadius: Border.br_21xl,
    borderTopRightRadius: Border.br_21xl,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.extendedWhite,
  },
  logoChild: {
    height: "41.98%",
    width: "25.19%",
    top: "10.27%",
    right: "38.24%",
    bottom: "47.76%",
    left: "36.56%",
  },
  logoItem: {
    height: "29.38%",
    width: "17.64%",
    right: "36.49%",
    bottom: "70.62%",
    left: "45.87%",
    top: "0%",
  },
  find: {
    color: Color.colorDarkslateblue_100,
  },
  smart: {
    color: Color.colorGold,
  },
  findsmart: {
    top: "52.11%",
    left: "-0.88%",
    fontWeight: "800",
    fontFamily: FontFamily.robotoBlack,
    textAlign: "center",
    fontSize: FontSize.size_13xl,
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
  fi1077063Icon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  nomPrenom: {
    color: Color.colorGray_100,
    marginLeft: 12,
    alignSelf: "stretch",
    flex: 1,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    textAlign: "left",
  },
  input: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xl,
    borderColor: Color.colorAliceblue,
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.colorWhitesmoke,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_13xl,
    alignSelf: "stretch",
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    overflow: "hidden",
    flex: 1,
  },
  inputShadowBox: {
    marginTop: 16,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xl,
    borderColor: Color.colorAliceblue,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_13xl,
    alignSelf: "stretch",
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    overflow: "hidden",
    flex: 1,
  },
  sinscrire1: {
    fontSize: 20,
    lineHeight: 24,
    textAlign: "center",
    color: Color.extendedWhite,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  input4: {
    backgroundColor: Color.colorGold,
    padding: Padding.p_base,
    marginTop: 24,
    borderRadius: Border.br_13xl,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Color.colorGold,
    borderStyle: "solid",
    overflow: "hidden",
  },
  div: {
    height: "82.15%",
    top: "17.85%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  login: {
    textAlign: "center",
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    color: Color.extendedWhite,
  },
  register: {
    fontWeight: "500",
    fontFamily: FontFamily.textSmLeading5FontMedium,
    color: "#2c2c2c",
    textAlign: "center",
  },
  tabButton1: {
    borderColor: Color.colorDarkslateblue_100,
    marginLeft: 10,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.extendedWhite,
  },
  tab: {
    height: "12.71%",
    bottom: "87.29%",
    backgroundColor: "#04306e",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 3,
    elevation: 3,
    padding: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_13xl,
    flexDirection: "row",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  divParent: {
    height: "48.46%",
    width: "87.69%",
    top: "50%",
    right: "6.15%",
    bottom: "1.54%",
  },
  inscrire: {
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.extendedWhite,
  },
});

export default Inscrire;
