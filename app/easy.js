import * as SQLite from 'expo-sqlite';
import { MaterialCommunityIcons, Feather, MaterialIcons,FontAwesome5,Ionicons, FontAwesome6 } from '@expo/vector-icons';
import {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, Pressable, Image, Modal } from 'react-native';
import styles from '../styles/styleSheet';
import { Link } from 'expo-router';
import { Card} from './components/flipCard'
import FlipCard from 'react-native-flip-card';

export default function Easy () {
  const [totalScore, setTotalScore] = useState(0);
  return (
<View style={styles.container}>
      <View>
        <Text style={styles.subtitle}>Score: {totalScore}</Text>
      </View>
      <View style={styles.container}>
          {(() => {
            const cardList = [];
            for (let i =0; i < 6; i++) {
                cardList.push(
                <FlipCard 
                id={i}
                key={i}
                onButtonPress={()=>{}}
                />)
            }
            return cardList;
          })()}
      </View>
  </View>
  )
}