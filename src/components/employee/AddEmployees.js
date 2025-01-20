'use client';
import { useState } from 'react'
import styles from './addEmp.module.css'
import { useDispatch } from 'react-redux';
import { addEmployee } from '../../reduxToolkit/slices/slice';
import Link from 'next/link';
const AddEmployees = () => {
    const [empName, setEmplName] = useState('');
    const dispatch = useDispatch();
    const dataDispatch = () => {
        // console.log(empName);
    dispatch(addEmployee(empName))
    setEmplName('');
    }

  return (
    <div className={styles.container}>
        <h2 className={styles.title}>Add Employee</h2>
        <input type="text" name="name" value={empName} onChange={(e)=> setEmplName(e.target.value)} className={styles.input} placeholder='Enter Employee data'/>
        <button onClick={dataDispatch} className={styles.button}>Add</button>
        <Link href='/delete-employee'>Delete</Link>
    </div>
  )
}

export default AddEmployees