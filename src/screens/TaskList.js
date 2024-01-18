import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import todayImage from '../../assets/imgs/today.jpg';
import moment from 'moment';
import 'moment/locale/pt-br';
import commonStyles from '../commonStyles';

const TaskList = () => {
  const today = moment().locale('pt-br').format('ddd, D [de] MMMM');

  const [fontsLoaded] = useFonts({
    Lato: require('../../assets/fonts/Lato.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Retornar algo válido enquanto as fontes não são carregadas
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={todayImage} style={styles.background}>
        <View style={styles.titleBar}>
          <Text style={styles.title}>Hoje</Text>
          <Text style={styles.subtitle}>{today}</Text>
        </View>
      </ImageBackground>
      <View style={styles.taskList}>
        <Text>Tarefa #01</Text>
        <Text>Tarefa #02</Text>
        <Text>Tarefa #03</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 3,
  },
  taskList: {
    flex: 7,
  },
  titleBar: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: commonStyles.fontFamily,
    fontSize: 50,
    color: commonStyles.colors.secondary,
    marginLeft: 20,
    marginBottom: 20,
  },
  subtitle: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.secondary,
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 20,
  },
});

export default TaskList;
