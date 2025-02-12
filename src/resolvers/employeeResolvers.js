const Employee = require("../models/Employee");

module.exports = {
    Query: {
        getEmployees: async () => await Employee.find(),
        searchEmployeeById: async (_, { eid }) => await Employee.findById(eid),
        searchEmployeeByDesignationOrDepartment: async (_, { designation, department }) => {
            return await Employee.find({ $or: [{ designation }, { department }] });
        }
    },
    Mutation: {
        addEmployee: async (_, args) => {
            const employee = new Employee(args);
            await employee.save();
            return employee;
        },
        updateEmployee: async (_, { eid, ...updates }) => {
            return await Employee.findByIdAndUpdate(eid, updates, { new: true });
        },
        deleteEmployee: async (_, { eid }) => {
            await Employee.findByIdAndDelete(eid);
            return "Employee deleted successfully";
        }
    }
};
