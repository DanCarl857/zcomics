import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';

import * as THEME from '../../../themes/theme';
import Header from '../../components/Header';
import SectionHeader from '../../components/SectionHeader';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.black,
  },
  scrollStyle: {
    paddingHorizontal: 5,
    marginTop: 50,
  },
});

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollStyle}>
        <SectionHeader title={'Resume Reading'} />
        <SectionHeader title={'Romance'} />
        <SectionHeader title={'Zebra Exclusive'} />
        <SectionHeader title={'Completed Series'} />
        <SectionHeader title={'Top Series'} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
