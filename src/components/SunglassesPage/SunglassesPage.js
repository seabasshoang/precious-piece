import React from 'react';
import './Sunglasses.scss';

const SunglassesPage = () => {
    return (
        <div>
            <div class="grid">
            <div class="grid__item  grid1">
                <div class="content">
                <div class="content-inside">
                    <h2>1:1</h2>
                    <p>Lower Left</p>
                </div>
                </div>
            </div>
            <div class="grid__item grid2">
                <div class="content">
                <div class="content-inside">
                    <h2>1:1</h2>
                    <p>Lower Left</p>
                </div>
                </div>
            </div>
            <div class="grid__item grid3">
                <div class="content">
                <div class="content-inside">
                    <h2>1:1</h2>
                    <p>Lower Right</p>
                </div>
                </div>
            </div>
            <div class="grid__item grid4">
                <div class="content">
                <div class="content-inside">
                    <h2>1:1</h2>
                    <p>Lower Right</p>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default SunglassesPage;