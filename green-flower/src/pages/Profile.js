import { signOut } from 'firebase/auth';
import React from 'react';
import ConnectModal from '../components/ConnectModal';
import { auth } from '../utils/firebase.config';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const Profile = ({ user }) => {

    const handleLogout = async () => {
        await signOut(auth);
    }
    return (
        <div>
            {console.log(user)}
            {user ?
                <>
                    <Menu />
                    <div className='profile-header'>

                        <h1>Bienvenue {user?.displayName}</h1>
                    </div>
                    <div className="profile-infos">
                        <span>Nom d'utilisateur : {user?.displayName}</span>
                        <span>Email : {user?.email}</span>
                        <span>Adresse de Livraison : {user?.deliver}</span>
                    </div>
                    <button onClick={() => handleLogout()}> <i className="fa-solid fa-right-from-bracket"></i> </button>
                    <Footer />
                </>

                :
                <ConnectModal />}

        </div>
    );
};

export default Profile;