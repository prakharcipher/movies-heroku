import React, { useState } from 'react';

const Home = (props) => {
    const [showMsg, setMsg] = useState(false);

    const handleClick = () => {
        props.goDark();
        setMsg(true);
    }

    const handleClose = () => {
        props.goLight();
        setMsg(false);
    }

    return (
        <>
            <div style={{position: 'fixed', top: '15px', opacity: '0.8', width: '100%', margin: 'auto', textAlign: 'center'}} onClick={handleClick}>
            <div className="pump" style={{color: '#FFFC71', marginLeft: '5px', fontWeight: 'bold'}}>Message from Jack</div>
                {!showMsg && <img className="pump" src="https://weberr-screenshots.s3.ap-south-1.amazonaws.com/ween.png" alt="icon" width="50" height="50" />}
            </div>      
            {showMsg && <img onClick={handleClose} src="https://weberr-screenshots.s3.ap-south-1.amazonaws.com/msg.png" alt="msg" style={{position: 'absolute', width: '80%', left: '10%', height: '80%', top: '10%', borderRadius: '20px'}} />}
            {!showMsg && <div style={{position: 'fixed', bottom: '50px', color: 'white', width: '100%', fontSize: '22px', fontWeight: 'bold', opacity: '0.8'}}>
                <div onClick={props.handleWatched} style={{width: '200px', margin: 'auto', textAlign: 'center'}}>Movie Dungeon</div>
                <div onClick={props.handlePicker} style={{width: '200px', margin: 'auto', textAlign: 'center', paddingTop: '16px'}}>Next Picks</div>
            </div>}
            
        </>
    )
}

export default Home;