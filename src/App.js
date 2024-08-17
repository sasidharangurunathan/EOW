import './App.css';
import imags from './image/sasi.JPG';

function App() {
  return (
    <div>
      <div class="header">
        <a href="#default" class="logo">EOW</a>
        <div class="header-right">
          <a class="active" href="#home">Home</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
      <>
        <center><p>EOW On Watchs</p>
          <h1>Our Team mates</h1></center>

        <><div class="card">
          <img src={imags} alt="Logo" />
          <h1>Sasidharan G</h1>
          <p>Associate software Developer</p>
        </div>
        </>

        <div>
          <li>Anand</li>
          <li>Ganesh</li>
          <li>Logesh</li>
          <li>Sasidharan</li>
          <li>Deepan</li>
        </div>
      </>
    </div>
  );
}

export default App;

