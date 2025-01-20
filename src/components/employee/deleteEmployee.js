'use client';
import { useDispatch, useSelector } from 'react-redux'
import styles from './showEmp.module.css';
import { removeEmployee } from '../../reduxToolkit/slices/slice';

const DeleteEmployee = () => {
    const data = useSelector((value) => value.employeeData.employees)
    const dispatch = useDispatch();

  return (
    <>
    <h4>Delete Employee</h4>
    {
        data.map((item)=>(
            <div key={item.id}>
            <span key={item.id}>{item.name}</span>
            <button className={styles.button} onClick={() => dispatch(removeEmployee(item.id))}>Delete</button>
            </div>
        ))
    }
    </>
  )
}

export default DeleteEmployee