import React from 'react'

const AnimatedLoad = ()=> {
  return (
    <div className='screen'>
        <div className="lds-ripple"><div></div><div></div></div>
        <style>{`
        .screen {
            display: block;
            position: absolute;
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
            background: none;
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .lds-ripple {
            display: inline-block;
            position: relative;
            width: 80px;
            height: 80px;
          }
          .lds-ripple div {
            position: absolute;
            border: 4px solid #72A9B2;
            opacity: 1;
            border-radius: 50%;
            animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
          }
          .lds-ripple div:nth-child(2) {
            animation-delay: -0.5s;
          }
          @keyframes lds-ripple {
            0% {
              top: 36px;
              left: 36px;
              width: 0;
              height: 0;
              opacity: 0;
            }
            4.9% {
              top: 36px;
              left: 36px;
              width: 0;
              height: 0;
              opacity: 0;
            }
            5% {
              top: 36px;
              left: 36px;
              width: 0;
              height: 0;
              opacity: 1;
            }
            100% {
              top: 0px;
              left: 0px;
              width: 72px;
              height: 72px;
              opacity: 0;
            }
          }          
        `}</style>
    </div>
  )
}

export default AnimatedLoad