import React, { Component } from 'react'
import Cards from './components/Cards'
import Navbar from './components/Navbar'

class App extends Component {
    render() {
        return (
            <main className="container">
                <Navbar />
                <Cards />
            </main>
        )
    }
}

export default App