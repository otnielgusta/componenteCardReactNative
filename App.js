import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import ComponentCard from './lib/component_card';

export default function App() {
  const objeto = {image: "https://blog.pajaris.com.br/wp-content/uploads/2021/01/fotos-tumblr-sozinha-7.png",
  name: "Jade Picão",
  horario: "13:16 Hoje",
  texto: "Card teste",
  onpress: () => console.log("Confirmado card de Jade Picão")
  }
  return (
    <View style={styles.container}>
      <ComponentCard objeto={objeto}/>
      <ComponentCard objeto={objeto}/>
      <ComponentCard objeto={objeto}/>
      <ComponentCard objeto={objeto}/>
      <ComponentCard objeto={objeto}/>
      <ComponentCard objeto={objeto}/>
      <ComponentCard objeto={objeto}/>
      <ComponentCard objeto={objeto}/>
      <ComponentCard objeto={objeto}/>
      <ComponentCard objeto={objeto}/>
      <ComponentCard objeto={objeto}/>
      <ComponentCard objeto={objeto}/>
      <ComponentCard objeto={objeto}/>
      <ComponentCard objeto={objeto}/>
        
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
