import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View,TouchableHighlight,Dimensions} from 'react-native';
import {addDigit} from '../../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
/*
  This app is a dumb component which has no brain.
  We will use the smart components in this dumb component.
*/

// () represents the function
class Eight extends Component{
  render(){
    return(
    <View>
      {/* <Text onPress={()=>this.props.addDigit(this.props.calculate.expression + ""+ 8)}>{"Eight"}</Text> */}
      <TouchableHighlight onPress={()=>this.props.addDigit(this.props.calculate.expression + ""+ 8)} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>{"8"}</Text>
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
      backgroundColor: '#1a1a1a'
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
    return bindActionCreators({addDigit: addDigit}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Eight);