import React from 'react'
import Nav from '../../components/nav'
import TextColumn from '../../components/text-columns'
import CraftMail from '../../components/craft-mail'
import ImageColumn from '../../components/image-columns'
import CopyRight from '../../components/copyright'

const Home = () => {
    return (
        <div>
            <Nav />
            <main>
                <TextColumn />
                <CraftMail />
                <ImageColumn />
            </main>
            <CopyRight />
        </div>
    )
}

export default Home