import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#003f5c',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    logo: {
      fontWeight:"bold",
      fontSize:50,
      color: "#0ADFC8",
      marginBottom: 40
    },
    inputView:{
      width: "80%",
      backgroundColor:"#465881",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },
    inputText:{
      height:50,
      color:"white"
    },
    forgot:{
      color:"white",
      fontSize:11
    },
    loginBtn:{
      width: "80%",
      backgroundColor: "#0ADFC8",
      borderRadius:25,
      height:50,
      alignItems: "center",
      justifyContent: "center",
      marginTop:40,
      marginBottom:10
    },
    loginText:{
      color:"white"
    }
  });
  
export default styles;