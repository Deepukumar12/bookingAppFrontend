
// import React from "react";


import Navbar from "../../components/navbar/Navbar.jsx";
import Header from "../../components/header/Header.jsx";
import "./home.css"
import Featured from "../../components/featured/Featured.jsx";


const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>

            <div className="homeContainer">
                <Featured/>
            </div>
        </div>
    );
};

export default Home;