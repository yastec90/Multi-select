import { useState } from 'react'
import './index.module.css'
import Skill from './Skill'
//  import { options } from './data'

// const options =[
//   {label: 'first', value:1},
//   {label: 'second', value:2},
//   {label: 'third', value:3},
//   {label: 'fouth', value:4},
//   {label: 'fifth', value:5},
// ];

const App =()=> {
  // const [value, setValue] = useState([options[0]])
  // const [value2, setValue2] = useState(options[0]);
//  const [isMulti,setIsMulti]= useState(true);
 
  


  return (
       <>
       <Skill 
        //  isMulti
        // options={options} 
        //  value={value} 
        // onChange={o => setValue(o)}
     
       />
        
       {/* <Skill options={options} value={value} onChange={o=> setValue(option[0])}/> */}
       </>
  )
}

export default App
