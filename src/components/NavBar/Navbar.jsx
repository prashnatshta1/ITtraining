import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import logo from './logo3.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const searchContainerRef = useRef(null);

  const menuItems = {
    Programming: [
      'Rust Programming', 'C/C++ Programming', 'C++ Programming', 'Python for Data Science', 
      'Python Django Training', 'Java Training', 'Advanced Java Training', 'JSP', 'Spring Framework', 
      'PHP Training', 'Laravel Training', 'Web Development', 'Flutter', 'MERN Stack Training', 
      'Android Training', 'Go Programming', 'Ruby on Rails', 'iOS App Development', 'Asp.Net MVC'
    ],
    Designing: [
      'UI/UX Design Training', 'Video Editing', 'Web Designing', 'Multimedia and Animation', 
      'Graphic Design Training', 'Motion Graphics Using Cinema 4D'
    ],
    Certification: [
      'Oracle Training', 'OCA Certification', 'OCP Certification', 'CISCO Certification', 'CCNA Training', 
      'CCNP Course', 'Project Mgmt. (PMP)', 'RHCE 8 Course', 'RHCSA Course', 'RHCA Course', 
      'RHCVA Course', 'JBoss Certified Application Administrator', 'CompTIA Certification', 
      'CompTIA A+ Certification', 'CompTIA Network+', 'Ethical Hacking', 'CRISC Course', 'CISA Course', 
      'CompTIA Linux+'
    ],
    CMS: [
      'Magento Training', 'Drupal Training', 'WordPress Training', 'Joomla Training', 'Advanced Joomla', 
      'OpenCart Course', 'Advanced WordPress Training'
    ],
    Corporate: [
      'MS Access Training', 'Advanced Excel Training', 'Corporate IT Training', 'Microsoft Office Training', 
      'IT Support Officer', 'Accounting and Taxation'
    ],
    OtherCourses: [
      'QA Course', 'Hardware and Networking', 'Diploma in Computer Application', 
      'Micro Controller Programming', 'MSSQL Training', 'Basic Computer Course', 'SPSS Training', 
      'Advanced SEO Training', 'Accounting Tally', 'GIS', 'Google AdWords Course', 'Data Mining Course', 
      'Digital Marketing', 'Web Engineering for IT Students', 'Web Engineering for Non-IT Students', 
      'College Project', 'Coding for SEE', 'Diploma in Multimedia for SEE', 'Programming for +2'
    ],
    Civil: [
      'AutoCAD Training', 'ETABS', 'SketchUp', 'Lumion', 'SAP 2000', 'Estimation Valuation', 
      'Structural Analysis and Design', 'Road Design Training', 'Primavera and MS Project', 
      'Advanced 3D Visualization'
    ]
  };
  

  const handleMouseEnter = (item) => {
    setDropdown(item);
  };

  const handleMouseLeave = () => {
    setDropdown(null);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const newSuggestions = [];
    Object.keys(menuItems).forEach((category) => {
      menuItems[category].forEach((item) => {
        if (item.toLowerCase().includes(query.toLowerCase())) {
          newSuggestions.push({ category, item });
        }
      });
    });
    setSuggestions(newSuggestions);
  };

  const handleSuggestionClick = (item) => {
    setSearchQuery(item.item);
    filterItems(item.item);
    setSuggestions([]);
  };

  const handleSearch = () => {
    filterItems(searchQuery);
  };

  const filterItems = (query) => {
    const results = [];
    Object.keys(menuItems).forEach((category) => {
      const filteredItems = menuItems[category].filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      if (filteredItems.length > 0) {
        results.push({ category, items: filteredItems });
      }
    });
    setFilteredItems(results);
    setDropdown(null);
  };

  // Hide suggestions when clicking outside the search container
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setSuggestions([]); // Hide suggestions
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar-container">
      <div className="navbar-header">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <div className="navbar-title">
          <Link to="/" className="navbar-title">
          <h1>IT TRAINING NEPAL</h1>
          <p>Imparting IT Skills</p></Link>
        </div>
      </div>

      <div className='d-flex'>
      <ul className="navbar-list">
        {Object.keys(menuItems).map((category) => (
          <li
            className="navbar-item"
            key={category}
            onMouseEnter={() => handleMouseEnter(category)}
            onMouseLeave={handleMouseLeave}
          >
            {category}
            {dropdown === category && (
              <ul className="dropdown">
                {menuItems[category].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </li>
        ))}

      </ul>

      <div className="search-container" ref={searchContainerRef}>
        <input
          type="text"
          className="search-input"
          placeholder="Search course"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearch} className="search-button">Search</button>

        {suggestions.length > 0 && (
          <ul className="suggestions-box">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="suggestion-item"
              >
                {suggestion.item}
              </li>
            ))}
          </ul>
        )}
      </div>
      </div>
    </div>
  );
};

export default Navbar;