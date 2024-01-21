import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import React, { Component } from 'react';

import todayimage from '../../assets/imgs/today.jpg';

import moment from 'moment';
import 'moment/locale/pt-br';

import commonStyles from '../commonStyles';
import Task from '../components/Task';

export default class TaskList extends Component {
  render() {
    const today = moment().locale('pt-br').format('ddd, D [de] MMMM');

    return (
      <View style={styles.container}>
        <ImageBackground source={todayimage} style={styles.Background}>
          <View style={styles.titleBar}>
            <Text style={styles.title}>Hoje</Text>
            <Text style={styles.subTitle}>{today}</Text>
          </View>
        </ImageBackground>
        <View style={styles.TaskList}>
          <Task desc='Comprar Livro' estimateAt={new Date()} doneAt={new Date()} />
          <Task desc='Ler Livro' estimateAt={new Date()} doneAt={null} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Background: {
    flex: 3,
  },
  TaskList: {
    flex: 7,
  },
  titleBar: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: commonStyles.fontFamily,
    fontSize: 50,
    color: commonStyles.colors.secondary,
    marginLeft: 20,
    marginBottom: 20,
  },
  subTitle: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.secondary,
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 20,
  },
});
