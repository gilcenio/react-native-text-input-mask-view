# react-native-text-input-mask-view
Lib for React Native, TextInput with custom masks

## Install

`npm i react-native-textinputmaskview`
`yarn add react-native-textinputmaskview`

## Usage (react-native-text-input-mask-view)

For all the masks you will use in this way:

```jsx
import {TextInputMaskMoney, TextInputMaskCNPJ, TextInputMaskCPF, TextInputMaskCep, TextInputMaskTel} from 'react-native-textinputmaskview'

//...

export default function App() {
  const [text, setText] = useState()


  return (
      <TextInputMaskMoney 
        // dont forget to set the "value" and "onChangeText" props
        value={text} 
        style={styles.input}
        onChangeText={setText}
      />
  );
}
```
## OBS: for the 'CNPJ, CPF, CEP, Tel' code masks useState must be receiving a string as an example below' 
```jsx
  const [cnpj, setCnpj] = useState(String)
  const [cpf, setCpf] = useState(String)
  const [cep, setCep] = useState(String)
  const [tel, setTel] = useState(String)
```

### Cel Phone

Mask: `(99) 9 9999-9999`

```jsx
  <TextInputMaskTel 
    // dont forget to set the "value" and "onChangeText" props
    value={text} 
    style={styles.input}
    onChangeText={setText}
  />
```
### CPF

Mask: `999.999.999-99`

Sample code

```jsx
  <TextInputMaskCPF 
    // dont forget to set the "value" and "onChangeText" props
    value={text} 
    style={styles.input}
    onChangeText={setText}
  />
```

### CNPJ

Mask: `99.999.999/9999-99`

Sample code

```jsx
  <TextInputMaskCNPJ 
    // dont forget to set the "value" and "onChangeText" props
    value={text} 
    style={styles.input}
    onChangeText={setText}
  />
```

### Money

Mask: `99.999,99`

Sample code

```jsx
  <TextInputMaskMoney 
    // dont forget to set the "value" and "onChangeText" props
    value={text} 
    style={styles.input}
    onChangeText={setText}
  />
```

### Zip Code

Mask: `99.999-999`

Sample code

```jsx
  <TextInputMaskCep 
    // dont forget to set the "value" and "onChangeText" props
    value={text} 
    style={styles.input}
    onChangeText={setText}
  />
```