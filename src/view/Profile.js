import React from 'react';

import Avatar from '../components/Avatar';

const Profile = ({ name, age, Summary, click, changed }) => {
    return (
        <div>
            <Avatar name={name} />
            <p onClick={click}><span>Age :</span>{age}</p>
            <p>{Summary}</p>
            <input type="text" onChange={changed} />
        </div>);
}

export default Profile;