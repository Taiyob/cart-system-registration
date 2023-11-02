import './App.css';
import { useState } from 'react';
import Courses from './component/Courses/Courses';
import Credits from './component/Credits/Credits';
import Heading from './component/Heading/Heading';



function App() {
  const [titles,setTitles] = useState([]);
  const [credits,setCredits] = useState(0);
  const handleShowTitle = (course)=> {
    const isExist = titles.find(title=> title.id == course.id);
    if(isExist){
      return alert('Already select');
    }else{
      const primaryCreditAmount = course.credit;
      const newTitle = [...titles, course];
      setTitles(newTitle);
      setCredits(credits + primaryCreditAmount);
    }
  }
  
  return (
    <>
      <Heading></Heading>
      <div className='flex justify-between px-32 mt-20'>
        <Courses handleShowTitle={handleShowTitle}></Courses>
        <Credits titles={titles} credits={credits}></Credits>
      </div>
    </>
  )
}

export default App
