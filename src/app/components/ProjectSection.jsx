import React from 'react'
import ProjectsCard from './ProjectsCard'

const projectsData = [
    {
        id:1,
        title: 'React Admin Dashboard',
        image: '/images/Dashboard.png',
        description:'Project 1'
    },

    {
        id:1,
        title: 'React Admin Dashboard',
        image: '/images/Dashboard.png',
        description:'Project 2'
    },

    {
      id:1,
      title: 'React Admin Dashboard',
      image: '/images/Dashboard.png',
      description:'Project 3'
    },

]

function ProjectSection() {
  return (
    <div className='m-6 '>
        <h2 className='text-xl md:text-2xl font-bold underline'>Projects</h2>
        <div className='md:flex md:gap-10  md:mt-10 md:mx-10'>
              {projectsData.map((project) => (
              <ProjectsCard 
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
              />
              ))}
        </div>
    </div>
  )
}

export default ProjectSection