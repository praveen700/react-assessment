import React, { useEffect, useState } from 'react';
import './App.css';
import Assessments from './components/Assessments/Assessments'
import { AccountProvider } from './context/account.context'
import useAssessments from './hooks/useAssessments';


function App() {
  const { assessments } = useAssessments();
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };
    // Add event listener to window resize event
    window.addEventListener('resize', handleResize);
    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const backgroundColorFind = (Assessment) => {
    return Assessment?.tag === 'Health' ? 'red' :
      Assessment?.tag === 'Food' ? 'Purple' :
        Assessment?.tag === 'Housing' ? "Light blue" :
          Assessment?.tag === 'No tag' ? "Dark blue" :
            '';
  }
  return (
    <div className="App">
      <AccountProvider>
        <Assessments 
          assessments={assessments}
          innerWidth={innerWidth}
          backgroundColorFind={backgroundColorFind} />
      </AccountProvider>
    </div>
  );
}

export default App;
