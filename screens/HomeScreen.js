// HomeScreen.js
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet, View, Text, Button, ImageBackground} from 'react-native';

const HomeScreen = ({ navigation }) => {
  console.log(navigation)
  return (
    <View style={styles.lancement}>
      <ImageBackground source={require('../assets/lancement.jpg')} 
      style={styles.lancement.frameWrapper}>
        <View style={styles.lancement.frame}>
          <View style={styles.lancement.heading}> 
            <Text style={styles.lancement.textWrapper}>
              Rester chez vous et trouvez un prestataire
              pour vos services
            </Text>
            <Text style={styles.lancement.div}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Text>
            <Text style={styles.lancement.btnSuivant} onPress={() => navigation.navigate('Connexion')}>
              <FontAwesome5 name="arrow-right" size={30} style={styles.lancement.icon}/>
            </Text>
          </View>
          
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
    lancement: {
      backgroundColor: 'transparent',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      frameWrapper: {
        flex: 1,
        resizeMode: 'cover',
        height: '844px',
        width: '390px'
      },
      frame: {
        height: '214px',
        left: '26px',
        position: 'relative',
        top: '595px',
        width: '338px'
      },
      heading : {
        alignItems: 'flex-start',
        display: 'inline-flex',
        flexDirection: 'column',
        gap: 10,
        left: 0,
        position: 'absolute',
        top: 500,
        padding: 20
      },
      
      textWrapper: {
        color: '#fff',
        // fontFamily: 'Roboto-Bold',
        fontSize: 40,
        fontWeight: 700,
        letterSpacing: 0,
        position: 'relative',
        width: '338px'
      },

      btnSuivant: {
        backgroundColor: '#f6ec67',
        borderRadius: 7,
        height: 50,
        left:320,
        position: 'absolute',
        top: 220,
        width: 60,
        alignItems: 'center',
        paddingTop: 14,
        paddingLeft: 20
      },

      icon: {
        color: '#fff',
        position: 'absolute',
        top: 50,
        left: 20, 
      },
      div: {
        color: '#94a3b8'
      }


    },

  });

export default HomeScreen;
