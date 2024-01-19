import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';
import StudentImg from '../../../assets/ProfImg.png';
import { Data } from '../Datas/Data';

import Cookies from 'js-cookie';


function Students() {

    const [courses,setCourses] = useState(Data);
    const [data,setData] = useState([]);

    // console.log('Courses--------->',courses);
  


















    useEffect(() => {
      const fetchData = async () => {
        try {
          const token = Cookies.get('token');
          const response = await fetch(
            "https://assignment-portal-server.onrender.com/api/profile?role=teacher", {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          
          if (response.ok) {
            const data = await response.json();
            setData(data);
          } else {
            console.error("Error getting data. Status:", response.status);
          }
        } catch (error) {
          console.error("Error getting data:", error);
        }
      };
    fetchData();
},[])

console.log('Courses Info ---> ',data);




























  return (
    <div className=' w-full sm:h-full  p-2 overflow-y-scroll gap-2 sm:gap-10 flex flex-col'>
      <div className=''>
      <div className='w-full text-xl sm:text-2xl flex flex-col sm:flex-row sm:justify-between sm:items-center px-7 bg-[#245DE1] text-white rounded-lg'>
        <h2>Courses : </h2>
        <div className='flex w-full justify-between sm:w-fit items-center sm:gap-3 '>
          <p className=''>Name of Student</p>
          <img className='w-28' src={StudentImg} alt='StudentImg'/>
          {/* <CgProfile className="text-5xl"/> */}
        </div>
      </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-24 xl:gap-28 m-auto '>
          {
            courses.map((course) => <Link to='/students/studentdetails'><CourseCard key={course.id} course={course} /></Link>)
          }
      </div>
    </div>
  )
}

export default Students