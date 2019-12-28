import React from 'react'
import './portfolio.css';
import './portfolio.js';

function Portfolio() {
    return (
        <div className="portfolio_root">
            <div className="portfolio_items_go_here">
                {/* see portfolio.js file for more info */}
                {/* This is placeholder content while the app loads */}
                <div className="deck">
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;