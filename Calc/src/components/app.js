import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View,Dimensions} from 'react-native';
// import Add from '../containers/add';
import Plus from './plus';
import Minus from './minus';
import Multiply from './multiply';
import Divide from './divide';
import One from './number_components/1';
import Two from './/number_components/2';
import Three from './number_components/3';
import Four from './number_components/4';
import Five from './number_components/5';
import Six from './number_components/6';
import Seven from './number_components/7';
import Eight from './number_components/8';
import Nine from './number_components/9';
import Zero from './number_components/0';
import Result from './result';
import Equals from './equals';
import Clear from './clear';
import ExpressionString from './expression';

/*
  This app is a dumb component which has no brain.
  We will use the smart components in this dumb component.
*/

// () represents the function
const App = () =>(
    <View style={styles.container}>
      <View style={styles.inputBox}>
          <ExpressionString/>
          <Result/>
      </View>
      <View style={styles.inputContainer}>
          {/* <View style={styles.row}> */}
          <Seven /><Eight /><Nine /><Clear/>
          {/* </View> */}
          {/* <View style={styles.row}> */}
          <Four /><Five /><Six /><Divide/>
          {/* </View> */}
          {/* <View style={styles.row}> */}
          <One /><Two /><Three /><Multiply/>
          {/* </View> */}
          {/* <View style={styles.row}> */}
          <Minus/><Zero /><Plus/><Equals/>
          {/* </View> */}
      </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      // alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    inputContainer:{
      flexDirection: 'row',
      flexWrap: "wrap",
    },
    inputBox:{
      height: Dimensions.get('window').height/5,
      width:Dimensions.get('window').width,
    },
    row:{
      
    }
  });
  
  export default App;