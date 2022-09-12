import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient style={styles.linear} 
       colors={['rgba(199, 244, 246, 0)', 'rgba(209, 244, 246, 1)','rgba(229, 244, 245, 1)','rgba(0, 204, 249, 1)']}>
        <Text style={styles.textFirst}>CODE</Text>
        <Text style={styles.textSecond}>VERIFICATION</Text>
        <Text style={styles.textThree}>Enter ontime password sent on ++849092605798</Text>
        <View style={styles.containerSecond}>
          <TextInput placeholder='' style={styles.inputText}></TextInput>
          <TextInput placeholder='' style={styles.inputText}></TextInput>
          <TextInput placeholder='' style={styles.inputText}></TextInput>
          <TextInput placeholder='' style={styles.inputText}></TextInput>
          <TextInput placeholder='' style={styles.inputText}></TextInput>
          <TextInput placeholder='' style={styles.inputText}></TextInput>
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
            <Text style={styles.text_button}>VERIFY CODE</Text>
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
    //justifyContent: 'center',
  },
  linear:{
    flex:1,
    //justifyContent:'center', //căng giữa theo chiều dọc
    alignItems:'center',
    width:'100%',
    flexDirection:'column',
  },
  textFirst:{
    fontSize:60,
    textAlign:'center',
    top:145,
    fontWeight:'bold'
  },
  textSecond:{
    fontSize:20,
    lineHeight:23.44,
    textAlign:'center',
    top:220,
    fontWeight:'bold'
  },
  textThree:{
    lineHeight:17.58,
    fontSize:15,
    textAlign:'center',
    fontWeight:'bold',
    top:290,
    width:302,
    height:53
  },
  containerSecond:{
    top:300,
    width:300,
    height:50,
    flexDirection:'row'
  },
  inputText:{
    width:50,
    height:50,
    borderColor: 'gray',
    borderWidth: 1,  
    marginBottom: 20,
  },
  btn:{
    width:305,
    height:45,
    top:350,
    backgroundColor:'#E3C000',
    alignItems:'center',
    justifyContent:'center',
  },
  text_button:{
    fontWeight:'bold'
  },
});
