import React, { useState } from "react";
import { View, Text, ScrollView, Switch, StyleSheet } from "react-native";

export default function ElevatorNews() {
  const [darkMode, setDarkMode] = useState(false);

  const noticias = [
    "Elevador inteligente reduz consumo de energia em prédios.",
    "Nova tecnologia de elevadores sem cabos é testada.",
    "Elevadores panorâmicos ganham popularidade em hotéis.",
    "Empresa lança elevador com IA para prever manutenção.",
    "Elevadores residenciais crescem no mercado brasileiro.",
    "Prédios sustentáveis adotam elevadores regenerativos.",
    "Elevadores com reconhecimento facial começam a surgir.",
    "Nova norma de segurança para elevadores é anunciada.",
    "Tecnologia de elevadores ultrarrápidos chega a novos prédios.",
    "Elevadores sustentáveis ganham destaque no mercado.",
    "Elevadores sustentáveis ganham destaque no mercado.",
    "Elevadores sustentáveis ganham destaque no mercado.",
    "Elevadores sustentáveis ganham destaque no mercado.",
    "Elevadores sustentáveis ganham destaque no mercado.",
    "Elevadores sustentáveis ganham destaque no mercado.",
    "Elevadores sustentáveis ganham destaque no mercado.",
    "Elevadores sustentáveis ganham destaque no mercado.",
    "Elevadores sustentáveis ganham destaque no mercado.",
    "Elevadores sustentáveis ganham destaque no mercado.",
    "Elevadores sustentáveis ganham destaque no mercado.",
    "Elevadores sustentáveis ganham destaque no mercado.",
    "Elevadores sustentáveis ganham destaque no mercado.",
    "Elevadores sustentáveis ganham destaque no mercado.",
  ];

  const toggleTheme = () => setDarkMode(!darkMode);

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <View style={[styles.container, theme.container]}>

      {/* Switch do tema */}
      <View style={styles.switchContainer}>
        <Text style={theme.text}>Tema escuro</Text>
        <Switch value={darkMode} onValueChange={toggleTheme} />
      </View>

      {/* ScrollView */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
      >
        {noticias.map((noticia, index) => (
          <View key={index} style={[styles.card, theme.card]}>
            <Text style={theme.text}>{noticia}</Text>
          </View>
        ))}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20
  },

  scroll: {
    flex: 1
  },

  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40
  },

  card: {
    padding: 2,
    borderRadius: 10,
    marginBottom: 10
  }
});

const lightTheme = {
  container: { backgroundColor: "#fff" },
  text: { color: "#000" },
  card: { backgroundColor: "#eee" }
};

const darkTheme = {
  container: { backgroundColor: "#121212" },
  text: { color: "#fff" },
  card: { backgroundColor: "#1f1f1f" }
};