
import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import NavBar from '../Navbar/Navbar';
import './Dashboard.css'; // Import custom CSS
import Footer from "../Footer/Footer";

const Dashboard = () => {
    const [dataEntryData, setDataEntryData] = useState([]);
    const [contactData, setContactData] = useState([]);

    useEffect(() => {
        // Fetch data from local storage
        const storedDataEntryData = JSON.parse(localStorage.getItem('dataEntryData')) || [];
        const storedContactData = JSON.parse(localStorage.getItem('contactData')) || [];

        setDataEntryData(storedDataEntryData);
        setContactData(storedContactData);
    }, []);

    const downloadExcel = (data, fileName) => {
        // Create a new workbook and add the data as a worksheet
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet(data);
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        
        // Write the workbook to a file
        XLSX.writeFile(wb, fileName);
    };

    const downloadJSON = (data, fileName) => {
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName; // Set the filename here
        a.click();
        URL.revokeObjectURL(url);
    };

    const deleteAllContactRecords = () => {
        localStorage.removeItem('contactData'); // Clear contact data from localStorage
        setContactData([]); // Update state to reflect deletion
    };

    return (
        <div className="dashboard-page">
            <NavBar />
            <div className="container mt-5">
                <h1 className="text-center mb-4" style={{ marginTop: "2em" }}>Dashboard</h1>

                <div className="dashboard-section">
                    <h2>Contact Us Records</h2>
                    
                    <table className="dashboard-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Subject</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contactData.length > 0 ? (
                                contactData.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.subject}</td>
                                        <td>{item.message}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4">No data available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <button 
                        className="btn btn-secondary mb-3"
                        onClick={() => downloadJSON(contactData, 'contact_db.json')}
                    >
                        Download Contact Data as JSON
                    </button>
                    <button 
                        className="btn btn-danger mb-3"
                        onClick={deleteAllContactRecords}
                    >
                        Delete All Contact Records
                    </button>
                </div>

                <div className="dashboard-section">
                    <h2>Data Entry Records</h2>
                    
                    <table className="dashboard-table">
                        <thead>
                            <tr>
                                <th>Organization Name</th>
                                <th>Project Type</th>
                                <th>Time Intervals</th>
                                <th>Client Name</th>
                                <th>Project Description</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Status</th>
                                <th>Assigned To</th>
                                <th>Budget</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataEntryData.length > 0 ? (
                                dataEntryData.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.organizationName}</td>
                                        <td>{item.projectType}</td>
                                        <td>{item.timeIntervals}</td>
                                        <td>{item.clientName}</td>
                                        <td>{item.projectDescription}</td>
                                        <td>{item.startDate}</td>
                                        <td>{item.endDate}</td>
                                        <td>{item.status}</td>
                                        <td>{item.assignedTo}</td>
                                        <td>{item.budget}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="10">No data available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                    <button 
                        className="btn btn-primary mb-3"
                        onClick={() => downloadExcel(dataEntryData, 'data_entry_records.xlsx')}
                    >
                        Download Data Entry Records as Excel
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;
