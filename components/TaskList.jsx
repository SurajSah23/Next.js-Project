// 'use client';

// import { useState, useEffect } from 'react';

// export function TaskList() {
//   const [tasks, setTasks] = useState([]);
//   const [editTask, setEditTask] = useState(null);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const API_URL = 'http://localhost:5000/api';

//   // Fetch tasks from backend
//   const fetchTasks = async () => {
//     try {
//       const response = await fetch(`${API_URL}/tasks`);
//       const data = await response.json();
//       setTasks(data);
//     } catch (error) {
//       console.error('Error fetching tasks:', error);
//     }
//   };

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   // Delete Task
//   const deleteTask = async (id) => {
//     try {
//       await fetch(`${API_URL}/tasks/${id}`, { method: 'DELETE' });
//       fetchTasks(); // Refresh tasks
//     } catch (error) {
//       console.error('Error deleting task:', error);
//     }
//   };

//   // Edit Task
//   const handleEdit = (task) => {
//     setEditTask(task.id);
//     setTitle(task.title);
//     setDescription(task.description);
//   };

//   // Update Task
//   const updateTask = async () => {
//     try {
//       await fetch(`${API_URL}/tasks/${editTask}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ title, description }),
//       });
//       setEditTask(null);
//       setTitle('');
//       setDescription('');
//       fetchTasks(); // Refresh tasks
//     } catch (error) {
//       console.error('Error updating task:', error);
//     }
//   };

//   return (
//     <div className="bg-white shadow-md rounded-lg p-4">
//       <h2 className="text-xl font-bold mb-4">Task List</h2>
//       {tasks.map((task) => (
//         <div key={task.id} className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded">
//           {editTask === task.id ? (
//             <>
//               <input 
//                 value={title} 
//                 onChange={(e) => setTitle(e.target.value)} 
//                 className="border p-1 mr-2"
//               />
//               <input 
//                 value={description} 
//                 onChange={(e) => setDescription(e.target.value)} 
//                 className="border p-1 mr-2"
//               />
//               <button onClick={updateTask} className="bg-green-500 text-white px-2 py-1 rounded">Save</button>
//             </>
//           ) : (
//             <>
//               <div>
//                 <p className="font-semibold">{task.title}</p>
//                 <p className="text-sm text-gray-600">{task.description}</p>
//               </div>
//               <div>
//                 <button onClick={() => handleEdit(task)} className="bg-yellow-500 text-white px-2 py-1 mr-2 rounded">Edit</button>
//                 <button onClick={() => deleteTask(task.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
//               </div>
//             </>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }
