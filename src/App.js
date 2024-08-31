import IdCard from './components/IdCard/IdCard.js'; 
import './components/IdCard/IdCard.css'; 
import Greetings from './components/Greetings/Greetings.js';
import  './components/Greetings/Greetings.css';
import Random from './components/Random/Random.js';
import  './components/Random/Random.css';

function App() {
  return (
    <div className="app-container">
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Delores'
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <ul className="greetings-list">
        <li>
          <Greetings lang="de">Ludwig</Greetings>
        </li>
        <li>
          <Greetings lang="fr">François</Greetings>
        </li>
      </ul>

      <ul className="random-list">
      <li>
      <Random min={1} max={6} />
      </li>

      <li>
      <Random min={1} max={100} />
      </li>
      </ul>

     </div>

  );
}

export default App;
