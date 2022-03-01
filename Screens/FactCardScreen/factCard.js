import { Text, View, StyleSheet, Image } from "react-native";

const FactCard = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Fact Card</Text>
      <View style={styles.container}>
        <Image
          source={require("./7af1437141037ffc39b8571dd273b2c8.jpeg")}
          style={styles.image}
        />
        <Text style={styles.text}>
          Eiusmod enim pariatur labore reprehenderit in aliquip. Eu amet tempor
          nostrud id excepteur qui veniam consectetur. Elit quis eiusmod aute
          deserunt cupidatat fugiat. Exercitation dolore magna laborum enim
          consectetur anim nisi ipsum nisi. Qui eiusmod mollit laborum
          incididunt sit laboris laborum sit. Dolore anim elit cupidatat
          reprehenderit laborum in. Veniam consequat minim excepteur anim id
          incididunt ut.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 10,
    color: "black",
  },
  container: {
    alignItems: "center",
    height: 500,
    width: 400,
    borderWidth: 5,
    borderRadius: 20,
    padding: 20,
    backgroundColor: "grey",
  },
  image: {
    width: 250,
    height: 200,
    borderWidth: 3,
    borderRadius: 5,
  },
  text: {
    padding: 20,
    marginTop: 20,
    backgroundColor: "white",
  },
});

export default FactCard;
