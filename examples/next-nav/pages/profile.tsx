import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Head from "next-rn/head";
import useRouting from "next-rn/router/use-routing";
// See the pages/ folder for the next.js routes
// everything else is confined in this file :)

export default function Profile() {
  const { goBack } = useRouting();

  return (
    <View style={styles.container}>
      <Head metaInfo={{ title: "my profile" }} />
      <Text style={styles.text}>Profile! 🏋️‍♀️</Text>
      <Button text="👈 Go back" onPress={() => goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    margin: 20,
  },
});

function Button({ text, onPress }: { text: string; onPress?: () => void }) {
  return (
    <Text
      style={{
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "black",
        color: "white",
        margin: 20,
      }}
      onPress={onPress}
    >
      {text}
    </Text>
  );
}
