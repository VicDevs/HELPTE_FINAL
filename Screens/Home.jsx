import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native"
import { TextLogo } from "../components/TextLogo"

export const Home = () => {
    return(
        <View style={styles.container}>
            <TextLogo/>
            <Image source={require('../assets/logo.png')} style={styles.logo}/>
            <Text style={styles.subtitle}>Understanding Beyond Words: The AI that Translates Your Emotions.</Text>
            <TouchableOpacity style={styles.buttonSignin}>
                <Text style={styles.buttontxt}>Sign-in</Text>
            </TouchableOpacity>
            <Text>or</Text>
            <TouchableOpacity style={styles.buttonSignup}>
                <Text style={styles.buttontxt}>Sign-up</Text>
            </TouchableOpacity>
        </View>
    )
}

let corBase = "#0149ab"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 40,
        justifyContent: 'center',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 15,
        borderRadius: 75
    },
    subtitle: {
        fontSize: 20,
        textAlign: 'center',
        width: '80%'
    },
    buttonSignin: {
        backgroundColor: '#ccc',
        padding: 15,
        marginVertical: 15,
        borderRadius: 5,
        width: '80%',
        elevation: 5
    },
    buttonSignup: {
        backgroundColor: corBase,
        padding: 15,
        marginVertical: 15,
        borderRadius: 5,
        width: '80%',
        elevation: 5
    },
    buttontxt: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    }
})