import React from 'react';
import './Header.css';

function Header() {
    return (
      <div className="header">
          <div className="headerName">
                <div className="headerName-line1">Gift</div>
                <div className="headerName-line2">Ideas</div>
          </div>
          <div className="headerActions">
            <div className="navigation">
                <button className="myPeopleButton">People&nbsp;<i className="rightArrowIcon fas fa-chevron-right"/></button>
            </div>
            <div className="actions">
                <button className="searchIcon"><i className="fas fa-search"/></button>
                <button className="filterIcon"><i className="fas fa-filter"/></button>
            </div>
          </div>
      </div>
    )
}

export default Header;