/**
 * \file    styleSheet.js
 * \author  Robee Diaz
 * \date    2024-02-02
 * \brief   css external file that contains the styles of components
 */
import { StyleSheet } from "react-native";

export default StyleSheet.create ({

  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    justifyContent: 'center'
  },
  instruction: {
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 30,
    marginVertical:30,
    backgroundColor: "#DAF7A6"
  },
  startGame: {
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 30,
    marginVertical:30,
    backgroundColor: '#00FBFF'
  },
  main: {
    flex: 1,
    maxWidth: 960,
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    marginTop: 20
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
    fontWeight: "bold"
  },
    nav: {
    height: 60,
    width: "100%",
    backgroundColor:"lightblue",
    justifyContent: "center",
  },
  texts: {
    fontSize: 36,
    color: "#38434D",
  },
  homepageButton: {
    borderWidth: 2,
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 10,
    width:250,
    backgroundColor: '#0369a1',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  instructionModal: {
    height: 'full',
    backgroundColor:'white',
    padding: 20,
    borderRadius: 20,
    marginTop: 60,
  },
  instructionTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  instructionIconText: {
    flexDirection:'row',
    alignItems:'center',
    paddingVertical: 15,
    paddingRight: 20
  },
  instructionText: {
    fontSize: 20,
    marginLeft: 20,
  }, 
  gifContainer: {
    flexDirection: "row",
    width: 400,
    height: 200,
    justifyContent: "space-between",
    marginTop: 30,
  },easy: {
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 30,
    marginVertical:30,
    backgroundColor: '#85C1E9',
    width: 300
  },
  medium: {
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 30,
    marginVertical:30,
    backgroundColor: '#76D7C4',
    width: 300
  },
  hard : {
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 30,
    marginVertical:30,
    backgroundColor: '#F1948A',
    width: 300
  },

});