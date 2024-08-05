import logo from './logo.svg';
import './App.css';
import ChallengeList from './components/ChallengeList';
import { useEffect, useState } from 'react';
import axios from 'axios'
import AddChallenge from './components/AddChallenge';

function App() {
  const [challenges, setChallenges] = useState([
    
  ]);
  useEffect(()=>{
    fetchChallenges()
  }, [])
  const fetchChallenges = async () => {
    const response = await axios.get('http://localhost:8080/challenges')
    setChallenges(response.data)  
  }
  const handleChallengeAdd = (challenge) => {
    fetchChallenges()
  }

  return (
    <div className="App">
       <h1>Monthly Challenges</h1>
       <AddChallenge onChallengeAdd={handleChallengeAdd}/>
       <ChallengeList challenges={challenges}/>
    </div>
  
  );
}

export default App;
