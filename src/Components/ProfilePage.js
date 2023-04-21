import React, { useState, useEffect } from 'react'

const ProfilePage = () => {
    const [user, setUser] = useState({});
    useEffect(() => {
        const id = localStorage.getItem('id');

        fetch(`https://dummyjson.com/users/${id}`)
            .then(res => res.json())
            .then(data => {

                setUser(data)
                console.log(user)
            });
    }, []);

    return (
        <div className="page">
            <h1>ProfilePage</h1>
            <div className="basic-info">
                <img src={user.image} alt="profilepic" />
                <div className="info name">
                    <div className="full-name">Name: {user.firstName} {user.lastName}</div>
                    <div className="university">
                        University: {user.university}
                    </div>
                </div>
                <div className="info email-number">
                    <div className="phone">Contact No: {user.phone}</div>
                    <div className="email">Email: {user.email}</div>
                    <div className="domain">Domain: {user.domain}</div>

                </div>
            </div>
            <div className="company-details basic-info">
                <div className="details">
                    <div className="personal">
                        Personal Details
                    </div>
                    <ul>
                        <li>Age: {user.age}</li>
                        <li>Gender: {user.gender}</li>
                        <li>DOB: {user.birthDate}</li>
                        <li>Weight: {user.weight} kg</li>
                        <li>Height: {user.height} cm</li>
                    </ul>
                </div>
                <div className="extra">
                    <div className="personal">
                        User Details
                    </div>
                    <ul>
                        <li>Username: {user.username}</li>
                        <li>User Agent: {user.userAgent}</li>
                        
                    </ul>
                </div>
                <div className="extra2">
                    <div className="personal">
                        IP Details
                    </div>
                    <ul>
                        <li>IP: {user.ip}</li>
                        <li>Mac Address: {user.macAddress}</li>
                        <li>SSN: {user.ssn}</li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default ProfilePage