import React, { useEffect, useState } from 'react';
   import { getDevices } from '../api/deviceApi';

   const Dashboard = () => {
     const [devices, setDevices] = useState([]);

     useEffect(() => {
       const fetchDevices = async () => {
         try {
           const response = await getDevices();
           setDevices(response.data);
         } catch (error) {
           console.error('Error fetching devices', error);
         }
       };
       fetchDevices();
     }, []);

     return (
       <div>
         <h1>Devices</h1>
         <ul>
           {devices.map((device) => (
             <li key={device.id}>{device.name} - {device.status ? 'Active' : 'Inactive'}</li>
           ))}
         </ul>
       </div>
     );
   };

   export default Dashboard;