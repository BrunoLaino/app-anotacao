import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";

export default function App() {
  const [estado, setarEstado] = useState("leitura");
  const [anotacao, setarAnotacao] = useState("Minha anotação");

  if (estado == "leitura") {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar style="light" />
        <View style={styles.header}>
          <Text style={{ textAlign: "center", color: "white", fontSize: 18 }}>
            Aplicativo de Anotacao
          </Text>
        </View>
        <View style={{ padding: 20 }}>
          <Text style={styles.anotacao}>{anotacao}</Text>
        </View>

        <TouchableOpacity
          onPress={() => setarEstado("atualizando")}
          style={styles.btnAnotacao}
        >
          <Text style={styles.btnAnotacaoTexto}>+</Text>
        </TouchableOpacity>
      </View>
    );
  } else if (estado == "atualizando") {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar style="light" />
        <View style={styles.header}>
          <Text style={{ textAlign: "center", color: "white", fontSize: 18 }}>
            Aplicativo de Anotacao
          </Text>
        </View>
        <TextInput onChangeText={(text)=>setarAnotacao(text)} style={{padding:20, textAlignVertical:'top'}} multiline={true}></TextInput>
        <TouchableOpacity
          onPress={() => setarEstado("leitura")}
          style={styles.btnSalvar}
        >
          <Text style={{ textAlign: "center", color: "white" }}>Salvar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    padding: 20,
    backgroundColor: "#069",
  },
  anotacao: {
    fontSize: 13,
  },
  btnAnotacao: {
    position: "absolute",
    right: 20,
    bottom: 20,
    width: 50,
    height: 50,
    backgroundColor: "#069",
    borderRadius: 25,
  },
  btnAnotacaoTexto: {
    color: "white",
    position: "relative",
    textAlign: "center",
    top: 3,
    fontSize: 30,
  },
  btnSalvar: {
    position: "absolute",
    right: 20,
    bottom: 20,
    width: 100,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#069",
  },
});
