import React from 'react';
import Map from '../../components/Map';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './style';

const Index: React.FC = () => {
  
  if (process.env.API_GOOGLEMAPS) {
    return (<Map />);
  } else {
    return (
      <View style={styles.container}>
        <Feather name="alert-circle" size={35} />
        <Text style={styles.text}>Para funcionamento correto você precisa definir uma chave de API válida do Google Maps.</Text>
      </View>
    )
  }

}

export default Index;