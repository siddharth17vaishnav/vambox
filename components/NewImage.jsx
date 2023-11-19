// import React, { useEffect, useState } from 'react';
// import {
//   Scene,
//   Sky,
// } from '@belivvr/aframe-react';

// export const Image = ({url}) => {
//   const [rendered, setRendered] = useState(false);
//   useEffect(() => {
//     setRendered(true);

//     if (typeof window !== 'undefined') {
//       require('aframe'); // eslint-disable-line global-require
//     }
//   }, [setRendered]);

//   if (!rendered) {
//     return <>loading</>;
//   }
//   return (
//     <div className="w-full h-screen bg-black">

//       <Scene>
//         <a-scene vr-mode-ui="enabled: true">
//           <Sky src="blob:http://localhost:3000/031e7adb-0561-47c2-86ca-ef2e553c3d76" rotation="0 -130 0"/>
//         </a-scene>
//       </Scene>
//     </div>
//   );
// };

// export default Image;


// // <img  src={url}/
