import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';

const users = [
  {
    name: 'Alex Morgan',
    role: 'Admin',
    email: 'alex@smarthome.com',
    status: 'Active',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Jamie Lee',
    role: 'Homeowner',
    email: 'jamie@smarthome.com',
    status: 'Active',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'Morgan Yu',
    role: 'Guest',
    email: 'morgan@smarthome.com',
    status: 'Pending',
    avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
  },
  {
    name: 'Taylor Kim',
    role: 'Admin',
    email: 'taylor@smarthome.com',
    status: 'Suspended',
    avatar: 'https://randomuser.me/api/portraits/women/66.jpg',
  },
];

export default function UserLogs() {
  return (
    <div className="flex-1 bg-white p-8">
      {/* Breadcrumb */}
      <div className="flex justify-between items-center mb-6">
        <div className="text-sm text-gray-600 flex gap-1">
          <span>Dashboard</span>
          <span>{'>'}</span>
          <span className="font-semibold text-black">Logs</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium">Alex Morgan</span>
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>

      {/* User List */}
      <h2 className="text-xl font-bold mb-4">User List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="text-gray-500 border-b">
            <tr>
              <th className="py-2">Name</th>
              <th className="py-2">Role</th>
              <th className="py-2">Email</th>
              <th className="py-2">Status</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-3 flex items-center gap-3">
                  <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                  {user.name}
                </td>
                <td className="py-3">{user.role}</td>
                <td className="py-3">{user.email}</td>
                <td className="py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    user.status === 'Active' ? 'bg-green-100 text-green-700'
                    : user.status === 'Pending' ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-red-100 text-red-700'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="py-3">
                  <div className="flex gap-3 text-gray-500 hover:text-gray-700">
                    <Pencil className="cursor-pointer w-4 h-4" />
                    <Trash2 className="cursor-pointer w-4 h-4" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
