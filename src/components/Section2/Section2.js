import React from 'react';
import './Section2.css';

const Section2 = () => {
    return (
        <div>
            <div className="sectionA">
                <div className="text">
                    <div>STYLE 1</div>
                    <div>Description of the style</div>
                    <br/>
                    <button>See More</button>
                </div>
                    <div className="image">
                </div>
            </div>
            <div className="sectionB">
            <div className="image">
                </div>
                <div className="text">
                    <div>STYLE 2</div>
                    <div>Description of the style</div>
                    <br/>
                    <button>See More</button>
                </div>
                    
            </div>
        </div>
        
    );
}

export default Section2;