import React from 'react'
import Nav from '../../components/nav'
import TextColumn from '../../components/text-columns'
import CraftMail from '../../components/craft-mail'

const Home = () => {
    return (
        <div>
            <Nav />
            <main>
                <TextColumn />
                <CraftMail />
            </main>
        </div>
    )
}

export default Home