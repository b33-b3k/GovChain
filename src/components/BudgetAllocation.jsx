// import React, { Component } from 'react';
// import {
//   allocateBudget,
//   adjustBudget,
//   getBudget,
// } from '../../src/Blockchain.services'; // Replace with the correct path

// // Make sure the functions in the module match your actual implementation

// class BudgetAllocationForm extends Component {
//   constructor() {
//     super();
//     this.state = {
//       departmentName: '',
//       budget: 0,
//       newBudget: 0, // Add a new state variable for adjusting the budget
//     };
//   }

//   handleAllocateBudget = async () => {
//     const { departmentName, budget } = this.state;

//     try {
//       // Call the allocateBudget function from your contract interaction module
//       await allocateBudget(departmentName, budget);

//       // Handle the successful allocation here, e.g., show a success message
//       console.log(`Budget allocated to ${departmentName}: ${budget} ETH`);

//       // Optionally, you can update the component's state or perform other actions
//       this.setState({
//         departmentName: '', // Clear the input fields
//         budget: 0,
//       });
//     } catch (error) {
//       // Handle any errors that occur during allocation
//       console.error('Error allocating budget:', error);
//     }
//   };

//   // Add a function to handle adjusting the budget
//   handleAdjustBudget = async () => {
//     const { departmentName, newBudget } = this.state;

//     try {
//       // Call the adjustBudget function from your contract interaction module
//       await adjustBudget(departmentName, newBudget);

//       // Handle the successful adjustment here, e.g., show a success message
//       console.log(`Budget adjusted for ${departmentName}: ${newBudget} ETH`);

//       // Optionally, you can update the component's state or perform other actions
//       this.setState({
//         departmentName: '', // Clear the input fields
//         newBudget: 0,
//       });
//     } catch (error) {
//       // Handle any errors that occur during adjustment
//       console.error('Error adjusting budget:', error);
//     }
//   };

//   // Add a function to handle getting the budget
//   handleGetBudget = async () => {
//     const { departmentName } = this.state;

//     try {
//       // Call the getBudget function from your contract interaction module
//       const budget = await getBudget(departmentName);

//       // Handle the successful retrieval here, e.g., display the budget
//       console.log(`Budget of ${departmentName}: ${budget} ETH`);

//       // Optionally, you can update the component's state or UI to show the budget
//     } catch (error) {
//       // Handle any errors that occur during budget retrieval
//       console.error('Error getting budget:', error);
//     }
//   };

//   render() {
//     const { departmentName, budget, newBudget } = this.state;

//     return (
//       <div className="bg-white rounded-lg p-4 shadow-md">
//         <h2 className="text-2xl font-semibold mb-4">Budget Operations</h2>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="departmentName">
//             Department Name
//           </label>
//           <input
//             className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
//             type="text"
//             placeholder="Department Name"
//             value={departmentName}
//             onChange={(e) => this.setState({ departmentName: e.target.value })}
//             id="departmentName"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="budget">
//             Budget (ETH)
//           </label>
//           <input
//             className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
//             type="number"
//             placeholder="Budget (ETH)"
//             value={budget}
//             onChange={(e) => this.setState({ budget: e.target.value })}
//             id="budget"
//           />
//         </div>
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
//           onClick={this.handleAllocateBudget}
//         >
//           Allocate
//         </button>

//         {/* Add input fields and buttons for adjusting and getting the budget */}
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newBudget">
//             New Budget (ETH)
//           </label>
//           <input
//             className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
//             type="number"
//             placeholder="New Budget (ETH)"
//             value={newBudget}
//             onChange={(e) => this.setState({ newBudget: e.target.value })}
//             id="newBudget"
//           />
//         </div>
//         <button
//           className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-green"
//           onClick={this.handleAdjustBudget}
//         >
//           Adjust Budget
//         </button>
//         <button
//           className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-yellow"
//           onClick={this.handleGetBudget}
//         >
//           Get Budget
//         </button>
//       </div>
//     );
//   }
// }

// export default BudgetAllocationForm;
