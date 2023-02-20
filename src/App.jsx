import { useState } from 'react'
import './App.css'

function App() {
  const [ingles, setIngles] = useState(true);

  return (
    <div className="App">
      <header className='header'>Inglês para Informática</header>
      <br />
      <h1 className='titulo'>What are computers?</h1>
      <span><a onClick={() => setIngles(true)} href="#">Inglês</a> | <a onClick={() => setIngles(false)} href="#">Português</a></span>
      <br />
      {ingles ? <article className='artigo'>
        <p><span className='primeiraletra'>W</span>elcome to our blog! Today, we're going to talk about a basic question: what are computers?</p>
        <p>Simply put, a computer is a machine that processes information. It can do many things, like store, retrieve, process, and share information. Computers have two parts: the physical parts (like the processor, memory, hard drive, and peripherals) and the instructions that the computer follows to do tasks (called software).</p>
        <p>Computers are used in lots of ways in modern life, from doing everyday things like emailing and browsing the internet, to doing more advanced things like simulating complex processes, designing new technologies, and analyzing large data sets in fields like medicine, science, and engineering.</p>
        <p>If you're interested in computers and want to learn more, stay tuned for more interesting and fun posts on our blog!</p>
      </article> : <article className='artigo'>
        <p><span className='primeiraletra'>B</span>em-vindo ao nosso blog! Hoje, vamos falar sobre uma pergunta básica: o que são computadores?</p>
        <p>Simplificando, um computador é uma máquina que processa informações. Ele pode fazer muitas coisas, como armazenar, recuperar, processar e compartilhar informações. Os computadores têm duas partes: as peças físicas (como o processador, memória, disco rígido e periféricos) e as instruções que o computador segue para realizar tarefas (chamadas de software).</p>
        <p>Os computadores são usados de muitas maneiras na vida moderna, desde atividades cotidianas como enviar e-mails e navegar na internet, até coisas mais avançadas como simular processos complexos, projetar novas tecnologias e analisar grandes conjuntos de dados em áreas como medicina, ciência e engenharia.</p>
        <p>Se você está interessado em computadores e quer aprender mais, fique ligado para mais postagens interessantes e divertidas em nosso blog!</p>
      </article>}
    </div>
  )
}

export default App
