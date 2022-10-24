import { signOut } from 'firebase/auth';
import React from 'react';
import ConnectModal from '../components/ConnectModal';
import { auth } from '../utils/firebase.config';


const Profile = ({ user }) => {

    const handleLogout = async () => {
        await signOut(auth);
    }
    return (
        <div>
            {user ?
                <div>
                    <h1>{user?.displayName}</h1>
                    <button onClick={() => handleLogout()}> dc </button>
                </div>

                :
                <ConnectModal />}

        </div>
    );
};

export default Profile;