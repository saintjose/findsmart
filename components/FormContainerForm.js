import React from 'react';
import { Image } from "expo-image";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FormContainerForm = ({ navigation }) => {
  // console.log(navigation)
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  const handleLogin = async () => {
    
    try {
      const response = await axios.post('https://find-smart.net/api/login', { password: password, email: email});
      if(response.data.authorization) {
        await AsyncStorage.setItem('jwtToken', response.data.authorization.token);
        await AsyncStorage.setItem('user', JSON.stringify(response.data.user));
        
        navigation.navigate('Dashboard');
      }
      
    } catch (error) {
      alert('Arrr matey! No treasure found. (Invalid credentials)');
    }
  }

  return (
    <View style={styles.divParent}>
      <View style={styles.div}>
        <View style={styles.emailpass}>
          <View style={[styles.input, styles.inputBorder]}>
            <Image
              style={styles.fi646094Icon}
              contentFit="cover"
              source={require("../assets/fi-646094.png")}
            />
            <TextInput onChangeText={onChangeEmail} style={[styles.eMailId, styles.eMailIdTypo]} 
            placeholder="Email" value={email}/>
          </View>
          <View style={[styles.input1, styles.inputSpaceBlock]}>
            <Image
              style={styles.fi646094Icon}
              contentFit="cover"
              source={require("../assets/fi-2889676.png")}
            />
            <TextInput onChangeText={onChangePassword} secureTextEntry={true} style={[styles.eMailId, styles.eMailIdTypo]} value={password} placeholder="Mot de passe"/>
          </View>
          <View style={[styles.input2, styles.inputFlexBox]}>
            <View style={styles.inputFlexBox}>
              <Image
                style={styles.fi646094Icon}
                contentFit="cover"
                source={require("../assets/fi-8924271.png")}
              />
              <Text style={[styles.rememberMe, styles.loginTypo]}>
                Se souvenir de moi
              </Text>
            </View>
            <Text style={[styles.motDePasse, styles.eMailIdTypo]}>
              Mot de passe oublié
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.input4} onPress={handleLogin}>
          <Text style={[styles.connexion, styles.registerClr]}>Connexion</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tab}>
        <View style={[styles.tabButton, styles.tabFlexBox]}>
          <Text style={[styles.login, styles.loginTypo]}>Login</Text>
        </View>
        <Text
          style={[styles.tabButton1, styles.tabFlexBox]}
          onPress={() => navigation.navigate('Inscrire')}
        >
          <Text style={[styles.register, styles.registerClr]}>
            <Text style={styles.register1}>Register</Text>
            <Text style={styles.text}>{` `}</Text>
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputBorder: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xl,
    borderColor: Color.colorAliceblue,
    backgroundColor: Color.colorWhitesmoke,
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_13xl,
  },
  eMailIdTypo: {
    fontWeight: "600",
    fontSize: FontSize.size_sm,
  },
  inputSpaceBlock: {
    marginTop: 16,
    overflow: "hidden",
    width: 342,
  },
  inputFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  loginTypo: {
    color: Color.colorGray_100,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
  },
  registerClr: {
    color: Color.colorWhite,
    textAlign: "center",
  },
  tabFlexBox: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    width: 162,
    borderRadius: Border.br_29xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  fi646094Icon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  eMailId: {
    color: Color.colorGray_200,
    marginLeft: 12,
    fontFamily: FontFamily.robotoBold,
    lineHeight: 20,
  },
  input: {
    overflow: "hidden",
    width: 342,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xl,
    borderColor: Color.colorAliceblue,
    backgroundColor: Color.colorWhitesmoke,
  },
  input1: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xl,
    borderColor: Color.colorAliceblue,
    backgroundColor: Color.colorWhitesmoke,
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_13xl,
    marginTop: 16,
  },
  rememberMe: {
    fontSize: FontSize.size_xs,
    marginLeft: 4,
    lineHeight: 16,
  },
  motDePasse: {
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorGold,
    lineHeight: 16,
  },
  input2: {
    borderRadius: Border.br_base,
    justifyContent: "space-between",
    marginTop: 16,
    overflow: "hidden",
    width: 342,
  },
  emailpass: {
    height: 156,
    alignSelf: "stretch",
  },
  connexion: {
    fontSize: FontSize.size_xl,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
  },
  input4: {
    backgroundColor: Color.colorGold,
    borderColor: Color.colorGold,
    padding: Padding.p_base,
    marginTop: 24,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_13xl,
    alignSelf: "stretch",
  },
  div: {
    marginTop: -77,
    left: "50%",
    top: "50%",
    marginLeft: -171,
    position: "absolute",
  },
  login: {
    width: 133,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
  },
  tabButton: {
    backgroundColor: Color.colorWhite,
    borderColor: Color.colorDarkslateblue_400,
    borderWidth: 1,
    borderStyle: "solid",
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    width: 162,
    borderRadius: Border.br_29xl,
  },
  register1: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
  },
  text: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  register: {
    lineHeight: 20,
    fontSize: FontSize.size_sm,
  },
  tabButton1: {
    marginLeft: 10,
  },
  tab: {
    marginTop: -159,
    backgroundColor: Color.colorDarkslateblue_200,
    padding: Padding.p_9xs,
    flexDirection: "row",
    borderRadius: Border.br_13xl,
    left: "50%",
    top: "50%",
    marginLeft: -171,
    position: "absolute",
  },
  divParent: {
    height: "37.68%",
    width: "87.69%",
    top: "52.61%",
    right: "6.15%",
    bottom: "9.72%",
    left: "6.15%",
    position: "absolute",
  },
});

export default FormContainerForm;
