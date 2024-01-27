import React from "react";
import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet, View, Text, Button, ImageBackground} from 'react-native';

export const RegisterScreen = () => {
  return (
    <div className="inscrire">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="header-BG">
            <div className="overlap-2">
              <div className="ellipse" />
              <div className="ellipse-2" />
              <img className="icon" alt="Icon" src="icon.svg" />
              <div className="heading">
                <div className="text-wrapper-2">S’inscrire</div>
                <div className="text-wrapper-3">Veuillez vous inscrire</div>
              </div>
            </div>
          </div>
          <div className="rectangle" />
          <div className="logo">
            <div className="overlap-3">
              <div className="overlap-4">
                <div className="ellipse-3" />
                <div className="ellipse-4" />
              </div>
              <p className="FINDSMART">
                <span className="span">FIND</span>
                <span className="text-wrapper-4">SMART</span>
              </p>
            </div>
          </div>
          <div className="frame-2">
            <div className="div-2">
              <div className="email-pass">
                <div className="input">
                  <img className="fi" alt="Fi" src="fi-1077063.svg" />
                  <div className="text-wrapper-5">Nom &amp; Prenom</div>
                </div>
                <div className="input">
                  <img className="fi" alt="Fi" src="fi-646094.svg" />
                  <input className="email-ID" placeholder="Email-ID" type="email" />
                </div>
                <div className="input">
                  <img className="fi" alt="Fi" src="fi-2889676.svg" />
                  <div className="text-wrapper-5">Password</div>
                </div>
                <div className="input">
                  <img className="fi" alt="Fi" src="fi-159832.svg" />
                  <div className="text-wrapper-5">Phone No.</div>
                </div>
              </div>
              <div className="div-wrapper">
                <div className="text-wrapper-6">S’inscrire</div>
              </div>
            </div>
            <div className="tab">
              <button className="tab-button">
                <div className="text-wrapper-7">Login</div>
              </button>
              <button className="button">
                <div className="text-wrapper-8">Register</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
