// actions is type:payload, the data returned is the action
//selectUser is an action creator with action USER_CLICKED
export const selectUser = (user) => {
    console.log("clicked", user.first);
    return {
        type: "USER_CLICKED",
        payload: user
    }
}

export const plus = (item) =>{
    return {
        type: 'PLUS',
        payload: item
    }
}


export const minus = (item) =>{
    return {
        type: 'MINUS',
        payload: item
    }
}


export const multiply = (item) =>{
    return {
        type: 'MULTIPLY',
        payload: item
    }
}


export const divide = (item) =>{
    return {
        type: 'DIVIDE',
        payload: item
    }
}


export const equals = (result) =>{
    return {
        type: 'EQUALS',
        payload: result
    }
}

export const clear = () =>{
    return {
        type: 'CLEAR',
    }
}

export const del = () =>{
    return {
        type: 'DEL',
    }
}
export const addDigit = (digitVal) =>{
    return {
        type: 'DIGIT',
        payload: digitVal
    }
}

export const changeSign = (sign) =>{
    return {
        type: 'SIGN',
        payload: sign
    }
}