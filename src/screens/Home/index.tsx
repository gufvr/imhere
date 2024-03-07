import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./styles";

import { Participant } from "../../components/Participant";
export function Home() {
  const participants = ['Gustavo', 'Micaela', 'Thiago', 'Giovanna', 'Lucio', 'Vânia', 'Odila', 'Maria', 'Bruno', 'Bruna']

  function handleParticipantAdd() {
    if (participants.includes('Gustavo')) {
      return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome.")
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Deseja realmente remover o(a) participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Participante removido!')
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);
  }

  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Terça-feira, 5 de Março de 2024</Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
          key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>Ninguém chegou ao seu evento ainda? Adicione participantes a sua lista de presença.</Text>
        )}
      />
    </View>
  )
}