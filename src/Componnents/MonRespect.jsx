import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Responsable = () => {
  return (
    <div>
        <Typewriter
        words={['Développeur Fullstack Web', 'Passionné par Laravel & React', 'Créateur de solutions web']}
        loop={true}
        cursor
        cursorStyle="...|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </div>
  )
}

export default Responsable