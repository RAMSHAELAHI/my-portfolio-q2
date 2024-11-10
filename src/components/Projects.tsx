import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data =[
{
    id: 0 ,
    title: "RESUME" ,
    desc: "HTML & CSS based resume that can hold complete information " ,
    img: "/images/dynamic resume builder.png" ,
    tags: ["HTML" , "CSS" , "TypeScript" , "Javascript"]
},

{
    id: 1 ,
    title: "Shareable Resume" ,
    desc: "HTML & CSS based resume that can hold complete information " ,
    img: "/images/shareable resume.jpeg" ,
    tags: ["HTML" , "CSS" , "TypeScript" , "Javascript"]
},
{
    id: 2,
    title: "Simple Calculator" ,
    desc: "HTML & CSS based resume that can hold complete information " ,   
    img: "/images/Calculator.png" ,
    tags: ["HTML" , "CSS" , "TypeScript" , "Javascript"]
},
{
    id: 3,
    title: "45 Assignments" ,
    desc: "Complete 45 Assignments given in Quarter 1" ,   
    img: "/images/45 assignments github pic.png" ,
    tags: ["HTML" , "CSS" , "TypeScript" , "Javascript"]
},
{
    id: 4,
    title: "ATM Machine" ,
    desc: "ATM machine app" ,   
    img: "/images/ATM.png" ,
    tags: ["HTML" , "CSS" , "TypeScript" , "Javascript"]
},
{
id: 5,
title: "Static Website" ,
desc: "A static website for fundamental practices" ,   
img: "/images/static website.png" ,
tags: ["HTML" , "CSS" , "TypeScript" , "Javascript"]
},
]

const Projects = () => {
  return (
    <div id='projects' className='container pt-52'>
        <Heading title='My Projects '  />
     <div className='grid gap-14 xl:gap-4 xl:gap-y-20 md: grid-cols-6 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card 

        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}</div>      
    </div>
  )
}

export default Projects
