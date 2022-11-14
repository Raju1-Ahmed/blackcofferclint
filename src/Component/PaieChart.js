import React, { useEffect, useState } from 'react';
import LineChart from './LineChart';

const PaieChart = () => {
      const [users, setUsers] = useState([]);
    //   console.log("data check", products[0].title)
    useEffect(() => {
        fetch('https://blackcoffersever.onrender.com/allinfo')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);
    return (
        <div className='my-10'>
        <h4 className='text-xl font-bold text-center my-12'>Purches Your Products: {users.length}</h4>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                users.map(user => <LineChart
                    key={user._id}
                    user={user}
                ></LineChart>)
            }
        </div>
    </div>
    );
};

export default PaieChart;