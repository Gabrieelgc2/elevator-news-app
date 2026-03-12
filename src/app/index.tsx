import { Text, View, StyleSheet } from "react-native";
import ElevatorNews from "../../components/ElevatorNews";

export default function Index() {
  return (
    <View style={styles.container}>
     <ElevatorNews></ElevatorNews>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
