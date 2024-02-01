import React, { useState, useEffect } from 'react';
import axios from 'axios';

const List = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setItems(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div>
      <h2>User Data Table</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={tableHeaderStyle}>ID</th>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Email</th>
            <th style={tableHeaderStyle}>City</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {items.map(user => (
            <tr key={user.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={tableCellStyle}>{user.id}</td>
              <td style={tableCellStyle}>{user.name}</td>
              <td style={tableCellStyle}>{user.email}</td>
              <td style={tableCellStyle}>{user.address.city}</td>
              {/* Add more columns as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Define some basic styles for the table header and cell
const tableHeaderStyle = {
  padding: '12px',
  textAlign: 'left',
  border: '1px solid #ddd',
};

const tableCellStyle = {
  padding: '10px',
  textAlign: 'left',
  border: '1px solid #ddd',
};

export default List;
