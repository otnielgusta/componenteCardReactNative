import { View, Image, Text, StyleSheet, Button, TouchableOpacity} from "react-native";
import {Ionicons } from '@expo/vector-icons';


export default function ComponentCard(props){
    return(<View style={styles.component}>
        <View style={styles.cima}>
            <View style={styles.imageNameHorario}>            
                <Image style={styles.image} source={props.objeto.image}></Image>
                <View style={styles.nameHorario}>
                    <Text style={styles.name}>{props.objeto.name}</Text>
                    <Text style={styles.horario}>{props.objeto.horario}</Text>

                </View>
            </View>
            <View style={styles.icons}>

                <TouchableOpacity onPress={()=>props.objeto.onpress()} color={"transparent"} >
                    <Ionicons name="checkmark-outline" size={25} color="blue"/>
                </TouchableOpacity>
                <TouchableOpacity color={"transparent"} >

                    <Ionicons name="ellipsis-vertical" size={20} color="#dadce0"/>
                </TouchableOpacity>

                
            </View>
        </View>
        <View>
            <Text style={styles.text}>{props.objeto.texto}</Text>
        </View>
    </View>);
}

const styles = StyleSheet.create({
    component:{
        width: "50%",
        marginTop: 10,
        backgroundColor: "#fff",
        padding: 10,
        display: "flex",
        justifyContent: "center",
        borderRadius: 8,
        borderColor: "#E2E3E3",
        borderWidth:1

    },
    cima:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    imageNameHorario:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        
    },
    nameHorario:{
        marginLeft:10
    },
    icons:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    image:{
        width:40,
        height: 40,
        borderRadius:50,
        borderColor: "#137333",
        borderWidth:2
    },
    name:{
        fontSize:14,
        fontWeight: "600"
    },
    horario:{
        fontSize:12,
        fontWeight: "300"
    },
    text:{
        marginTop:10,
        fontSize:14,
        fontWeight: "400"
    }
   
});