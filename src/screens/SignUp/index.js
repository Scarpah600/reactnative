import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { Container,
          InputArea,
          CustomButton,
          CustomButtonText,
          SignMessageButton,
          SignMessageButtonText,
          SignMessageButtonBold
        } from './styles';
import GasLogo from '../../assets/gas.svg';
import SingInput from '../../components/SignInput';
import EmailIconSignUp from '../../assets/email.svg';
import PasswordIconSignUp from '../../assets/padlock.svg';

export default() => {
    const navigation = useNavigation();
    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');


    const handleSignClick = () => {

    }
    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignIn'}]
        });
    }

    return (
        <Container>
            <GasLogo width="100%" height="110" />
            <InputArea>
            <SingInput IconSvg={EmailIconSignUp} 
                           placeholder="Digite seu Nome" 
                           value={nameField}
                           onChangeText={t=>setNameField(t)}/>

                <SingInput IconSvg={EmailIconSignUp} 
                           placeholder="Digite seu E-mail" 
                           value={emailField}
                           onChangeText={t=>setEmailField(t)}/>

                <SingInput IconSvg={PasswordIconSignUp} 
                           placeholder="Digite sua senha" 
                           value={passwordField}
                           onChangeText={t=>setPasswordField(t)}
                           password={true}/>
                
                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>Cadastrar</CustomButtonText>
                </CustomButton>
            </InputArea>
            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Já Possui uma conta?</SignMessageButtonText>
                <SignMessageButtonBold>Faça Login</SignMessageButtonBold>
            </SignMessageButton>
        </Container>
    );
}