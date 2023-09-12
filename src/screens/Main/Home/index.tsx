import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';

import * as THEME from '../../../themes/theme';
import Header from '../components/Header';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import ExclusiveCard from '../components/ExclusiveCard';
import Banner from '../components/Banner';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.black,
  },
  scrollStyle: {
    paddingHorizontal: 10,
    marginTop: 50,
  },
});

const ARRAY = [1, 2, 3, 4, 5];

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollStyle}>
        <SectionHeader title={'Resume Reading'} />
        <ScrollView horizontal>
          {ARRAY.map(index => {
            return (
              <Card
                key={index}
                height={117}
                width={117}
                cardLabel={'Fantastic Tumb...'}
                subCardLabel={'Issue 3'}
              />
            );
          })}
        </ScrollView>
        <SectionHeader title={'Romance'} />
        <ScrollView horizontal>
          <Card
            tagText="NEW TODAY"
            showTag
            height={216}
            width={144}
            showProgress={false}
            bgColor={THEME.colors.lightGrey}
            cardLabel={'Fantastic Tumb...'}
            subCardLabel={'Issue 3'}
          />
          <Card
            height={216}
            width={144}
            showProgress={false}
            bgColor={THEME.colors.lightGrey}
            cardLabel={'Fantastic Tumb...'}
            subCardLabel={'Issue 3'}
          />
          <Card
            tagText="NEW THIS WEEK"
            showTag
            height={216}
            width={144}
            showProgress={false}
            bgColor={THEME.colors.lightGrey}
            cardLabel={'Fantastic Tumb...'}
            subCardLabel={'Issue 3'}
          />
          <Card
            height={216}
            width={144}
            showProgress={false}
            bgColor={THEME.colors.lightGrey}
            cardLabel={'Fantastic Tumb...'}
            subCardLabel={'Issue 3'}
          />
          <Card
            height={216}
            width={144}
            showProgress={false}
            bgColor={THEME.colors.lightGrey}
            cardLabel={'Fantastic Tumb...'}
            subCardLabel={'Issue 3'}
          />
        </ScrollView>
        <SectionHeader title={'Zebra Exclusive'} />
        <ScrollView horizontal>
          <ExclusiveCard
            tagText="NEW TODAY"
            cardLabel={'Squad Eighty Two and Sixteen'}
          />
          <ExclusiveCard showTag={false} cardLabel={'Shorter Header'} />
          <ExclusiveCard
            tagText={'NEW TODAY'}
            cardLabel={'Notice Background Overlay'}
          />
        </ScrollView>
        <Banner />
        <SectionHeader title={'Completed Series'} />
        <ScrollView horizontal>
          <Card
            tagText="NEW TODAY"
            showTag
            height={216}
            width={144}
            showProgress={false}
            bgColor={THEME.colors.lightGrey}
            cardLabel={'Chronicles of Totemism'}
          />
          <Card
            height={216}
            width={144}
            showProgress={false}
            bgColor={THEME.colors.lightGrey}
            cardLabel={'Picaso and the First Dragon'}
          />
          <Card
            tagText="NEW THIS WEEK"
            showTag
            height={216}
            width={144}
            showProgress={false}
            bgColor={THEME.colors.lightGrey}
            cardLabel={'Doors or Windows?'}
          />
          <Card
            height={216}
            width={144}
            showProgress={false}
            bgColor={THEME.colors.lightGrey}
            cardLabel={'Retrograde'}
          />
          <Card
            height={216}
            width={144}
            showProgress={false}
            bgColor={THEME.colors.lightGrey}
            cardLabel={'Alice and The Chapters of Winterfell'}
          />
        </ScrollView>
        <SectionHeader title={'Top Series'} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
