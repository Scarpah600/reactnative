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

import EmailIcon from '../../assets/email.svg';
import PasswordIcon from '../../assets/padlock.svg';

export default() => {
    const navigation = useNavigation();
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');


    const handleSignClick = () => {

    }
    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]
        });
    }

    return (
        <Container>
            <GasLogo width="100%" height="110" />
            <InputArea>
                <SingInput IconSvg={EmailIcon} 
                           placeholder="Digite seu E-mail" 
                           value={emailField}
                           onChangeText={t=>setEmailField(t)}/>

                <SingInput IconSvg={PasswordIcon} 
                           placeholder="Digite sua senha" 
                           value={passwordField}
                           onChangeText={t=>setPasswordField(t)}
                           password={true}/>
                
                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>Login</CustomButtonText>
                </CustomButton>
            </InputArea>
            <SignMessageButton>
                <SignMessageButtonText>Ainda não possui conta?</SignMessageButtonText>
                <SignMessageButtonBold
                            onPress={handleMessageButtonClick}>
                            Cadastra-se
                        </SignMessageButtonBold>
            </SignMessageButton>
        </Container>
    );
}