import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  AsyncStorage,
} from "react-native";

export default function App() {
  const [estado, setarEstado] = useState("leitura");
  const [anotacao, setarAnotacao] = useState("");

  useEffect(() =>{

    (async () => {
      try{
        const anotacaoStorage = await AsyncStorage.getItem("anotacao");
        setarAnotacao(anotacaoStorage);
      }catch(ex){}
    })
  } ,[])

  setarData = async() => {
    try{
      await AsyncStorage.setItem("anotacao", anotacao);
    }catch(ex){}
  
    alert("Anotação salva com sucesso");
  }

  function atualizarTexto(){
    setarEstado("leitura");
    setarData();
  }


  if (estado == "leitura") {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar style="light" />
        <View style={styles.header}>
          <Text style={{ textAlign: "center", color: "white", fontSize: 18 }}>
            Aplicativo de Anotacao
          </Text>
        </View>
        {
          (anotacao != '')?
            <View style={{ padding: 20 }}>
              <Text style={styles.anotacao}>{anotacao}</Text>
            </View>
          :
            <View style={{ padding: 20 }}>
              <Text style={{opacity:0.3}}>Nenhuma anotação encontrada.</Text>
            </View>
          
        }
        
        <TouchableOpacity
          onPress={() => setarEstado("atualizando")}
          style={styles.btnAnotacao}
        >
          {(anotacao == "")?
            <Text style={styles.btnAddTexto}>+</Text>
            :
            <Text style={styles.btnEditar}>Editar</Text>
          }
          
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
        <TextInput
          onChangeText={(text) => setarAnotacao(text)}
          style={{ padding: 20, textAlignVertical: "top" }}
          multiline={true} value={anotacao} autoFocus={true}
        ></TextInput>
        <TouchableOpacity
          onPress={() => atualizarTexto()}
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
  btnAddTexto: {
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

  btnEditar: {
    fontSize:12,
    color: "white",
    textAlign: 'center',
    marginTop: 16
  }

});
