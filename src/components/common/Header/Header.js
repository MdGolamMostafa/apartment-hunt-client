import React, { useContext } from 'react';
import { Button, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import "firebase/auth";
import firebase from "firebase/app";
import firebaseConfig from '../../Login/firebase.config';
const Header = () => {
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log({ loggedInUser })

    const logout = () => {

        if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
        }
        firebase.auth().signOut().then(function () {
            // Sign-out successful.
            setLoggedInUser(null)
            history.replace('/');
        }).catch(function (error) {
            // An error happened.
        });
    }
    return (
        <Navbar expand="lg">
            <Link className="nav-link" to="/">
                <Image fluid src={require('../../../images/logos/logo.png').default}
                    style={{
                        width: "100px",
                        height: "54.8px"
                    }}
                />
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#home">About</Nav.Link>
                    <Nav.Link href="#home">Service</Nav.Link>
                    <Nav.Link href="#home">Concerns</Nav.Link>
                    <Nav.Link href="#home">Event</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>

                    {

                        (loggedInUser && loggedInUser.email) ?
                            <>
                                <Button variant="dark" id="login-btn" onClick={logout}>Logout</Button>
                                <Link className="nav-link text-white" to="booking-list">
                                    <Button
                                        id="dash-btn" variant="dark" >Dashboard</Button>
                                </Link>
                            </>
                            :
                            <Link className="nav-link text-white" to="/login">
                                <Button variant="dark" id="login-btn">Login</Button>
                            </Link>

                    }
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;