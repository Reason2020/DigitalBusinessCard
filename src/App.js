import React from "react"
import Intro from "./components/Intro"
import About from "./components/About"
import Footer from "./components/Footer"
import Interests from "./components/Interests"

export default function App() {
    return (
        <main className="main">
            <Intro />
            <About />
            <Interests />
            <Footer />
        </main>
    )
}
