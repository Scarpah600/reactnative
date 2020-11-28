import React from 'react';
import styled from 'styled-components/native';
import IconSvg from '../assets/email.svg'

export const InputArea = styled.View`
    width: 100%;
    height: 60px;
    background-color:  #ffff;
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
   
`;
const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #268596;
    margin-left: 10px;
`;


export default ({IconSvg,placeholder,value,onChangeText,password}) => {
    return (
        <InputArea>
        <IconSvg width="24" height="24" fill="#000000"/>
        <Input placeholder={placeholder}
               placeholderTextColor="#268596"
               value={value}
               onChangeText={onChangeText}
               secureTextEntry={password}/>
        </InputArea>
    );
}