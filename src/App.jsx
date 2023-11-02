import './App.css';
import Courses from './component/Courses/Courses';
import Credits from './component/Credits/Credits';
import Heading from './component/Heading/Heading';



function App() {
  
  return (
    <>
      <Heading></Heading>
      <div className='flex justify-between px-32 mt-20'>
        <Courses></Courses>
        <Credits></Credits>
      </div>
    </>
  )
}

export default App
