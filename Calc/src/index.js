import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View} from 'react-native';
import { createStore } from "redux";
import allReducers from './reducers';
//new root component for our app
import {Provider} from 'react-redux';
import App from './components/app';

/* 
 all of the data for this entire application
 determined by reducers{ function that says what 
 data we are suppose to store}
    allReducers: represents all the reducers and put
    in the store
 */
const store = createStore(allReducers);


// take the store and put it into our components
export default class Calculator extends Component {
  render() {
    return (
      <View style={styles.container}>
      {/* feeding the store data to our app */}
        <Provider store={store}>
            <App />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
