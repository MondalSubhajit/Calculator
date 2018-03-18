import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View,TouchableHighlight,Dimensions} from 'react-native';
import {clear,equals,addDigit} from '../actions/index';
// import {del} from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
/*
  This app is a dumb component which has no brain.
  We will use the smart components in this dumb component.
*/

// () represents the function
class Clear extends Component{
  constructor(props){
    super(props);
    this.clearLast = this.clearLast.bind(this);
  }

  clearLast(expString){
    debugger;
    console.log("clearing...");
    let trimmedStringExp = expString.trim();

    // if already empty
    if(trimmedStringExp.length == 0) return false;

    let expArr = expString.split(" ");
    let token = expArr[expArr.length-1];

    // if expression string has one character
    if(trimmedStringExp.length == 1){
      this.props.addDigit("");
      return;
    }

    //else if expression string has one character
    if(token.trim()==""){
      token = expArr[expArr.length-2];
      expArr.pop();
    }else{
      token = expArr[expArr.length-1];
    }    
    token = token.trim();
    if(token.length>1){
      expArr[expArr.length-1] = token.substring(0, token.length - 1);
    }else{
      expArr.pop();
    }

    //while joining check if the last element is not a digit append a space to it at end
    let lastElem = expArr[expArr.length-1];
    if(isNaN(lastElem.trim())){
      expArr[expArr.length-1] = lastElem+" ";
    }

    expString = expArr.join(" ");
    this.props.addDigit(expString);
  }

  render(){
    return(
    <View>
      {/* <Text
        onPress={()=>this.clearLast(this.props.calculate.expression)}
        onLongPress={()=>this.props.clear()}>{"Clear"}</Text> */}
        <TouchableHighlight
        onPress={()=>this.clearLast(this.props.calculate.expression)}
        /* onLongPress={()=>this.props.clear()} */
        underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>{" ← "}</Text>
          </View>
        </TouchableHighlight>
    </View>
    )
  }
}

const styles = StyleSheet.create({
    button: {
      // marginBottom: 30,
      width: Dimensions.get('window').width/4,
      height: Dimensions.get('window').width/4,
      justifyContent: "center",
      alignItems: 'center',
      // borderRadius:2,
      backgroundColor: '#8b7c1c'
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
    return bindActionCreators({equals: equals,clear: clear, addDigit: addDigit}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Clear);