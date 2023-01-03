import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);

  const onSubmit = async () => {
    await AsyncStorage.setItem("token", username);
    if (username === "saran" && password === "123456") {
      navigation.navigate("Home");
    } else if (username === "admin" && password === "1234") {
      navigation.navigate("Admin");
      
    } else {
      console.log("pas tres nice ");
    }
  };

  const tokenlogin = async () => {
    const value = await AsyncStorage.getItem("token");
    if (value !== null) {
      navigation.navigate("Home");
    } else {
      console.log("Tu dois te connecter");
    }
  };

  tokenlogin();

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(value) => setUsername(value)}
        style={styles.input}
        placeholder="Username"
      />
      <TextInput
        secureTextEntry
        style={styles.input}
        onChangeText={(value) => setPassword(value)}
        placeholder="Password"
      />
      <Button onPress={onSubmit} title="Login" />
      <Text>username : {username}</Text>
      <Text>password : {password}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container:{
    marginTop:100
  }
});
