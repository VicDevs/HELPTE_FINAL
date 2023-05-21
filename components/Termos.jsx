import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export const Termos = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.label}>Accept the terms:</Text>
            <Text style={styles.termos}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis asperiores suscipit ullam tenetur. Nesciunt molestiae deleniti cumque vitae aut. Recusandae consequuntur sequi veritatis odit assumenda, accusantium laborum nemo quidem amet?</Text>
            <TouchableOpacity style={styles.btnTermos}>
                <Text style={styles.btnText}>Accept</Text>
            </TouchableOpacity>
        </View>
    );
}

let corBase = "#0149ab"

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        padding: 5
    },
    termos: {
        fontSize: 18,
        backgroundColor: '#ccc',
        padding: 10,
        borderRadius: 10
    },
    btnTermos: {
        width: '100%',
        backgroundColor: corBase,
        padding: 10,
        marginVertical: 20,
        borderRadius: 10
    },
    btnText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
  });