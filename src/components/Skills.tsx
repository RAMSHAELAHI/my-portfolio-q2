import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div> 
                <h2 className='text-4xl md:text-5xl'> Technologies I Work With</h2>
                <p className='text-gray-400 pt-2'>
                I have a strong foundation in web development, with expertise in HTML, CSS, TypeScript, JavaScript, and Next.js. 
                I'm also proficient in Tailwind CSS, which I use for efficient styling and design. 
                I'm highly interested in advancing my web design skills by exploring the latest technologies in this field.
                </p>
                
            </div>
            <div>
                <div className='grid grid-cols-2 text-accent text-3xl 5m:text-4xl'></div>
                <div className='space-y-2'>
                    <h2>TypeScript</h2>
                    <h2>Next.Js</h2>
                    <h2>React.Js</h2>
                </div>
                <div className='space-y-2'>
                    <h2>Tailwind</h2>
                    <h2>CSS</h2>
                    <h2>Node.Js</h2>
                </div>
            </div>
          </div>
        </div>
    
  )
}

export default Skills

