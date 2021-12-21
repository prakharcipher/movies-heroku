import React from 'react';

const Watched = (props) => {
    return (
        <div style={{backgroundImage: `url("https://weberr-screenshots.s3.ap-south-1.amazonaws.com/jadark.png")`, height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', overflow: 'auto'}}>
            <div onClick={props.goBack} className="pump" style={{color: 'white', position: 'absolute', left: '20px', top: '13px', fontSize: '28px', fontWeight: 'bold', zIndex: '100'}}>&#8678;</div>
            <div style={{color: 'white', textAlign: 'center', paddingTop: '20px', fontWeight: 'bold', fontSize: '20px', opacity: '0.8'}}>Our Media Dungeon</div>
            <div className="titles" style={{width: '100%', marginTop: '20px', paddingBottom: '30px'}}>
                <div className="card">
                    <div className="content">
                    <div className="front">
                        <img src="https://weberr-screenshots.s3.ap-south-1.amazonaws.com/eli.jpeg" height="350" width="100%" alt="poster" style={{borderRadius: '10px'}} />
                    </div>
                    <div className="back">
                        First movie date.. with booze and fun. For the first time it was not the scary movie that made the heart skip beats, it was her beautiful face!
                    </div>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                    <div className="front">
                        <img src="https://weberr-screenshots.s3.ap-south-1.amazonaws.com/elf.jpeg" height="350" width="100%" alt="poster" style={{borderRadius: '10px'}} />
                    </div>
                    <div className="back">
                        She is scared of spiders, and yet loves this movie. Weirdo, but so adorable. Cost of choosing a freak funny movie over horror? A smoldering hot session of our bodies craving each other amidst the movie.
                    </div>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                    <div className="front">
                        <img src="https://weberr-screenshots.s3.ap-south-1.amazonaws.com/witcher.png" height="350" width="100%" alt="poster" style={{borderRadius: '10px'}} />
                    </div>
                    <div className="back">
                        A lazy sunday, heartfelt moments together and a mutual admiration for Geralt of Rivia. If that's not a perfect day, I don't know what is. PS - I can't stop kissing her enticing lips even in front of Henry's paper sharp jawline.
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Watched;