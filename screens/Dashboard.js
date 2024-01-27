import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Color, Padding, FontFamily, FontSize, Border } from "../GlobalStyles";
import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";


const Dashboard = () => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem('jwtToken'); // Remplacez par votre token Bearer
        const response = await axios.get('https://find-smart.net/api/artisans-top', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setData(response.data);
      } catch (err) {
        setError(err);
      }
    };

    // fetchData();
  }, [])
  return (

    
    <View style={styles.home}>
      <View style={[styles.headerBg, styles.headerBgBg]}>
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
       
        <View style={[styles.ellipseParent, styles.parentPosition]}>
          <Image
            style={[styles.frameChild, styles.childPosition, { borderRadius: 20 }]}
            contentFit="cover"
            source={require("../assets/ellipse-homme.png")}
          />
          <Image
            style={[styles.bellIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/bell.png")}
          />
        </View>
      </View>
      <View style={styles.navBottom}>
        <View style={[styles.bottomNav, styles.bottomPosition]} />
        <View style={[styles.menuList, styles.menuListPosition]}>
          <View style={[styles.octiconhome24, styles.octiconhome24SpaceBlock]}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
            {/* <Text style={styles.home1}>Home</Text> */}
          </View>
          <View style={[styles.iontimeOutline, styles.vectorIcon2Position]}>
            <Image
              style={styles.vectorIcon1}
              contentFit="cover"
              source={require("../assets/vector1.png")}
            />
            <Image
              style={[styles.vectorIcon2, styles.vectorIcon2Position]}
              contentFit="cover"
              source={require("../assets/vector2.png")}
            />
            {/* <Text style={[styles.history, styles.searchTypo]}>History</Text> */}
          </View>
          <View style={[styles.basilsearchOutline, styles.outlinePosition]}>
            <Image
              style={styles.vectorIcon3}
              contentFit="cover"
              source={require("../assets/vector3.png")}
            />
            {/* <Text style={styles.searchTypo}>Search</Text> */}
          </View>
          <View style={[styles.iconamoonprofileLight, styles.outlinePosition]}>
            <Image
              style={styles.groupIcon}
              contentFit="cover"
              source={require("../assets/group.png")}
            />
            {/* <Text style={styles.profile}>Profile</Text> */}
          </View>
        </View>
        <View style={[styles.navBottomChild, styles.bottomPosition]} />
        <Image
          style={[styles.navBottomItem, styles.iconItemLayout]}
          contentFit="cover"
          source={require("../assets/frame-33.png")}
        />
      </View>
      <View style={[styles.homeChild, styles.headerBgPosition]} />
      <Pressable
        style={[styles.listRecommanParent, styles.parentPosition]}
        onPress={() => {}}
      >
        
        <View style={[styles.listRecomman1, styles.listPosition]}>
          <View style={[styles.listRecommanChild, styles.homeItemLayout, {borderRadius: 20}]} />
          <Text style={[styles.cuisinire, styles.cuisinireTypo]}>
            Cuisinière
          </Text>
          <Text style={[styles.natachaKouadio, styles.cuisinireTypo]}>
            Natacha Kouadio
          </Text>
          <Image
            style={[styles.listRecommanItem, styles.iconItemLayout, {borderRadius: 20}]}
            contentFit="cover"
            source={require("../assets/ellipse-homme.png")}
          />
          <View style={styles.etoile}>
            <View style={[styles.etoileItem, styles.etoileBg]} />
            <Text style={[styles.text2, styles.textTypo]}>21</Text>
            <Text style={[styles.fh1, styles.textTypo]}>5 000f/h</Text>
            <Image
              style={[styles.starFilledIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/star-filled.png")}
            />
          </View>
        </View>
        <View style={[styles.listRecomman2, styles.listPosition]}>
          <View style={[styles.listRecommanChild, styles.homeItemLayout, {borderRadius: 20}]} />
          <Text style={[styles.nounou, styles.nounouTypo]}>Nounou</Text>
          <Text style={[styles.mariamCoulibaly, styles.nounouTypo]}>
            Mariam Coulibaly
          </Text>
          <Image
            style={[styles.listRecommanItem, styles.iconItemLayout, {borderRadius: 20}]}
            contentFit="cover"
            source={require("../assets/ellipse-fille.png")}
          />
          <View style={styles.etoile}>
            <View style={[styles.etoileItem, styles.etoileBg]} />
            <Text style={[styles.text3, styles.fh2Typo]}>45</Text>
            <Text style={[styles.fh2, styles.fh2Typo]}>3 000f/h</Text>
            <Image
              style={[styles.starFilledIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/star-filled.png")}
            />
          </View>
        </View>
        <View style={[styles.listRecomman3, styles.listPosition]}>
          <View style={[styles.listRecommanChild, styles.homeItemLayout, {borderRadius: 20}]} />
          <Text style={[styles.electricien, styles.jeanJackTypo]}>
            Electricien
          </Text>
          <Text style={[styles.jeanJack, styles.jeanJackTypo]}>Jean JACK</Text>
          <Image
            style={[styles.listRecommanItem, styles.iconItemLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-girl.png")}
          />
          <View style={styles.etoile}>
            <View style={[styles.etoileItem, styles.etoileBg]} />
            <Text style={[styles.text1, styles.textTypo]}>21</Text>
            <Text style={[styles.fh, styles.textTypo]}>5 000f/h</Text>
            <Image
              style={[styles.starFilledIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/star-filled.png")}
            />
          </View>
        </View>
      </Pressable>
      <View style={[styles.barreRecherche, styles.parentPosition]}>
        <View style={[styles.searchfield, styles.menuListPosition]}>
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../assets/iconsearch.png")}
          />
          <Text style={[styles.placeholder, styles.jardinierTypo]}>
            Recherche
          </Text>
        </View>
      </View>
      <Image
        style={[styles.homeItem, styles.homeItemLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-117.png")}
      />
      <Text style={[styles.recommandation, styles.jeanJackClr]}>
        Recommandation
      </Text>
      <Text style={[styles.voirTout, styles.textTypo]}>Voir tout</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBgBg: {
    backgroundColor: Color.colorDarkslateblue_200,
    overflow: "hidden",
  },
  headerLayout: {
    opacity: 0.5,
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  headerBgPosition: {
    left: "0%",
    right: "0%",
    width: "100%",
  },
  borderPosition: {
    borderWidth: 1,
    borderStyle: "solid",
    height: "100%",
    bottom: "0%",
    left: "0%",
    top: "0%",
  },
  iconItemLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  parentPosition: {
    left: "6.15%",
    position: "absolute",
  },
  childPosition: {
    left: 0,
    top: 0,
  },
  iconPosition: {
    height: "100%",
    bottom: "0%",
    top: "0%",
  },
  bottomPosition: {
    left: "0.51%",
    right: "0.25%",
    width: "99.24%",
    backgroundColor: Color.colorDarkslateblue_200,
    position: "absolute",
  },
  menuListPosition: {
    alignItems: "center",
    flexDirection: "row",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  octiconhome24SpaceBlock: {
    paddingVertical: Padding.p_12xs,
    overflow: "hidden",
  },
  vectorIcon2Position: {
    zIndex: 1,
    position: "absolute",
    overflow: "hidden",
  },
  searchTypo: {
    width: 25,
    textAlign: "center",
    marginTop: 1,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 10,
    fontSize: FontSize.size_6xs,
    color: Color.extendedWhite,
  },
  outlinePosition: {
    bottom: "14.29%",
    top: "14.29%",
    width: "18.78%",
    height: "71.43%",
    justifyContent: "center",
    alignItems: "center",
  },
  listPosition: {
    height: "22.83%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  homeItemLayout: {
    borderRadius: Border.br_3xl,
    position: "absolute",
  },
  nounouClr: {
    color: Color.colorLightslategray,
    fontSize: FontSize.size_base,
  },
  jeanJackClr: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_lg,
  },
  etoileBg: {
    backgroundColor: Color.colorDarkslateblue_100,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorGold,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    position: "absolute",
  },
  cuisinireTypo: {
    width: "64.81%",
    fontWeight: "700",
    left: "29.03%",
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    position: "absolute",
  },
  nounouTypo: {
    left: 99,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    position: "absolute",
  },
  fh2Typo: {
    top: 3,
    color: Color.colorGold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoBold,
    position: "absolute",
  },
  jeanJackTypo: {
    width: "63.64%",
    fontWeight: "700",
    left: "29.03%",
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    position: "absolute",
  },
  jardinierTypo: {
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
  },
  headerBgChild: {
    height: "486.11%",
    width: "179.49%",
    top: "-177.78%",
    right: "10.26%",
    bottom: "-208.33%",
    left: "-89.74%",
  },
  headerBgItem: {
    height: "341.67%",
    width: "126.15%",
    top: "-105.56%",
    right: "36.92%",
    bottom: "-136.11%",
    left: "-63.08%",
  },
  barreReseauheureChild: {
    height: 47,
    top: 0,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  border: {
    width: "90.43%",
    right: "9.57%",
    borderRadius: 3,
    borderColor: Color.extendedWhite,
    opacity: 0.35,
    position: "absolute",
  },
  capIcon: {
    height: "35.29%",
    width: "5.46%",
    top: "32.35%",
    bottom: "32.35%",
    left: "94.54%",
    opacity: 0.4,
    right: "0%",
    position: "absolute",
    overflow: "hidden",
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
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  text: {
    width: "48.27%",
    fontWeight: "600",
    textAlign: "left",
    color: Color.extendedWhite,
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.size_smi,
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
    height: "32.64%",
    bottom: "67.36%",
    top: "0%",
    position: "absolute",
  },
  frameChild: {
    width: 32,
    height: 32,
    position: "absolute",
  },
  bellIcon: {
    width: "9.33%",
    left: "90.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  ellipseParent: {
    height: "22.22%",
    width: "87.95%",
    top: "38.89%",
    right: "5.9%",
    bottom: "38.89%"
  },
  headerBg: {
    height: "17.06%",
    bottom: "82.94%",
    left: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    position: "absolute",
  },
  bottomNav: {
    height: "100%",
    bottom: "0%",
    top: "0%",
  },
  vectorIcon: {
    height: 19,
    width: 18,
  },
  home1: {
    width: 21,
    marginTop: 1,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 10,
    fontSize: FontSize.size_6xs,
    textAlign: "left",
    color: Color.extendedWhite,
  },
  octiconhome24: {
    width: 74,
    height: 30,
    zIndex: 0,
    paddingHorizontal: Padding.p_10xs,
    justifyContent: "center",
    paddingVertical: Padding.p_12xs,
    alignItems: "center",
  },
  vectorIcon1: {
    height: 18,
    width: 18,
    zIndex: 0,
  },
  vectorIcon2: {
    height: "20%",
    width: "8.13%",
    top: "17.14%",
    right: "41.73%",
    bottom: "62.86%",
    left: "50.14%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  history: {
    zIndex: 2,
  },
  iontimeOutline: {
    right: "18.88%",
    left: "62.34%",
    paddingVertical: 0,
    bottom: "14.29%",
    top: "14.29%",
    width: "18.78%",
    height: "71.43%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Padding.p_10xs,
  },
  vectorIcon3: {
    height: 17,
    width: 17,
  },
  basilsearchOutline: {
    right: "62.39%",
    left: "18.83%",
    zIndex: 2,
    paddingVertical: Padding.p_12xs,
    overflow: "hidden",
    paddingHorizontal: Padding.p_10xs,
    position: "absolute",
  },
  groupIcon: {
    width: 16,
    height: 16,
  },
  profile: {
    width: 22,
    marginTop: 2,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 10,
    fontSize: FontSize.size_6xs,
    color: Color.extendedWhite,
  },
  iconamoonprofileLight: {
    right: "0.05%",
    left: "81.17%",
    paddingHorizontal: 4,
    zIndex: 3,
    paddingVertical: Padding.p_12xs,
    overflow: "hidden",
    position: "absolute",
  },
  menuList: {
    height: "28.97%",
    top: "60%",
    bottom: "11.03%",
    paddingHorizontal: 0,
    paddingVertical: 6,
    backgroundColor: Color.colorDarkslateblue_200,
    overflow: "hidden",
  },
  navBottomChild: {
    height: "48.97%",
    top: "11.03%",
    bottom: "40%",
  },
  navBottomItem: {
    height: "51.72%",
    width: "19.08%",
    top: "33.79%",
    right: "40.46%",
    bottom: "14.48%",
    left: "40.46%",
    position: "absolute",
    overflow: "hidden",
  },
  navBottom: {
    height: "17.18%",
    width: "100.77%",
    top: "82.82%",
    right: "-0.26%",
    left: "-0.51%",
    bottom: "0%",
    position: "absolute",
  },
  homeChild: {
    height: "75.24%",
    top: "13.15%",
    bottom: "11.61%",
    borderRadius: 40,
    position: "absolute",
    backgroundColor: Color.extendedWhite,
  },
  listRecommanChild: {
    borderColor: Color.colorDarkslateblue_100,
    borderWidth: 1,
    borderStyle: "solid",
    height: "100%",
    bottom: "0%",
    left: "0%",
    top: "0%",
    right: "0%",
    width: "100%",
  },
  jardinier: {
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    left: "29.03%",
    width: "64.52%",
    position: "absolute",
    top: "31.65%",
    fontSize: FontSize.size_base,
  },
  kassiNoel: {
    top: "5.06%",
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    left: "29.03%",
    width: "64.52%",
    position: "absolute",
  },
  listRecommanItem: {
    height: "69.62%",
    width: "16.13%",
    top: "15.19%",
    right: "78.89%",
    bottom: "15.19%",
    left: "4.99%",
    position: "absolute",
    overflow: "hidden",
  },
  etoileChild: {
    width: 171,
    height: 25,
    left: 0,
    top: 0,
  },
  text1: {
    width: "20.47%",
    left: "19.3%",
    color: Color.colorGold,
    top: "12%",
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  fh: {
    width: "52.05%",
    left: "39.77%",
    textAlign: "right",
    top: "12%",
    color: Color.colorGold,
    fontSize: FontSize.size_base,
  },
  starFilledIcon: {
    width: "9.36%",
    right: "80.7%",
    left: "9.94%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  etoile: {
    height: "31.65%",
    width: "50.15%",
    top: "59.49%",
    right: "22.87%",
    bottom: "8.86%",
    left: "26.98%",
    position: "absolute",
  },
  listRecomman: {
    top: "77.17%",
    bottom: "0%",
  },
  cuisinire: {
    color: Color.colorLightslategray,
    fontSize: FontSize.size_base,
    top: "31.65%",
  },
  natachaKouadio: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_lg,
    top: "5.06%",
  },
  etoileItem: {
    height: "100%",
    bottom: "0%",
    top: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  text2: {
    width: "18.13%",
    left: "19.3%",
    color: Color.colorGold,
    top: "12%",
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  fh1: {
    width: "54.39%",
    left: "37.43%",
    textAlign: "right",
    top: "12%",
    color: Color.colorGold,
    fontSize: FontSize.size_base,
  },
  listRecomman1: {
    top: "51.45%",
    bottom: "25.72%",
  },
  nounou: {
    top: 25,
    width: 226,
    color: Color.colorLightslategray,
    fontSize: FontSize.size_base,
  },
  mariamCoulibaly: {
    top: 4,
    width: 217,
    color: Color.colorGray_100,
    fontSize: FontSize.size_lg,
  },
  text3: {
    left: 33,
    width: 27,
    textAlign: "left",
  },
  fh2: {
    left: 67,
    width: 90,
    textAlign: "right",
  },
  listRecomman2: {
    top: "25.72%",
    bottom: "51.45%",
  },
  electricien: {
    color: Color.colorLightslategray,
    fontSize: FontSize.size_base,
    top: "31.65%",
  },
  jeanJack: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_lg,
    top: "5.06%",
  },
  listRecomman3: {
    bottom: "77.17%",
    top: "0%",
  },
  listRecommanParent: {
    height: "41%",
    width: "87.44%",
    top: "46.33%",
    bottom: "12.68%",
    right: "6.41%",
  },
  placeholder: {
    fontSize: FontSize.size_mid,
    lineHeight: 22,
    color: "rgba(44, 44, 44, 0.5)",
    marginLeft: 6,
    flex: 1,
  },
  searchfield: {
    borderRadius: Border.br_mid,
    backgroundColor: "rgba(239, 239, 239, 0.8)",
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_6xs,
    height: "100%",
    bottom: "0%",
    top: "0%",
  },
  barreRecherche: {
    height: "4.27%",
    width: "87.69%",
    top: "17.06%",
    right: "6.15%",
    bottom: "78.67%",
  },
  homeItem: {
    height: "17.77%",
    width: "87.18%",
    top: "23.34%",
    bottom: "58.89%",
    left: "6.41%",
    right: "6.41%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  recommandation: {
    width: "56.92%",
    top: "42.65%",
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    left: "6.15%",
    position: "absolute",
  },
  voirTout: {
    width: "22.82%",
    top: "43.25%",
    left: "70%",
    textAlign: "right",
    color: Color.colorGold,
    fontSize: FontSize.size_smi,
  },
  home: {
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.extendedWhite,
  },
});

export default Dashboard;
