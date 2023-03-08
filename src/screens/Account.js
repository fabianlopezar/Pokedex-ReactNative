import React from "react";
import { SafeAreaView, Text,StyleSheet } from "react-native";

export default function Account() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Account</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    text: {
      fontSize: 25,
      fontWeight: '500',
    },
  });