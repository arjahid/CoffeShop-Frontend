
import { NavLink, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeCard from './components/CoffeCard';

function App() {
  const coffes=useLoaderData();

  return (
    <>
     
     
      <h1 className='text-6xl text-purple-600'>Hot Cold Coffe:{coffes.length}</h1>
      <NavLink to='/addcoffe'><button className='btn btn-accent'>Add Coffe</button> </NavLink>
     <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
     {
        coffes.map(coffe=><CoffeCard key={coffe._id} coffe={coffe}></CoffeCard>)
      }
     </div>
      
    </>
  )
}

export default App
