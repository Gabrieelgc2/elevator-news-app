import { Button } from "react-native";
import React, { useState } from "react";
import { 
  View, Text, TextInput, Image, TouchableOpacity, 
  StyleSheet, Alert, KeyboardAvoidingView, Platform, ScrollView, SafeAreaView 
} from "react-native";

export default function ProfileScreen() {
  const [nome, setNome] = useState("");
  const [isFirstImage, setIsFirstImage] = useState(true);

  const img1 = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300"; 
  const img2 = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300";

  const handleSave = () => {
    console.log("clicou");
    if (nome.trim().length < 3) {
      alert("O nome precisa ter pelo menos 3 caracteres.");
      return;
    }
    alert(`O nome "${nome}" foi salvo!`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: isFirstImage ? img1 : img2 }} style={styles.avatar} />
          <TouchableOpacity style={styles.changePicBtn} onPress={() => setIsFirstImage(!isFirstImage)}>
            <Text style={styles.changePicText}>Trocar Foto</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>Nome do Usuário</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Gabriel Andrade"
            value={nome}
            onChangeText={setNome}
          />
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Salvar Alterações</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#F8F9FA" },
  scrollContent: { flexGrow: 1, padding: 24, alignItems: "center", justifyContent: "center" },
  imageContainer: { alignItems: "center", marginBottom: 40 },
  avatar: { width: 140, height: 140, borderRadius: 70, borderWidth: 3, borderColor: "#007AFF" },
  changePicBtn: { marginTop: 12, backgroundColor: "#E9ECEF", paddingVertical: 6, paddingHorizontal: 16, borderRadius: 20 },
  changePicText: { color: "#007AFF", fontWeight: "600" },
  form: { width: "100%", marginBottom: 40 },
  label: { fontSize: 14, color: "#6C757D", marginBottom: 8, fontWeight: "bold" },
  input: { backgroundColor: "#FFF", height: 56, borderRadius: 12, paddingHorizontal: 16, borderWidth: 1.5, borderColor: "#DEE2E6" },
  saveButton: { width: "100%", backgroundColor: "#007AFF", height: 56, borderRadius: 12, justifyContent: "center", alignItems: "center", elevation: 4 },
  saveButtonText: { color: "#FFF", fontSize: 18, fontWeight: "bold" },
});