import React from "react";
import { SafeAreaView, Text, StyleSheet,View } from "react-native";
import LoginForm from "../components/Auth/LoginForm";
import UserData from "../components/Auth/UserData";
import useAuth from "../hooks/useAuth";

export default function Account() {
  const {auth} = useAuth();

  return (
    <View style={styles.container}>
     {auth?<UserData/>:<LoginForm/>}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
});
