import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Pressable, TextInput, Image } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';


SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const bruschettaPicture = require ("./assets/bruschetta.png");


function ServingEntry({navigation}) {
  const [servingAmount, onChangeServingAmount] = React.useState(1)
  return(
    <View style={styles.container}>
      
      <Text style={styles.title}>Bruschetta Recipe</Text>
      
      <Image source={bruschettaPicture} style={styles.bruschettaStyle} />
      
      <TextInput
        style={styles.servingInput}
        placeholder="Enter the Number of Servings"
        onChangeText={onChangeServingAmount}
        value={servingAmount}
        />
        
        <Pressable style={styles.servingButton} 
          onPress={() => {
            onChangeServingAmount(servingAmount,
              navigation.navigate("recipe", {
                servingAmount: servingAmount
            }))
          }}>
            <Text style={styles.buttonText}>View Recipe</Text>
          </Pressable>
        
    </View>
  )
}

function ServingAmounts({ route }) {
  const {servingAmount} = route.params;
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 33, marginTop: 60, marginBottom: 15}}>Bruschetta</Text>

      <Text style={styles.header}>Ingredients</Text>
      <Text style={styles.information}>{(servingAmount * 4) + ' plum tomatoes\n'}{(servingAmount * 6) + ' basil leaves\n'}{(servingAmount * 3) + ' garlic cloves, chopped\n'}{(servingAmount * 3) + ' TB olive oil\n'}</Text>
      
      <Text style={styles.header}>Directions</Text>
      <Text style={{fontSize: 18, marginLeft: 47, marginRight: 110}}>Combine the ingredients, add salt to taste. Top French bread slices with mixture</Text>
      
      
    </View>
  )
}

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'
        screenOptions={{
          title: "Healthy Recipes",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen
          name="home"
          component={ServingEntry} 
        />
        <Stack.Screen
          name="recipe"
          component={ServingAmounts}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  title: {
    fontSize: 33,
    marginTop: 35,
  },
  bruschettaStyle: {
    marginTop: 17,
  },
  servingInput: {
    marginTop: 30,
    fontSize: 17,
    marginBottom: 25,
    textAlign: "center"
  },
  servingButton: {
    backgroundColor: "#808080", 
    padding: 9,
  },
  buttonText: {
    color: "#fff"
  },
  header: {
    fontSize: 21,
    textAlign: "left",
    marginRight: 235
  },
  information: {
    fontSize: 18,
    marginRight: 120,
    marginLeft: 30
  }
  
});
