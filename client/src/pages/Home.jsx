import React from 'react'
import Featured from '../components/Featured'
import Header from '../components/Header'
import ItemList from "../components/ItemsList"
import Footer from "../components/Footer"
const Home = () => {

    return (
        <div>
            <Header />
            <Featured />
            <ItemList />
            <Footer />
        </div>
    )
}

export default Home