import React, { useState } from 'react';

const UserTable = ({ users, handleUpdate, deleteUser }) => {
    const [editingUser, setEditingUser] = useState(null);
    const [updatedUser, setUpdatedUser] = useState({ firstName: "", lastName: "", number: "" });

    const startEditing = (user) => {
        setEditingUser(user.id);
        setUpdatedUser({ firstName: user.firstName, lastName: user.lastName, number: user.number });
    };

    const saveUpdate = (id) => {
        handleUpdate(id, updatedUser);
        setEditingUser(null);
    };

    return (
        <table className="w-full border-collapse border border-gray-400">
            <thead>
                <tr className="bg-gray-200">
                    <th className="border border-gray-400 px-4 py-2">First Name</th>
                    <th className="border border-gray-400 px-4 py-2">Last Name</th>
                    <th className="border border-gray-400 px-4 py-2">Number</th>
                    <th className="border border-gray-400 px-4 py-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr className="text-center" key={user.id}>
                        <td className="border border-gray-400 px-4 py-2">
                            {editingUser === user.id ? (
                                <input
                                    type="text"
                                    value={updatedUser.firstName}
                                    onChange={(e) => setUpdatedUser({ ...updatedUser, firstName: e.target.value })}
                                    className="border p-2"
                                />
                            ) : (
                                user.firstName
                            )}
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                            {editingUser === user.id ? (
                                <input
                                    type="text"
                                    value={updatedUser.lastName}
                                    onChange={(e) => setUpdatedUser({ ...updatedUser, lastName: e.target.value })}
                                    className="border p-2"
                                />
                            ) : (
                                user.lastName
                            )}
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                            {editingUser === user.id ? (
                                <input
                                    type="text"
                                    value={updatedUser.number}
                                    onChange={(e) => setUpdatedUser({ ...updatedUser, number: e.target.value })}
                                    className="border p-2"
                                />
                            ) : (
                                user.number
                            )}
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                            {editingUser === user.id ? (
                                <button onClick={() => saveUpdate(user.id)} className="bg-green-500 text-white px-2 py-1 m-1">Save</button>
                            ) : (
                                <button onClick={() => startEditing(user)} className="bg-yellow-500 text-white px-2 py-1 m-1">Update</button>
                            )}
                            <button onClick={() => deleteUser(user.id)} className="bg-red-500 text-white px-2 py-1 m-1">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default UserTable;
