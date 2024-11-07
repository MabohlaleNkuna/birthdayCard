import React from 'react';
import { Image, StyleSheet, Platform, SafeAreaView } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import BirthdayCard from '@/components/BirthdayCard'; 

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}> 
  
        <ThemedView style={styles.birthdayCardContainer}>
          <BirthdayCard />
        </ThemedView>

     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  birthdayCardContainer: {
  
    padding: 10,
    flex:1,
  },
});
