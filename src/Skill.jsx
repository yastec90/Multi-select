import React from 'react';
import style from './index.module.css'
import App from './App'
import { useState } from 'react';
import { useEffect } from 'react';
 const options =[
    {label: 'first', value:1},
    {label: 'second', value:2},
    {label: 'third', value:3},
    {label: 'fouth', value:4},
    {label: 'fifth', value:5},
    {label: 'sixth', value:6},
  ];

 
const Skill =()=>{
    
    const [isOpen, setIsOpen]=useState(false);
    const [highlightedIndex, setHighlightedIndex]=useState(0);
    const [value,setValue]= useState([]);
    const arrLenght =  value.length;
    

    const clearAllOption=()=>{
        console.log('inside the clearOption');
        setValue([]);

           }
    const clearSingleOption=(single)=>{
     const remain = value.filter((o) => o !== single)
         setValue(remain);
        //  onChange([value.filter((o) =>  o!==single )]);

    }

    const isOptionSelected = (option)=>{
        
        return value.includes(option);
    }

    const onChange =(o)=>{
        console.log('inside the onChange')
        setValue([...value , o]);
    }

   useEffect (()=>{
     if (isOpen) setHighlightedIndex(0);
   },[isOpen])



    const selectOption= (option)=>{

        if(!value.includes(option)){
                onChange(option)
        }

}

    
return (
<div className='multiSkillContainer'>
    <span className="skillHead">Multi-skill select</span>
 <div  
 onBlur={()=>setIsOpen(false) } 
     onClick={()=>setIsOpen(prev=> !prev)} tabIndex={0} 
      className={style.container} >
         
     <span className={style.value}> 
         
     {
      
        arrLenght > 0 ? value.map( skill =>
            
            (

                <button key={skill.value} onClick={e => { 
                    e.stopPropagation(); clearSingleOption(skill);
                }}
                className={style['option-badge']}>     
                {skill.label }
                
                <span className={style['remove-btn']}>&times;</span>
                </button>
            )

) : ''
    }
 
     </span>
   
   <button onClick={e =>{ e.stopPropagation(); clearAllOption() } } 

className={style['clear-btn']}>&times;</button>

     <div className={style.divider}></div>
     <div  className={style.caret}></div>

     <ul className={`${style.options} ${isOpen ? style.show: ''}`}>
         
         {options.map((option, index)=>(

             <li key={index} onClick={(e)=>{
                 e.stopPropagation();
                 selectOption(option);
                 setIsOpen(false);
                
             }

             }      
              onMouseEnter={()=> setHighlightedIndex(index)}
             className={`${style.option}  
             ${isOptionSelected(option) ? style.selected : ''}
            ${index == highlightedIndex ? style.highlighted: ''}
              
             `}>
                 {option.label}
             </li>  
                 )
         )}
     </ul> 
   
</div>
</div>
   )
}
 
export default Skill;