import React from 'react'
import { employees } from "../data/employee";

const EmployeesList = () => {

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Employees</h1>

      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Role</th>
              <th className="p-3">Email</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(emp => (
              <tr key={emp.id} className="border-t">
                <td className="p-3">{emp.name}</td>
                <td className="p-3">{emp.role}</td>
                <td className="p-3">{emp.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
   </>
  )
}

export default EmployeesList
