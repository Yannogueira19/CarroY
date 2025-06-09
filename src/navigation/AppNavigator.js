import 'react-native-gesture-handler';
import React from 'react';
import { Alert, View } from 'react-native';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import Login from '../screens/Login';
import Registro from '../screens/Registro';
import Home from '../screens/Home';
import Perfil from '../screens/Perfil';
import MarcaInfo from '../screens/MarcaInfo';
import Favoritos from '../screens/Favoritos';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeFeaturesNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ConsultaFipe"
      component={Home}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="MarcaInfo"
      component={MarcaInfo}
      options={{ title: 'Informações da Marca' }}
    />
  </Stack.Navigator>
);

function CustomDrawerContent(props) {
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('uid');
      Alert.alert('Logout', 'Você saiu da sua conta.');
      props.navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        })
      );
    } catch (error) {
      Alert.alert('Erro', 'Erro ao fazer logout.');
    }
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <View
        style={{
          borderBottomColor: '#e0e0e0',
          borderBottomWidth: 1,
          marginVertical: 10,
          marginHorizontal: 16,
        }}
      />
      <DrawerItem
        label="Sair"
        onPress={handleLogout}
        labelStyle={{ fontWeight: 'bold', color: '#d9534f' }}
      />
    </DrawerContentScrollView>
  );
}

const AppDrawer = () => (
  <Drawer.Navigator
    initialRouteName="Início"
    drawerContent={(props) => <CustomDrawerContent {...props} />}
  >
    <Drawer.Screen
      name="Início"
      component={HomeFeaturesNavigator}
      options={{ title: 'Home' }}
    />
    <Drawer.Screen
      name="Meus Favoritos"
      component={Favoritos}
      options={{ title: 'Meus Favoritos' }}
    />
    <Drawer.Screen
      name="Meu Perfil"
      component={Perfil}
      options={{ title: 'Meu Perfil' }}
    />
  </Drawer.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Registro"
          component={Registro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={AppDrawer}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
