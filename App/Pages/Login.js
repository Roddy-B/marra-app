import { View, Image, Text, StyleSheet,Dimensions  } from 'react-native'
import React from 'react'
import Colors from '../Assets/Shared/Colors';
import {Ionicons} from '@expo/vector-icons';

const win = Dimensions.get('window');

export default function Login() {
  return (
    <View>
      <Image source={require('./../Assets/Images/login.png')} style={styles.image}/>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Bem vindo {'\n'} ao {'\n'} Marra</Text>   
        <Text style={styles.sign}>Login/Signup</Text>
        <View style={styles.button}>
            <Ionicons name='logo-google' size={24} color='#FFF' style={{marginRight:10}}/>
            <Text style={{color:Colors.white}}>Inicie sessão com Google</Text>
        </View>  
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        paddingTop:40,
        marginTop: -25,
        paddingBottom:20,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    image:{
        width: win.width,
    },
    welcomeText:{
        fontSize:35,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop:20
    },
    sign:{
        textAlign: 'center',
        marginTop:80,
        fontSize:20,
    },
    button:{
        backgroundColor:Colors.primary,
        padding: 10,
        margin: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10
    }
})