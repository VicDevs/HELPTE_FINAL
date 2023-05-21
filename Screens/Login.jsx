import { useState } from "react"
import { StyleSheet, TextInput, Text, TouchableOpacity, Image, View } from 'react-native';
import { TextLogo } from "../components/TextLogo";

export const Login = ()=>{
    const [user, setUser] = useState('')

    const [password, setPassword] = useState('')

    return(
        <View style={styles.container}>
            <TextLogo/>
            <Image source={require('../assets/logo.png')} style={styles.logo}/>
            <Text style={styles.label}>User</Text>
                <TextInput style={styles.input}
                placeholder="Digite seu usuário"
                value={user}
                onChangeText={setUser}
            />

            <Text style={styles.label}>Password</Text>
                <TextInput style={styles.input}
                placeholder="Insira sua senha:"
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity 
                style={styles.btnLogin}>
                <Text style={styles.textBtnLogin}>Sign-in</Text>
            </TouchableOpacity>
        </View>
    )
}

let corBase = "#0149ab"

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        fontSize: 20,
        padding: 5,
        fontWeight:'bold'
    },
    input:{
        width: "80%",
        borderBottomWidth : 2,
        backgroundColor: '#D9D9D9',
        borderBottomColor : corBase,
        marginBottom: 10,
        padding: 10,
        borderRadius: 10
    },
    subtitle:{
        fontSize: 32,
        color:"#000",
        fontWeight: "bold",
        marginTop: 10,
        marginBottom:50,
    },
    btnLogin:{
        width: '80%',
        backgroundColor: corBase,
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        elevation: 5
    },
    textBtnLogin:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
        color: '#fff'
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 15,
        borderRadius: 75
    }
})