import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, ImageBackground, Button, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export default function App() {
  return (
    <View style={styles.container}>
      

      <LinearGradient style={styles.linear}
      colors={['rgba(189, 246, 198, 0)', 'rgba(189, 246, 198, 1)']}>
        <Image style={styles.stretch} source={require('../1_b/assets/lock.png')}></Image>
        <Text style={styles.textFirst}>FORGET PASSWORD</Text>
        <Text style={styles.textSecond}>Provide your account’s email for which you want to reset your password</Text>

        <View style={styles.containerSecond}>
          <Image style={styles.stretchSmall} source={require('../1_b/assets/free-mail-icon-142-thumb.png')}/>
          <TextInput placeholder='Email' style={styles.inputText}></TextInput>
        </View>

        <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
            <Text style={styles.text_button}>NEXT</Text>
          </TouchableOpacity>

        <StatusBar style="auto" />
      </LinearGradient>
        
      
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

  linear:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    flexDirection:'column',
  },

  stretch:{
    bottom:100, 
  },

  textFirst: {
    fontSize:25,
    lineHeight: 29.3,
    textAlign:'center',
    bottom:70,
    width:150,
    height:70,
    fontWeight:'bold'
  },
  textSecond:{
    fontSize:15,
    width:302,
    bottom:40,
    alignItems:'center',
    textAlign:'center',
    fontWeight:'bold'
  },
  
  inputText:{
    width:260,
    backgroundColor:'[rgba(196, 196, 196, 1)]',
    height:45,

  },
  stretchSmall:{
    width:45,
    height:45,
    backgroundColor:'[rgba(196, 196, 196, 1)]',
  },
  containerSecond:{
    width:305,
    height:60,
    flexDirection: 'row',
  },
  btn:{
    width:305,
    height:45,
    top:40,
    backgroundColor:'#E3C000',
    alignItems:'center',
    justifyContent:'center',
  },
  text_button:{
    fontWeight:'bold'
  },


});
