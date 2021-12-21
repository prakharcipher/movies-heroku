import React, { useState } from 'react';

const Picker = (props) => {
    return (
        <div style={{backgroundImage: `url("https://weberr-screenshots.s3.ap-south-1.amazonaws.com/jadark.png")`, height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', overflow: 'auto'}}>
            <div onClick={props.goBack} className="pump" style={{color: 'white', position: 'absolute', left: '20px', top: '13px', fontSize: '28px', fontWeight: 'bold', zIndex: '100'}}>&#8678;</div>
            <div style={{color: 'white', textAlign: 'center', paddingTop: '20px', fontWeight: 'bold', fontSize: '20px', opacity: '0.8'}}>Upcoming Pickers</div>
            <div className="titles" style={{width: '100%', marginTop: '20px', paddingBottom: '30px'}}>
                <div className="upcoming">
                    <img src="https://weberr-screenshots.s3.ap-south-1.amazonaws.com/zland.jpg" height="350" width="100%" alt="poster" style={{borderRadius: '10px'}} />
                </div>
                <div className="upcoming">
                    <img src="https://weberr-screenshots.s3.ap-south-1.amazonaws.com/scream.jpeg" height="350" width="100%" alt="poster" style={{borderRadius: '10px'}} />
                </div>                               
            </div>
        </div>
    )
}

export default Picker;