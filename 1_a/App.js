import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, ImageBackground, Button, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../1_a/assets/background.png')} resizeMode="cover" style={styles.image}>
        <Image style={styles.stretch} source={require('../1_a/assets/circle.png')}/>
        <Text style={styles.textFirst}>GROW</Text>
        <Text style={styles.textFirst}>YOUR BUSINESS</Text>
        <Text style={styles.textSecond}>We will help you to grow your business using online server</Text>
        <View style={styles.container2}>
          <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
            <Text style={styles.text_button}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
            <Text style={styles.text_button}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.textThree}>HOW WE WORK?</Text>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column'
  },
  textFirst: {
    fontSize:25,
    lineHeight: 29.3,
    textAlign:'center',
    alignItems: 'center',
    justifyContent:'center',
    bottom:90,
    fontWeight:'bold'
  },

  stretch:{
    width: 142,
    height:142,
    top:-180,
    alignItems: 'center',
  },

  image:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    flexDirection:'column'
  },
  textSecond:{
    fontSize:15,
    width:302,
    alignItems:'center',
    textAlign:'center',
    fontWeight:'bold'
  },
  btn:{
    width:140,
    height:50,
    backgroundColor:'#E3C000',
    alignItems:'center',
    justifyContent:'center',
  },
  text_button:{
    fontWeight:'bold'
  },
  container2:{
    width:'80%',
    height:60,
    flexDirection: 'row',
    justifyContent:'space-between' ,
    top:60,
  },
  textThree:{
    fontSize:18,
    fontWeight:'bold',
    top:100
  }
});
