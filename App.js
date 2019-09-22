
/**
 * Store - holds our state - THERE IS ONLY ONE STATE 
 * Action - State can be modified using actions - SIMPLE OBJECTS 
 * Dispatcher - Action needs to be sent by someone - known as dispatching an action
 * Reducer - receives the action and modifies the state to give us a new state 
 *  - pure functions 
 *  - only mandatory argument is the 'type' 
 * Subscriber - listens for state change to update the ui  
 */


import React from 'react';
import { Platform,View,Text,StyleSheet,TouchableOpacity } from 'react-native';
import { AppLoading, Font } from 'expo';
import { createStore } from 'redux'
import CounterApp from './src/CounterApp'
import { Provider } from 'react-redux'

const initialState = {
    counter: 0
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREASE_COUNTER':
            return { counter: state.counter + 1 }
        case 'DECREASE_COUNTER':
            return { counter: state.counter - 1 }
    }
    return state
}

 const store = createStore(reducer)

export default class App extends React.Component {
 /* constructor(){
    super()

    this.state = {
      counter:0
    }
}
 */
  render() {
    
      
        return (
            <Provider store={store}>
                <CounterApp />
            </Provider>
        );
      
      }
    
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});