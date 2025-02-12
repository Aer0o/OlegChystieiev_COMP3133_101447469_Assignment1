const { gql } = require("apollo-server-express");

const employeeTypeDefs = gql`
    type Employee {
        id: ID!
        first_name: String!
        last_name: String!
        email: String!
        gender: String!
        designation: String!
        salary: Float!
        date_of_joining: String!
        department: String!
        employee_photo: String
    }

    type Query {
        getEmployees: [Employee]
        searchEmployeeById(eid: ID!): Employee
        searchEmployeeByDesignationOrDepartment(designation: String, department: String): [Employee]
    }

    type Mutation {
        addEmployee(first_name: String!, last_name: String!, email: String!, gender: String!,
                    designation: String!, salary: Float!, date_of_joining: String!, department: String!,
                    employee_photo: String): Employee
        updateEmployee(eid: ID!, salary: Float, designation: String, department: String): Employee
        deleteEmployee(eid: ID!): String
    }
`;

module.exports = employeeTypeDefs;
