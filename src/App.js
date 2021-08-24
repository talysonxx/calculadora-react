import React, {useState, useEffect} from 'react'

function App() {
  useEffect(() => {
    document.title = 'Calculadora - React'
  })

  // useStates
  const [valorTela, setValorTela] = useState('')
  const [resultado, setResultado] = useState(0)
  // const [acumulador, setAcumulador] = useState(0)
  const [operado, setOperado] = useState(false)

  // componentes
  const Tela = (valor, resultado) => {
    return(
      <div style={cssTela}>
        <span style={cssTelaOperacao}>{valor}</span>
        <span style={cssTelaResultado}>{resultado}</span>
      </div>
    )
  }
  const Button = (label, onClick) => {
    return(
      <button style={cssButton} onClick={onClick}>{label}</button>
    )
  }

  // estilos
  const cssContainer = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    width: 300,
    border: '1px solid #000',
    fontFamily: 'Roboto',
    margin: '50px auto'
  }
  const cssBotoes = {
    flexDirecion: 'row',
    flexWrap: 'wrap'
  }
  const cssTela = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#444',
    paddingRight: 20,
    paddingLeft: 20,
    width: 260,
    overflow: 'auto'
  }
  const cssTelaOperacao = {
    fontSize: 20,
    color: '#fff',
    height: 20
  }
  const cssTelaResultado = {
    fontSize: 50,
    color: '#fff'
  }
  const cssButton = {
    fontSize: 30,
    height: 75,
    width: 75,
    padding: 20,
    backgroundColor: '#000',
    color: '#fff',
    borderColor: '#000',
    textAlign: 'center',
    outline: 'none',
    borderRadius: 0,
    border: '1px solid transparent'
  }

  // funções
  function adicionarDigitoTela(digito){
    if((digito === '+' || digito === '-' || digito === '*' || digito === '/') && operado){
      console.log('adicionarDigitoTela')
      setOperado(false)
      setValorTela(resultado + digito)
      return
    }
    if(operado){
      setValorTela(digito)
      setResultado(0)
      setOperado(false)
      console.log('operado: ' + operado)
      return
    }
    const valorDigitadoTela = valorTela + digito
    setValorTela(valorDigitadoTela)
    return
  }
  function limparMemoria(){
    setOperado(false)
    setValorTela('')
    setResultado(0)
    // setAcumulador(0)
    console.log('memória limpa')
    return
  }
  function operacao(oper){
    // bs = backspace
    if(oper === 'bs'){
      let vTela = valorTela
      // substring retorna parte da string
      vTela = vTela.substring(0, (vTela.length - 1))
      setValorTela(vTela)
      setOperado(false)
      return
    }
    try{
      // eval faz o cáculo de tudo que está na tela
      const r = eval(valorTela)
      // setAcumulador(r)
      setResultado(r)
      setOperado(true)
    }
    catch{
      setResultado('ERRO!')
      console.log('ocorreu algum erro')
    }
    finally{
      console.log('fim')
    }
  }

  return(
    <>
      <div style={cssContainer}>
        <h3>Calculadora simples</h3>

        {Tela(valorTela, resultado)}

        <div style={cssBotoes}>
          {Button('AC', limparMemoria)}
          {Button('(', () => adicionarDigitoTela('('))}
          {Button(')', () => adicionarDigitoTela(')'))}
          {Button('/', () => adicionarDigitoTela('/'))}
          {Button('7', () => adicionarDigitoTela('7'))}
          {Button('8', () => adicionarDigitoTela('8'))}
          {Button('9', () => adicionarDigitoTela('9'))}
          {Button('*', () => adicionarDigitoTela('*'))}
          {Button('4', () => adicionarDigitoTela('4'))}
          {Button('5', () => adicionarDigitoTela('5'))}
          {Button('6', () => adicionarDigitoTela('6'))}
          {Button('-', () => adicionarDigitoTela('-'))}
          {Button('3', () => adicionarDigitoTela('3'))}
          {Button('2', () => adicionarDigitoTela('2'))}
          {Button('1', () => adicionarDigitoTela('1'))}
          {Button('+', () => adicionarDigitoTela('+'))}
          {Button('0', () => adicionarDigitoTela('0'))}
          {Button('.', () => adicionarDigitoTela('.'))}
          {Button('bs', () => operacao('bs'))}
          {Button('=', () => operacao('='))}
        </div>
      </div>
    </>
  )
}

export default App
