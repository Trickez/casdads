//React Native SafeAreaView for Safe Area Boundaries
//https://aboutreact.com/react-native-safeareaview/

//import React in our code
import { Iframe } from '@bounceapp/iframe';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

//import all the components we are going to use
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';


function DaScreen() {
   data2 = [];

    axios
    .get("http://192.0.10.245:3000")
    .then((response) => {
        const data = response.data;
        
        data2 = data;

        
    })

    return  (
        <Iframe uri="http://192.0.10.245:8310/" style={{ flex: 1}} />
        )

   
}



const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("http://192.0.10.245:3000")
            .then((response) => {
                setData(response.data);
            });
    }, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#494949" }}>
      <View style={{ flex: 1 }}>
        {data['vpn'] ?  <DaScreen /> :             
        <Text style={{fontSize: 30, color: "white", padding: 40}}>No vpn</Text> }
      </View>
    </SafeAreaView>
  );
};

export default App;