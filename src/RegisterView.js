import { StatusBar } from 'expo-status-bar'; // barra de estados
import { Component } from 'react'; // Componente
import { Actions } from 'react-native-router-flux';
import { validationEmail,validationPassword,validationEmpty } from './Validation';
import { StyleSheet, View, Text, Button, TextInput, Alert, Image} from 'react-native'; // Componente view

export default class LoginView extends Component { // Componente principal de la app
  constructor(props) {
    super(props)
    this.state = {
      textEmailValue: '',
      textUsernameValue: '',
      textPasswordValue: '',
      textConfirmPasswordValue: '',
    }
  }

  // textemail
  onChangeTextInputEmail = (email) => {
    this.setState({textEmailValue: email})
    const emailValid = validationEmail(email)

    if(!emailValid)
      return true
  }

  onChangeTextInputUsername = (username) => {
    this.setState({textUsernameValue: username})
  }

  
  // textpassword
  onChangeTextInputPassword = (password) => {
    this.setState({textPasswordValue: password})
    const passwordValid = validationPassword(password)

    if(!passwordValid)
      return true
  }

  onChangeTextInputConfirmPassword = (Confirmpassword) => {
    this.setState({textConfirmPasswordValue: Confirmpassword})

    if(this.state.textPasswordValue!=Confirmpassword)
      return true
    
  }
    
  textEmpty = (email,password,userName,Confirmpassword) => {
    return validationEmpty(email)||validationEmpty(password)||validationEmpty(userName)||validationEmpty(Confirmpassword)
  }

  showAlert () {
    const mesageEmail = this.onChangeTextInputEmail(this.state.textEmailValue)
    const messagePassword = this.onChangeTextInputPassword(this.state.textPasswordValue)
    const messageConfirmPassword = this.onChangeTextInputConfirmPassword(this.state.textConfirmPasswordValue)
    if(mesageEmail||messagePassword||messageConfirmPassword)
      Alert.alert('Información errónea', 'Porfavor revise la información ingresada');
    else
    Actions.login()
  }

  render() {
    return (
      <View style={styles.container}>
        
        <Text style={styles.text}>Email</Text>
        <TextInput 
          style={styles.input}
          onChangeText={(text)=> this.onChangeTextInputEmail(text)}
          value = {this.state.textEmailValue}
        />

        <Text style={styles.text}>User name</Text>
        <TextInput 
          style={styles.input}
          onChangeText={(text)=> this.onChangeTextInputUsername(text)}
          value = {this.state.textUsernameValue}
        />

        <Text style={styles.text}>Password</Text>
        <TextInput 
          style={styles.input}
          autoCapitalize='none'
          secureTextEntry={true}
          onChangeText={(text)=> this.onChangeTextInputPassword(text)}
          value = {this.state.textPasswordValue}
        />

        <Text style={styles.text}>Confirm password</Text>
        <TextInput 
          style={styles.input}
          autoCapitalize='none'
          secureTextEntry={true}
          onChangeText={(text)=> this.onChangeTextInputConfirmPassword(text)}
          value = {this.state.textConfirmPasswordValue}
        />
      
        <Button
          onPress={this.showAlert.bind(this)}
          title="Register"
          color="#BCAAA4"
          disabled={this.textEmpty(this.state.textEmailValue,this.state.textPasswordValue, this.state.textUsernameValue, this.state.textConfirmPasswordValue)}
          accessibilityLabel="Learn more about this purple button"
        />

        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { //view
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    width: 280,
    textAlign: 'left',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#4E5157',
  },
  input: { //inputText
    height: 40,
    width: 280,
    margin: 12,
    paddingLeft:12,
    borderRadius: 10,
    backgroundColor: '#E8E9EA',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  img_rock:{ //image
    width: 200,
    height: 250,
    marginBottom: 20,
  },
});