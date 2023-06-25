import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import * as Font from "expo-font"
import * as SplashScreen from "expo-splash-screen"
import MetaProgramada from './MetaProgramada'
SplashScreen.preventAutoHideAsync()

let customFonts = {
  "BubblegumSans": require("../assets/BubblegumSans-Regular.ttf")
};

export default class TelaInicial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }
  render() {
    if(this.state.fontsLoaded){
      SplashScreen.hideAsync()
    
    return (

      <View style= {styles.container}>
      <View style={styles.title}><Text style={styles.titleText}>App de Metas</Text></View>
      <Text style= {[styles.text, { alignSelf: "center", fontSize: 30}]}>Ola Henrique</Text>
        <TouchableOpacity style= {styles.botao} onPress={()=>{
          this.props.navigation.navigate("CriarMeta")
        }}>

          <text style= {styles.text}>Programe o seu dia</text>
          <MetaProgramada time={this.props.route.params.time}></MetaProgramada>
        </TouchableOpacity>
      </View>
    )

    }
    
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue'
  },
  botao: {
  color: "black",
  backgroundColor: "lightgreen",
  width: 200,
  height: 200,
  borderRadius:200,
  alignSelf:"center",
  justifyContent: "center",
  alignItems: "center",
  borderWidth: 5,
  borderColor: "black",
  marginTop: 30

  },
  text: {
     fontSize: 22,
     fontFamily: "BubblegumSans"
  },

  title:{
    flex: 0.1,
    backgroundColor: "white",
    borderBottomWidth: 10,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50


    },

  titleText:{
    fontSize: 30,
    fontFamily: "BubblegumSans"
  }
})
