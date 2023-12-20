import React from "react";
import { Image, StyleSheet, View, FlatList } from "react-native";

import Texto from "../../../componentes/Texto";

export default function Item({item: {nome, imagem} }){

    return <View style={estilos.item}>
            <Image source={ imagem } style={estilos.imagem}></Image>
            <Texto style={estilos.nome} >{ nome }</Texto>
            
        </View>

    // const renderItem = ({item: {nome, imagem} }) => <View key={ nome } style={estilos.item}>
    //     <Image source={ imagem } style={estilos.imagem}></Image>
    //     <Texto style={estilos.nome} >{ nome }</Texto>
    // </View>

    // return <>
    //     <Texto style={estilos.titulo}>{titulo}</Texto>

    //     <FlatList 
    //         data={lista}
    //         renderItem={renderItem}
    //         keyExtractor={({ nome }) => nome }
    //     />


        {/* { lista.map(({ nome, imagem }) => {
            return <View key={ nome } style={estilos.item}>
            <Image source={ imagem } style={estilos.imagem}></Image>
            <Texto style={estilos.nome} >{ nome }</Texto>
            
        </View>
        }) } */}
    // </>
}

const estilos = StyleSheet.create({
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        padding: 16,
        marginHorizontal: 16,
        alignItems: "center",
    },
    imagem: {
        width: 46,
        height: 46,
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646",
    }
});