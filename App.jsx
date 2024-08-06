import React, {useState} from 'react'
import './App.css'

function App() {
  const [type,setType]=useState();
  const [job,setJob]=useState();
  const [money,setMoney]=useState();
  return (
     <div className='cart_opeartion'>
      <div className='form_page'>
        <h1>COURSE WE OFFERED</h1>

        <form action="">
          <div className='first_box'>
            
          <label htmlFor="title" >Title</label> <br />
          <input type="text" className='input_sub'/> <br />

          <label htmlFor="Number_of_slots">Number Of Slots</label> <br />
          <input type="number" className='input_sub'/> <br />  

          <label htmlFor="course_mode">Course Mode</label><br />
          <input type="checkbox"/> Online
          <input type="checkbox" />Offline <br />

          <label htmlFor="Course_Type">Course Type</label> <br />
          <input type="radio" name='course_type' value='Technical Course' onChange={e=>setType(e.target.value)} />Technical Course
          <input type="radio" name='course_type' value='Non-Technical Course' onChange={e=>setType(e.target.value)} />Non-Technical Course <br />

          <label htmlFor="Money_back_Guarantee">Money Back Guarantee</label> <br />
          <input type="radio" name='Money_guarantee' value='Yes' onChange={e=>setJob(e.target.value)} />Yes
          <input type="radio" name='Money_guarantee' value='No' onChange={e=>setJob(e.target.value)} />No <br /> 

          <label htmlFor="Syllabus">Syllabus</label><br />
          <input type="file" />
          <br /><br />

          <button>Submite</button>
          </div>
         
         <div className='second_box'>
          
          <label htmlFor="Description">Description</label><br />
          <textarea name="description" className='input_sub'></textarea><br /> 
          
          <label htmlFor="Duration">Durations</label> <br />
          <input type="number,text" className='input_sub'/><br />
        
          <label htmlFor="Cost_of_Course">Coust Of Course</label> <br />
          <input type="number" className='input_sub'/><br />
          
          <label htmlFor="Job_Guarantee">Job Guarantee</label> <br />
          <input type="radio" name='Job_guarantee' value='Yes' onChange={e=>setMoney(e.target.value)} />Yes
          <input type="radio" name='Job_guarantee' value='No' onChange={e=>setMoney(e.target.value)} />No <br />
         

          <label htmlFor="Course_starting_date">Course Starting Date</label><br />
          <input type="date" className='input_sub'/><br />
          </div>
        
<br /><br />  



        </form>
        
        
      </div>
         
     </div>
  )
}

export default App
