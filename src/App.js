import React, { useEffect, useState } from "react";
import { getUsers, createUser, updateUser, deleteUser } from "./api.js";
import UserTable from "./components/UserTable";
import UserForm from "./components/UserForm";

function App() {
    const [users, setUsers] = useState(() => {
        const savedUsers = localStorage.getItem("users");
        return savedUsers ? JSON.parse(savedUsers) : [];
    });

    useEffect(() => {
        if (users.length === 0) {
            fetchUsers();
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users]);

    const fetchUsers = async () => {
        try {
            const response = await getUsers();
            const formattedUsers = response.data.map(user => ({
                id: user.id,
                firstName: user.firstName || "",
                lastName: user.lastName || "",
                number: user.number || ""
            }));
            setUsers(formattedUsers);
        } catch (error) {
            console.error("Failed to fetch users:", error);
        }
    };

    const addUser = async (newUser) => {
        try {
            const response = await createUser(newUser);
            const addedUser = { id: response.data.id, ...newUser };
            setUsers([...users, addedUser]);
        } catch (error) {
            console.error("Failed to add user:", error);
        }
    };

    const handleUpdate = async (id, updatedUser) => {
        try {
            await updateUser(id, updatedUser);
            setUsers(users.map(user => 
                user.id === id ? { ...user, ...updatedUser } : user
            ));
        } catch (error) {
            console.error("Failed to update user:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteUser(id);
            setUsers(users.filter(user => user.id !== id));
        } catch (error) {
            console.error("Failed to delete user:", error);
        }
    };

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">React CRUD with API (Table Format)</h2>
            <UserForm addUser={addUser} />
            <UserTable users={users} handleUpdate={handleUpdate} deleteUser={handleDelete} />
        </div>
    );
}

export default App;
