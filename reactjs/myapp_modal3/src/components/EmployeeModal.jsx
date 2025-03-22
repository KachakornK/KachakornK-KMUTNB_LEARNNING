
import { useState, useEffect } from 'react'
import Modal from 'react-modal'
import PropTypes from 'prop-types'

Modal. setAppElement('#root')
export default  function EmployeeModal({isOpen, closeModal, currentEmployee, addOrUpdateEmployee}) {
  const [name, setname]       =useState('');
  const[age,setage]           =useState('');
  const[position,setposition] =useState('');

  useEffect(() => {
    if(currentEmployee){
      setname(currentEmployee.name)
      setage(currentEmployee.age)
      setposition(currentEmployee.position)
    }else{
      setname('')
      setage('')
      setposition('')
    }
  },[currentEmployee]);

  function handleSubmit(event){
    event.preventDefault();
    const employee = {
      id: currentEmployee ? currentEmployee.id : undefined,
      name,
      age: parseInt(age),
      position,
    };
    addOrUpdateEmployee(employee);
  };
  return(
    <Modal isOpen={isOpen} onRequestClose ={closeModal}>
    <h2>{currentEmployee? "แก้ไขข้อมูลพนักงาน" : "เพิ่มพนักงาน"}</h2>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">ชื่อ : </label>
      <input type='text' id='name' onChange={(e)=>setname(e.target.value)} required/>

      <label htmlFor="age">อายุ</label>
      <input type='number' id='age' value={age} onChange={(e)=>setage(e.target.value)} required />

      <label html for="position">ตำแหน่ง</label>
      <input type='text' id='position' value={position} onChange={(e)=>setposition(e.target.value)} required />

      <button type="submit"> {currentEmployee? 'อัปเดตข้อมูล': 'บันทึกข้อมูล'}</button>
      <button type='button' onClick={closeModal}>ปิด</button>
    </form>
    </Modal>
  );
}

EmployeeModal.PropTypes ={
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  currentEmployee: PropTypes.object,
  addOrUpdateEmployee: PropTypes.func.isRequired,
};


