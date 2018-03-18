import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View} from 'react-native';
import {plus} from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
/*
  This app is a dumb component which has no brain.
  We will use the smart components in this dumb component.
*/

// () represents the function
class Result extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>{this.props.calculate.result}</Text>
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
      alignItems :"flex-end",
      padding: 5
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
    return bindActionCreators({plus: plus}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Result);