import { Text, StyleSheet } from 'react-native'

export const TextLogo = () => {
    return(
        <Text style={styles.title}>Help<Text style={styles.spanTitle}>TE</Text></Text>
    )
}

let corBase = "#0149ab"

const styles = StyleSheet.create({
    title:{
        fontSize: 48,
        marginBottom: 50,
        textAlign: 'center'
    },
    spanTitle:{
        fontWeight:"bold",
        color:corBase
    },
})