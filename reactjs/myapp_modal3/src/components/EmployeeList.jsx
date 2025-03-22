import PropTypes from "prop-types";

export default function EmployeeList({ employees, openModal ,deleteEmployee }) {
    return (
        <>
            <h2>รายชื่อพนักงาน</h2>
            <table>
                <thead>
                    <tr>
                        <th>ชื่อ</th>
                        <th>อายุ</th>
                        <th>ตำแหน่ง</th>
                        <th>การจัดการ</th>
                    </tr>
                </thead>
           
            <tbody>
                {employees.map((employee, index) =>(
                    <tr key={index}>
                        {/* <td>{employee.id}</td> */}
                        <td>{employee.name}</td>
                        <td>{employee.age}</td>
                        <td>{employee.position}</td>
                        <td>
                            <button onClick={() => openModal(employee)}>แก้ไข</button>
                            <button onClick={() => deleteEmployee(employee.id)}>ลบ</button>
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>
        </>
    );
}

EmployeeList.propTypes = {
    employees: PropTypes.array.isRequired,
    openModal: PropTypes.func.isRequired,
    deleteEmployee: PropTypes.func.isRequired,
};