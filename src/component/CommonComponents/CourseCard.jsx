import React, {useState, useEffect, useContext} from 'react';
import ProfImg from '../../assets/ProfImg.png';
import axios from 'axios';
import { UserContext } from '../../store/userContext';




function CourseCard({name, profName, numberOfStudents, enrollBtn, courseId}) {
  
  const {user} = useContext(UserContext);

    const handleEnroll = async () => {
      console.log(courseId)
      // try {
      //   const { data } = await axios.post(`http://localhost:4000/api/course/enroll/${courseId}`, {
      //     studentId: user.studentId
      //   });

      //   if(data){
      //     alert('Student Enrolled successfully')
      //   }
  
      // } catch (error) {
      //   console.log(error);
      // }
    };

  return (
    <div>
        <div className="relative w-72 rounded-lg flex flex-col cursor-pointer overflow-hidden bg-white shadow-lg border">
          
          <div className='absolute w-full bg-[#245DE1] text-white p-3 shadow-lg'>
            <h1 className='text-xl font-semibold'>{name}</h1>
            <h3 className='text-sm'>{profName}</h3>
            <h4 className='text-sm'>student Enrolled: {numberOfStudents}</h4>
          </div>

          <img className='sticky top-11 left-40 right-0 w-32 h-28 ' src={ProfImg}  alt='ProfImg'/>
          
          <ul className='list-disc w-full flex flex-col p-6'>
            {enrollBtn ?
            <>
              <button className='mt-8 rounded-lg' onClick={handleEnroll}>Enroll Course</button>
            </>
            :
            <>
              <li className='w-full'>Assignments</li>
              <li className='w-full'>Notes/Resources</li>
              <li className='w-full'>Question Bank</li>
              <li className='w-full'>Activities</li>
            </>
          }
          </ul>
          
        </div>
    </div>
  )
}

export default CourseCard