import EmployeeModal from "./components/EmployeeModal";
import EmployeeList from "./components/EmployeeList";
import Engine from "./components/Engine";
import './App.css';

export default function App() {
    const {
        employees,
        isOpen,
        currentEmployee,
        openModal,
        closeModal,
        addOrUpdateEmployee,
        deleteEmployee,
    } = Engine();

    console.log(currentEmployee );

return(
    <div className='App'>
        <h1>ข้อมูลพนักงาน</h1>
        <button onClick={() => openModal(null)}>เพิ่มพนักงาน</button>
        <EmployeeList
            employees={employees}
            openModal={openModal}
            deleteEmployee={deleteEmployee}/>
        <EmployeeModal
            isOpen={isOpen}
            closeModal={closeModal}
            currentEmployee={currentEmployee}
            addOrUpdateEmployee={addOrUpdateEmployee}/>


    </div>
);
}
