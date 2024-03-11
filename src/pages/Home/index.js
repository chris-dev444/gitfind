import { Header } from '../../components/Header';
import background from '../../assets/background.png'

import './styles.css';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="conteudo">
          <img src={background} className="background" alt="background app"/>
          <div className='info'>
            <div>
              <input type='text' name='usuario' placeholder='@username'/>
              <button>Buscar</button>
            </div>
            <div className='perfil'>
              <img src='https://avatars.githubusercontent.com/u/153192900?v=4' className='profile' alt='imagem de perfil'/>
              <div>
                  <h3>Pablo Henrique</h3>
                  <span>@chris-dev444</span>
                  <p>Descrição</p>
              </div>
            </div>
            <hr/>
          </div>
      </div>
    </div>
  );
}

export default App;