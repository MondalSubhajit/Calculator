import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View,TouchableHighlight,Dimensions} from 'react-native';
import {multiply} from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
/*
  This app is a dumb component which has no brain.
  We will use the smart components in this dumb component.
*/

// () represents the function
class Multiply extends Component{
  constructor(props){
    super(props);
    this._onPress = this._onPress.bind(this);
  }
  _onPress(){
    debugger;
    let operatorStack = this.props.calculate.expression.split(" ");
    if(operatorStack.length != 0){
      let lastElem = operatorStack[operatorStack.length-1];
      if(lastElem.length == 0){
        if(operatorStack[operatorStack.length-2] && isNaN(operatorStack[operatorStack.length-2])){
          operatorStack.pop();
          operatorStack.pop();
          operatorStack.push("× ");
          let expString = operatorStack.join(" ");
          this.props.multiply(expString);
        }
      }else{
        this.props.multiply(this.props.calculate.expression + " × ")
      }
    }    
  }

  render(){
    return(
    <View>
      {/* <Text onPress={()=>this.props.multiply(this.props.calculate.expression + " * ")}>{"Multiply"}</Text> */}
      <TouchableHighlight  onPress={()=>this._onPress()} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>{" × "}</Text>
          </View>
        </TouchableHighlight>
    </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    button: {
      // marginBottom: 30,
      width: Dimensions.get('window').width/4,
      height: Dimensions.get('window').width/4,
      justifyContent: "center",
      alignItems: 'center',
      // borderRadius:2,
      backgroundColor: '#2a2a2a'
    },
    buttonText: {
      padding: 2,
      color: 'white',
      fontSize: 20
    }
  });

/**
  takes a piece of our store and passes it in to this component as a property
 */
function mapStateToProps(state){
    return {
      calculate: state.calculate
    };
}

/*
    means call a function telling something happened
*/
function matchDispatchToProps(dispatch){
    return bindActionCreators({multiply: multiply}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Multiply);