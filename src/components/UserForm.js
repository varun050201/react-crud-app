import React, { useState } from "react";
import "../App.css";

function UserForm({ addUser }) {
    const [user, setUser] = useState({ firstName: "", lastName: "", number: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.firstName && user.lastName && user.number) {
            addUser(user);
            setUser({ firstName: "", lastName: "", number: "" });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
            <input
                type="text"
                placeholder="First Name"
                value={user.firstName}
                onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                className="border p-2"
            />
            <input
                type="text"
                placeholder="Last Name"
                value={user.lastName}
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                className="border p-2"
            />
            <input
                type="text"
                placeholder="Number"
                value={user.number}
                onChange={(e) => setUser({ ...user, number: e.target.value })}
                className="border p-2"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add</button>
        </form>
    );
}

export default UserForm;
