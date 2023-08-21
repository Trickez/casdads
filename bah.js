import axios from 'axios';

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

const copyDeepObject = obj => {
  return JSON.parse(JSON.stringify(obj));
}

let copy = copyDeepObject({}); 



async function fetch(url) {
  await 
    axios
      .get(url)
      .then((response) => {
        const ex = response;
        copy.readOnlyProp = ex;

      })

    
 
}


export default function App() {
  const [data, setData] = useState([]);

  const fetchData = async (url) => {
    await 
    axios
      .get(url)
      .then((response) => {
        const ex = response;
        setData(response)

      })
  }

  const f = async () => {
      apiKey = "31kRDR2k0R68YgEJJQx7g9pSfeOQlLEU";
      api = "https://api.nzbgeek.info/api?apikey=" + apiKey + "&o=json&t=search&cat=5040";

     await fetchData(api)
      .then(() => {
        console.log(data);
      })


      //setColor(fetch(api));

      //console.log(buttonColor);

     
  }

  const test = {
    if (data) {
      return (
        data (
          data.map((item, index) => {
            <Text>{item.title}</Text>
          }) 
        )
      )
    } 
  }
  return (
<View style={styles.container}>
                    {
                        data.map((l, i) => (
                            <ListItem
                                key={i}
                                leftIcon={{name:l.icon}}
                                title={l.name}
                                rightSubtitle={l.when}
                                subtitle={l.subtitle}
                                bottomDivider
                                checkBox={true}
                            />
                        ))
                    }
      <Button onPress={f} title='sdaasdsad' />

      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>

   
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
