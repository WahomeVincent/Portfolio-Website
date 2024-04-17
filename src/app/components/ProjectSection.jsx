import React from 'react'
import ProjectsCard from './ProjectsCard'

const projectsData = [
    {
        id:1,
        title: 'Farm.Shop',
        image: '/images/farm-shop.png',
        description:' A project that helps connect farmers with consumers with love for organic food.',
        gitUrl: 'https://github.com/WahomeVincent/Farm-House',
        previewUrl: 'https://farmshop-three.vercel.app/',
    },

    {
        id:2,
        title: 'React Admin Dashboard',
        image: '/images/Dashboard.png',
        description:'Leveraged syncfusion wide library of components to create a versatile admin dashboard.',
        gitUrl: 'https://github.com/WahomeVincent/AdminDashboard-React',
        previewUrl: 'https://admin-dashboard-react-one.vercel.app/',
    },

    {
      id:3,
      title: 'Donations Platform',
      image: '/images/donations.png',
      description:'Developed a school project where partners can host their organizations and well wishers could offer donations.',
      gitUrl: 'https://github.com/WahomeVincent/Donations',
      previewUrl: 'https://github.com/WahomeVincent/Donations',
    },

]

function ProjectSection() {
  return (
    <div className='m-6 '>
        <h2 className='text-xl md:text-2xl font-bold underline'>Projects</h2>
        <div className='md:flex md:flex-wrap md:gap-10  md:mt-10 md:mx-10'>
              {projectsData.map((project) => (
              <ProjectsCard 
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
              />
              ))}
        </div>
    </div>
  )
}

export default ProjectSection