import { View, Text, useColorScheme } from 'react-native'
import React, { useState, useEffect } from 'react'
import HomeScreen from './components/sreens/HomeScreen'
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,

} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './components/sreens/stackNavigator/AuthStack';
import 'react-native-gesture-handler';
import AuthLoginStack from './components/sreens/stackNavigator/AuthLoginStack';
import {
  ActivityIndicator,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider
} from 'react-native-paper';
import { AuthContext } from './components/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { AppearanceProvider, useColorScheme } from 'react-native-appearance';


const Stack = createNativeStackNavigator();

const App = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [userToken, setUserToken] = useState(null);
  // const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const scheme = useColorScheme();
  const initialLoginState = {

    isLoading: true,
    userName: null,
    userToken: null,
  };

  const CustomDefaultTheme = {

    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    color: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
  }
  const CustomDarkTheme = {

    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    color: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff'
    }
  }

  const themes = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,

        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }

  }


  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async (userName, password) => {
      // setUserToken('dsada');
      // setIsLoading(false);

      let userToken;
      userToken = null;

      if (userName === 'user' && password === 'pass') {
        try {
          userToken = 'fgg;';
          await AsyncStorage.setItem('userToken', userToken)
        } catch (e) {
          console.warn(e);
        }
      }
      dispatch({ type: 'LOGIN', id: userName, token: userToken })
    },
    signOut: async () => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        userToken = 'fgg;';
        await AsyncStorage.removeItem('userToken')
      } catch (e) {
        console.warn(e);
      }
      dispatch({ type: 'LOGOUT' })
    },
    signUp: () => {
      // setUserToken('dsada');
      // setIsLoading(false);
    },
    toggleTheme: () => {
      setIsDarkTheme(isDarkTheme => !isDarkTheme);
    }
  }), []);
  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken;
      userToken = null
      try {
        userToken = await AsyncStorage.getItem('userToken')
      } catch (e) {
        console.warn(e);
      }
      dispatch({ type: 'REGISTER', token: userToken })
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={'large'} />
      </View>
    )
  }


  return (
    <PaperProvider  >
      {/* theme={themes} */}
      <AuthContext.Provider value={authContext}>
        <NavigationContainer >


          {loginState.userToken !== null ?

            <AuthStack />
            : <AuthLoginStack />
          }

        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>


  )
}

export default App