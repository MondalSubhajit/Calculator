import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View} from 'react-native';
import {addDigit} from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
/*
  This app is a dumb component which has no brain.
  We will use the smart components in this dumb component.
*/

// () represents the function
class Expression extends Component{
    render(){
        return(
            <View style={styles.container}>
                {/* <Text>{"Expression:"}</Text> */}
                <Text style={styles.baseText}>{this.props.calculate.expression}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 5
    },
    baseText:{
        fontFamily: 'Cochin',
        fontSize: 20,
        fontWeight: 'bold',
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

export default connect(mapStateToProps, matchDispatchToProps)(Expression);