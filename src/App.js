import './App.css';
import ChatBox from "./UIComponents/ChatBox.js"
import Logo from "./Images/EvilGPTLogo.png"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Header-container">
          <img alt="" className="App-logo" src={Logo}/>
          <span className="App-title"></span>
        </div>
      </header>
      <ChatBox/>
      <br></br>
      <div className="Footer-container">
        <footer style={{fontSize:"15px", fontWeight:"bold"}}>
          <br></br>
          <a rel="noreferrer noopener" target="_blank" href="https://www.linkedin.com/in/paschalcorrigan/">LinkedIn 👥</a>
          <span style={{color:"#F5F5F5"}}> ☞ </span>
          <a rel="noreferrer noopener" target="_blank" href="https://github.com/paschalc24/evil-gpt">GitHub 💻</a><br></br>
          <span style={{color:"#800000"}}>This is an AI</span><br></br>
        </footer>
      </div>
    </div>
  );
}

export default App;