import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View,TouchableHighlight,Dimensions} from 'react-native';
import {equals} from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
/*
  This app is a dumb component which has no brain.
  We will use the smart components in this dumb component.
*/

// () represents the function
class Equals extends Component{
  constructor(props){
    super(props);
    this.evaluate = this.evaluate.bind(this);
    this.calByPostFix = this.calByPostFix.bind(this);
    this.singleOp = this.singleOp.bind(this);
  }

singleOp(arg0, arg1, op){
  arg0 = parseFloat(arg0);
  arg1 = parseFloat(arg1);
  switch(op){
    case '×':
      return (arg0 * arg1);
      break;
    case '÷':
      return (arg0 / arg1);
      break;
    case '+':
      return (arg0 + arg1);
      break;
    case '-':
      return (arg0 - arg1);
      break;
  } 
}

precendenceCheck(currentOp, topOp){
  let operatorPrecedence = ["×", "÷", "+", "-"];
  //current op is bigger
  if((currentOp == "×" || currentOp == "÷") && (topOp == "+" || topOp == "-")){
    return 1;
  }
  //current op is smaller
  else if((topOp == "×" || topOp == "÷") && (currentOp == "+" || currentOp == "-")){
    return -1;
  }
  //current op is of same precedence
  else{
    return 0;
  }
}

calByPostFix(expArr){
  let opPos = -1;
  let operatorStack = [];
  let operandStack = [];
  let precedence = 1;
  let temp = [];

  if(expArr.length > 1){
    for(var i =0; i< expArr.length; i++){
      var element = expArr[i];
      opPos = opPos + 1;
      if(!isNaN(element)){
        temp.push("Step:"+i+"; "+i+"th element is a no. "+element);
        operandStack.push(element);
      }else{
        //check if the operator stack contains higher operator on top ? cal : push to operator stack
        if(operatorStack.length == 0){
          //if operator stack is empty
          operatorStack.push(element);
          temp.push("Step:"+i+"; "+"operator stack was empty:"+JSON.stringify(operatorStack));
        }else{
          //if operator stack not empty check the precendence of the current opertor over top operator
          var firstOp = operatorStack[operatorStack.length-1];
          precedence = this.precendenceCheck(element,firstOp);
          temp.push("Step:"+i+"; "+"operatorStack stack has vals, current op:"+element+", top op:"+firstOp+", operator Stack"+JSON.stringify(operatorStack));
          if(precedence == 1){
            temp.push("Step:"+i+"; "+"operatorStack stack has vals, current op:"+element+", top op:"+firstOp+", precendence:"+precedence);
            operatorStack.push(element);
          }else{
            temp.push("Step:"+i+"; "+"operand stack has vals, current op:"+element+", top op:"+firstOp+", precendence:"+precedence);
            /*While the operator stack is not empty, and the top thing on the
            operator stack has the same or greater precedence as thisOp*/

            //Pop the operator from the operator stack.
            var op = operatorStack.pop();
            operatorStack.push(element);
            temp.push("Step:"+i+"operator stack is popped: "+op);
            //Pop the value stack twice, getting two operands.
            var op2 = operandStack.pop();
            temp.push("Step:"+i+"operand stack is popped: "+op2);
            var op1 = operandStack.pop();
            temp.push("Step:"+i+"operand stack is popped: "+op1);

            //Apply the operator to the operands, in the correct order.
            var result = this.singleOp(op1, op2, op);
            temp.push("Step:"+i+"Result of "+op1+" "+op+" "+op2);
            operandStack.push(result);
            temp.push("Step:"+i+"; "+"operand pushed:"+JSON.stringify(operandStack));
          }
        }
      }
    }

    while(opPos == expArr.length-1 && operandStack.length > 1){
      var op = operatorStack.pop();
      temp.push("Step:"+i+"operator stack is popped: "+op);
      var dig2 = operandStack.pop();
      temp.push("Step:"+i+"operand stack is popped: "+dig2);
      var dig1 = operandStack.pop();
      temp.push("Step:"+i+"operand stack is popped: "+dig1);
      var result = this.singleOp(dig1, dig2, op);
      temp.push("Step:"+i+"Result of "+dig1+" "+op+" "+dig2);
      operandStack.push(result);
      temp.push("Step:"+i+"; "+"operand pushed:"+JSON.stringify(operandStack));
    }

    // While the operator stack is not empty
    this.props.equals(operandStack[0]);
    console.log(temp);
    console.log(operandStack);
  }
}

evaluate(expressionString){
  debugger;
  let expArr = expressionString.split(" ");
  //now evaluate from the array
  // create a postfix from the expression string and calculate
  let lastElem = expArr[expArr.length-1];
  if(lastElem.length > 0 && !isNaN(lastElem)){
    let result = this.calByPostFix(expArr);
  }
  // this.props.equals(JSON.stringify(result));
  // this.props.equals(JSON.stringify(expArr));
}

  render(){
    return(
    <View>
      {/* <Text onPress={()=>this.evaluate(this.props.calculate.expression)}>{"Equals"}</Text> */}
      <TouchableHighlight onPress={()=>this.evaluate(this.props.calculate.expression)} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>{" = "}</Text>
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
      backgroundColor: '#20B2AA'
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
    return bindActionCreators({equals: equals}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Equals);