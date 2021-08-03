import React from 'react';
import { TextInput } from 'react-native';

export const TextInputMaskMoney = ({value, ...res}) => {

  function formatMoney(number) {
    const numero = String(number)
      .replace(/\D/g,"")
      .replace(/^0+/,"");
  
    let counter = 1;
    let isCommaFound = "notFound"
  
    const formattedStringReversed = Array
      .from(numero.toString())
      .reverse()
      .reduce((acc, i, index, arr) => {
        if (counter == 2 &&
            isCommaFound == "notFound" &&
            (arr.length > 2)) {
          acc = acc + i + ',';
          isCommaFound = "found";
          counter = 0; 
        } else if (counter === 3 && (arr.length != (index + 1))) {
          acc = acc + i + '.'
          counter = 0;
        } else {
          acc = acc + i
        }
  
        counter++
        return acc
  
      }, "")
  
    let formmatedNumber = Array.from(formattedStringReversed)
    .reverse().join("")
  
    if (formmatedNumber.length == 2) {
      formmatedNumber = "0," + formmatedNumber
    } else if (formmatedNumber.length == 1) {
      formmatedNumber = "0,0" + formmatedNumber
    }
  
    return formmatedNumber
  }

  return(
    <TextInput
      value={formatMoney(value)}
      {...res}
    />
  )
}

export const TextInputMaskCep = ({value, ...res}) => {

  function mCEP(cep){
        
    if (cep.length <= 10){
      cep=cep.replace(/\D/g,"")
      cep=cep.replace(/^(\d{2})(\d)/,"$1.$2")
      cep=cep.replace(/\.(\d{3})(\d)/,".$1-$2")
    }else{
      return cep.length - 1 
    }
    return cep
  }

  return(
    <TextInput
      value={mCEP(value)}
      {...res}
    />
  )
}

export const TextInputMaskCPF = ({value, ...res}) => {

  function mCPF(cpf){
    if (cpf.length <= 14){
      cpf=cpf.replace(/\D/g,"")
      cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
      cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
      cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
    }else{
      return cpf.length - 1 
    }
    return cpf
  }

  return(
    <TextInput
      value={mCPF(value)}
      {...res}
    />
  )
}

export const TextInputMaskCNPJ = ({value, ...res}) => {

  function mCNPJ(cnpj){

    if (cnpj.length <= 18) {
      cnpj = cnpj.replace(/\D/g,"")
      cnpj = cnpj.replace(/^(\d{2})(\d)/,"$1.$2")
      cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")
      cnpj = cnpj.replace(/\.(\d{3})(\d)/,".$1/$2")
      cnpj = cnpj.replace(/(\d{4})(\d)/,"$1-$2")
    }else{
      return cnpj.length - 1
    }

    return cnpj
  }

  return(
    <TextInput
      value={mCNPJ(value)}
      {...res}
    />
  )
}

export const TextInputMaskTel = ({value, ...res}) => {

  function mTel(tel) {
    tel=tel.replace(/\D/g,"")
    tel=tel.replace(/^(\d)/,"($1")
    tel=tel.replace(/(.{3})(\d)/,"$1) $2 ")
    if(tel.length == 9) {
      tel=tel.replace(/(.{1})$/,"-$1")
    } else if (tel.length == 10) {
      tel=tel.replace(/(.{2})$/,"-$1")
    } else if (tel.length == 11) {
      tel=tel.replace(/(.{3})$/,"-$1")
    } else if (tel.length == 12) {
      tel=tel.replace(/(.{4})$/,"-$1")
    } else if (tel.length > 12) {
      tel=tel.replace(/(.{4})$/,"-$1")
    } 
    return tel;
  }
  
  return(
    <TextInput
      value={mTel(value)}
      {...res}
    />
  )
}
