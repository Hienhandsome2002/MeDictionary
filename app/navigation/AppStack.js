import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dimensions, Vibration, Alert } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { showMessage } from 'react-native-flash-message';
import { useNavigation } from '@react-navigation/native';
import { MAIN_HomeScreen,ArticleDetailScreen, CategoryScreen, ProductListScreen,ArticleListScreen, DetailProductScreen } from '../screens/main';
import { DrugSearchScreen, DrugDetailScreen } from '../screens/drug';
import FavoriteDrugScreen from '../screens/favorite';
import MyDrugListScreen from '../screens/medicalbox/MyDrugListScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppBottomTab from './AppBottomTab';

const Stack = createNativeStackNavigator();

const App_ = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    return (
        <Stack.Navigator
            initialRouteName="MAIN_HomeScreen"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MAIN_HomeScreen" component={AppBottomTab} />
            <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
            <Stack.Screen name="ProductListScreen" component={ProductListScreen} />

            <Stack.Screen name="DetailProductScreen" component={DetailProductScreen} />
            <Stack.Screen name="DrugDetailScreen" component={DrugDetailScreen} />

            <Stack.Screen name="ArticleListScreen" component={ArticleListScreen} />
            <Stack.Screen name="ArticleDetailScreen" component={ArticleDetailScreen} />
            <Stack.Screen name="DrugSearchScreen" component={DrugSearchScreen} />
            <Stack.Screen name="FavoriteDrugScreen" component={FavoriteDrugScreen} />
            <Stack.Screen name="MyDrugListScreen" component={MyDrugListScreen} />
            
        </Stack.Navigator>
    );
};

export default App_;
