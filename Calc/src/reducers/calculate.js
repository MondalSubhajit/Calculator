// reducer is just a little chuck of memory for the page whether its
// a list of user, selected user
var INITIAL_STATE = {
    expression: "",
    result : 0
}

export default function (state=INITIAL_STATE, action){
    switch(action.type){
        case "PLUS":
        debugger;
            return {...state, expression: action.payload};
            break;
        case "MINUS":
        debugger;
        return {...state, expression: action.payload};
            break;
        case "DIVIDE":
        debugger;
        return {...state, expression: action.payload};
            break;
        case "MULTIPLY":
        return {...state, expression: action.payload};
        debugger;
            break;
        case "EQUALS":
        debugger;
            return {...state, result: action.payload};
            break;
        case "DIGIT":
        return {...state, expression: action.payload};
            break;
        case "CLEAR":
            return {...state=INITIAL_STATE};
        case "DEL":
            return {...state=INITIAL_STATE};
        default: return {...state}
    }
}

function stackPop(collection){
}

function stackPush(collection, item){
    
}
function clearStack(collection){

}
function isStackEmpty(collection){

}
function printStack(collection){

}