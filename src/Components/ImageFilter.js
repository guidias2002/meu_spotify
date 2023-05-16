import React from 'react'
import baby from 'assets/images/baby.jpg'
import drake from 'assets/images/drake.jpg'
import mac from 'assets/images/mac.jpg'
import post from 'assets/images/post.jpg'
import roddy from 'assets/images/roddy.jpg'
import wiz from 'assets/images/wiz.jpg'
import { Icone } from './UI'

export default (tag) => {
    const Images = {
        Baby: <Icone src={baby} alt="baby" />,
        Drake: <Icone src={drake} alt="drake" />,
        Mac: <Icone src={mac} alt="mac" />,
        Post: <Icone src={post} alt="post" />,
        Roddy: <Icone src={roddy} alt="roddy" />,
        Wiz: <Icone src={wiz} alt="wiz" />
    }

    return Images[tag]
}