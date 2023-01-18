import React from 'react';

const Hobbies = () => {
    return (
        <div className='hobbies'>
            <h3>Intérêts</h3>
            <ul>
                <li className='hobby'>
                    <i className='fas fa-car'></i>
                    <span>Automobile</span>
                </li>
                <li className='hobby'>
                    <i className='fa-solid fa-dumbbell'></i>
                    <span>Musculation</span>
                </li>
                <li className='hobby'>
                    <i className='fas fa-plane'></i>
                    <span>Voyages</span>
                </li>
                <li className='hobby'>
                    <i className='fas fa-rocket'></i>
                    <span>Espace</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;