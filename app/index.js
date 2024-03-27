/**
 * File:    Index.js
 * Author:  Robee Lou Diaz
 * Brief:   The main App file for controlling
 */
import * as SQLite from 'expo-sqlite';
import { MaterialCommunityIcons, Feather, MaterialIcons,FontAwesome5,Ionicons, FontAwesome6 } from '@expo/vector-icons';
import {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, Pressable, Image, Modal } from 'react-native';
import styles from '../styles/styleSheet';
import { Link } from 'expo-router';

export default function Page() {
  const [gameInstructions, showGameInstructions] = useState(false);

  const showInstructions = () => {
    showGameInstructions(true);
  };

  const hideInstructions = () => {
    showGameInstructions(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Memory Match</Text>
      <View style={styles.main}>
        <Pressable 
        style={styles.instruction}
        onPress={showInstructions}
        >
            <Text style={styles.subtitle}>How to Play?</Text>
        </Pressable>

       
      </View>

          <Modal visible={gameInstructions}>
          <View style={styles.instructionModal}>
            <View style={{alignItems:'center'}}>
              <Text style={styles.instructionTitle}>Game Mechanics</Text>
            </View>
            <View style={styles.instructionIconText}>
              <Feather name="square" size={35} color="black" />
              <Text style={styles.instructionText}>Each tile will have a score or bomb</Text>
            </View>
            <View style={styles.instructionIconText}>
              <MaterialIcons name="numbers" size={35} color="black" />
              <Text style={styles.instructionText}>Player can set number of tiles and bomb</Text>
            </View>
            <View style={styles.instructionIconText}>
              <FontAwesome5 name="bomb" size={35} color="black" />
             <Text style={styles.instructionText}>More bombs will increase the score multiplier</Text>
            </View>
    
            <View style={styles.instructionIconText}>
              <Ionicons name="timer-outline" size={35} color="black" />
              <Text style={styles.instructionText}>Player have 5 seconds to choose the next tile</Text>
            </View>
            <View style={styles.instructionIconText}>
              <FontAwesome6 name="sad-cry" size={35} color="black" />
              <Text style={styles.instructionText}>You lose if a bomb is opened or timer runs out</Text>
            </View>
            <View style={styles.instructionIconText}>
              <MaterialCommunityIcons name="gesture-tap-button" size={35} color="black" />
              <Text style={styles.instructionText}>Player can click Bail to quit and get current Score</Text>
            </View>
            <View style={{alignItems:'center'}}>
              <Pressable
                onPress={hideInstructions}
                style={styles.homepageButton}
                >
                <Text style={styles.buttonText}>Close</Text>
              </Pressable>
            </View>
          </View>
       </Modal>
    </View>
  );
}
