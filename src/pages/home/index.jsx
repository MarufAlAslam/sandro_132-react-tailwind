import React from 'react'
import Nav from '../../components/nav'
import TextColumn from '../../components/text-columns'
import CraftMail from '../../components/craft-mail'
import ImageColumn from '../../components/image-columns'

const Home = () => {
    return (
        <div>
            <Nav />
            <main>
                <TextColumn />
                <CraftMail />
                <ImageColumn/>
            </main>
        </div>
    )
}

export default Home