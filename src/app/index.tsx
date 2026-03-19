import { Text, View, StyleSheet } from "react-native";
import ElevatorNews from "../../components/ElevatorNews";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Link href="/profile" style={styles.link}>
        Ir para Perfil
      </Link>
     <ElevatorNews />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50
  },
  
  link: {
    textAlign: 'center',
    fontSize: 18,
    color: '#007AFF',
    marginBottom: 10,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  }
});
