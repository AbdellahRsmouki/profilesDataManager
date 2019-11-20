import React from 'react'

export default function Hero({children, hero}) {
    return (
        <div className={hero}>
            {children}
        </div>
    )
}
Hero.defaultProps = {
    hero:"defaultHero"
}
