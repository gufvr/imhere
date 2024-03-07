import { Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles";

import { Participant } from "../../components/Participant";
export function Home() {
  const participants = ['Gustavo', 'Micaela', 'Thiago', 'Giovanna', 'Lucio', 'Vânia', 'Odila', 'Maria', 'Bruno', 'Bruna']

  function handleParticipantAdd() {
    console.log("Você clicou no botão de adicionar");
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você clicou em remover o participante ${name}`);
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
      <ScrollView showsVerticalScrollIndicator={false}>
      {
        participants.map(participant => (
          <Participant 
          key={participant}
            name={participant}
            onRemove={() => handleParticipantRemove("Gustavo")}/>
        ))
      }
      </ScrollView>


    </View>
  )
}