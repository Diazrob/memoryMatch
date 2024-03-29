import * as SQLite from 'expo-sqlite';
import { MaterialCommunityIcons, Feather, MaterialIcons,FontAwesome5,Ionicons, FontAwesome6 } from '@expo/vector-icons';
import {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, Pressable, Image, Modal } from 'react-native';
import styles from '../styles/styleSheet';
import { Link } from 'expo-router';

export default function GameMode () {

  return (
    
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image style={{width:400,height: 100, resizeMode:"cover"}} source={require('../assets/logo.png')}/>
      </View>
      <View style={styles.container}>
        <Pressable 
        style={styles.easy}
        >
          <Link
          href={{
            pathname: "/easy",
          }}
          >
            <Text style={styles.subtitle}>Easy</Text>
            </Link>
        </Pressable>
        <Pressable 
        style={styles.medium}
        >
          <Link
          href={{
            pathname: "/medium",
          }}
          >
            <Text style={styles.subtitle}>Medium</Text>
            </Link>
        </Pressable>
        <Pressable 
        style={styles.hard}
        >
          <Link
          href={{
            pathname: "/hard",
          }}
          >
            <Text style={styles.subtitle}>Hard</Text>
            </Link>
        </Pressable>
        </View>
    </View>
  )
}