   // scripts/initLUT.js
   const fetch = require('node-fetch');

   const createLUT = async () => {
       const response = await fetch('http://localhost:3000/api/lut', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
           },
           body: JSON.stringify({ /* your LUT data */ }),
       });
       const data = await response.json();
       console.log(data);
   };

   createLUT();