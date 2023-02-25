import React from 'react'

export function Overlay() {
  return (
    <>
    <div style={{ position: 'absolute', top: 10, left: 0, pointerEvents: 'none', width: '100%', height: '100%',zIndex:999 }}>
      <div className='class' style={{position: 'absolute'}}>
      <img src={'/logo-vam.png'} alt="/" width={200} height={200}/>
      </div>
      </div>
    </>
    );
};
 export default Overlay;