// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BudgetAllocation {
    address public admin;

    struct Department {
        uint256 budget;
        bool exists;
    }

    mapping(string => Department) public departments;

    event BudgetAllocated(string department, uint256 budget);
    event BudgetAdjusted(string department, uint256 newBudget);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function allocateBudget(
        string memory departmentName,
        uint256 budget
    ) external onlyAdmin {
        require(
            !departments[departmentName].exists,
            "Department already exists"
        );
        departments[departmentName] = Department(budget, true);
        emit BudgetAllocated(departmentName, budget);
    }

    function adjustBudget(
        string memory departmentName,
        uint256 newBudget
    ) external onlyAdmin {
        require(
            departments[departmentName].exists,
            "Department does not exist"
        );
        departments[departmentName].budget = newBudget;
        emit BudgetAdjusted(departmentName, newBudget);
    }

    function getBudget(
        string memory departmentName
    ) external view returns (uint256) {
        require(
            departments[departmentName].exists,
            "Department does not exist"
        );
        return departments[departmentName].budget;
    }
}
