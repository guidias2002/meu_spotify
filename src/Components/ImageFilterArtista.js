import React from 'react'
import baby from 'assets/images/baby.jpg'
import drake from 'assets/images/drake.jpg'
import mac from 'assets/images/mac.jpg'
import post from 'assets/images/post.jpg'
import roddy from 'assets/images/roddy.jpg'
import wiz from 'assets/images/wiz.jpg'
import { IconeArtista } from 'Components/UI'

export default (tag) => {
    const Images = {
        Baby: <IconeArtista src={baby} alt="baby" />,
        Drake: <IconeArtista src={drake} alt="drake" />,
        Mac: <IconeArtista src={mac} alt="mac" />,
        Post: <IconeArtista src={post} alt="post" />,
        Roddy: <IconeArtista src={roddy} alt="roddy" />,
        Wiz: <IconeArtista src={wiz} alt="wiz" />
    }

    return Images[tag]
}

