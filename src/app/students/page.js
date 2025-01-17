'use client';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addStudents } from '../../reduxToolkit/slices/mySlice';

const Students = () => {
    const [std, setStd] = useState('');
    const dispatch = useDispatch();
    const stdData = useSelector((data)=> data.studentData.students)
    
  return (
    <>
    <h2>Register Students</h2>
    <input type='text' placeholder='Enter Your name' onChange={(e)=> setStd(e.target.value)}/>
    <br/><br/>
    <button onClick={()=>dispatch(addStudents(std))}>Register</button>
    <h4>Show Students</h4>
    {
        stdData.length && stdData.map((item)=>(
            <h4 key={item.id}>{item.name}</h4>
        ))
    }
    </>
  );
}

export default Students