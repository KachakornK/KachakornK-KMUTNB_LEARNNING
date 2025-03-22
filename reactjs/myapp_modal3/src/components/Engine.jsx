import { useState, useEffect } from "react";
export default function Engine() {
  const [employees, setEmployees] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const [URL] = useState("http://localhost/webapp/reactjs/sec2/api.php")

  async function fetchEmployees(){
    const response = await fetch(URL);
    const data = await response.json();
    setEmployees(data);
  }

  useEffect(() => {
    fetchEmployees();
  }, []);

  function openModal(employee){
    setCurrentEmployee(employee);
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
    setCurrentEmployee(null);
  }

  async function addOrUpdateEmployee(employee){
    const method = currentEmployee ? 'PUT' : 'POST';
    const url = URL;

    await fetch(url, {
      method,
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(employee),
    });

    fetchEmployees();
    closeModal();
  };

  async function deleteEmployee(id){
    await fetch(`${URL}?id=${id}`, {method: 'DELETE'});
    fetchEmployees();
  };

  return {
    employees,
    isOpen,
    currentEmployee,
    openModal,
    closeModal,
    addOrUpdateEmployee,
    deleteEmployee,
  };
}