import React from 'react';
import { NavLink } from 'react-router-dom';

const navActive = ({ isActive }) => (isActive ? "active_link" : "");

const Navigation = () => {
    return (
        <div className='sidebar'>
            <div className='id'>
                <div className='idContent'>
                    <img src='./media/moi.jpg' alt='profil-pic' />
                    <h3>Maxime</h3>
                </div>
            </div>

            <div className='navigation'>
                <ul>
                    <li>
                        <NavLink  to="/" className={navActive}>
                            <i className='fas fa-home'></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink  to="/competences" className={navActive}>
                            <i className='fas fa-mountain'></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink  to="/portfolio" className={navActive}>
                            <i className='fas fa-image'></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink  to="/contact" className={navActive}>
                            <i className='fas fa-address-book'></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className='socialNetwork'>
                <ul>
                    <li>
                        <a href='https://www.linkedin.com/in/maxime-tan-02229b209/' target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a href='https://github.com/Aizkun' target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    </li>
                    {/* <li>
                        <a href='https://wwww.google.com' target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    </li>
                    <li>
                        <a href='https://wwww.google.com' target="_blank" rel="noopener noreferrer"><i className="fab fa-codepen"></i></a>
                    </li> */}
                </ul>
                <div className='signature'>
                    <p>Maxime - 2022</p>
                </div>
            </div>

        </div>
    );
};

export default Navigation;