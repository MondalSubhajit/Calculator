import React, {Component} from 'react';
import {Platform,StyleSheet,Text,View} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';

class Add extends Component{
    constructor(props){
        super(props);
        this.createCalculatorInput = this.createCalculatorInput.bind(this);
    }

    createCalculatorInput(){
        // console.log(this.props);
        return this.props.calculator.map((user)=>{
            console.log(user);
            return (
                <View key={user.id}>
                <Text
                 onPress={()=>this.props.selectUser(user)}>
                {JSON.stringify(user)}</Text>
                </View>
            );
        });
    }
    
    render(){
        return (
            <View>
                <Text>{"+"}</Text>
                <View>{this.createCalculatorInput()}</View>
            </View>
        );
    }
}

/**
  takes a piece of our store and passes it in to this component as a property
 */
function mapStateToProps(state){
    return {
        calculator: state.calculator
    };
}

/*
    means call a function telling something happened
*/
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser: selectUser}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Add);