import  React,{Component}  from "react";
import { Text, View } from "react-native";

export default class MetaProgramada extends Component{
  constructor(props){
    super(props)
    this.state={time:this.props.time}
  }
  render(){
    return(
      <View>
        <Text>O Alarme ira tocar em</Text>
        <Text>{this.state.time}</Text>
      </View>
    )
  }

}
