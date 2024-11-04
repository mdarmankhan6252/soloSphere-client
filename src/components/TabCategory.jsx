import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
import { useEffect, useState } from 'react';
import axios from 'axios'

const TabCategory = () => {
   const [jobs, setJobs] = useState([])

   useEffect(() => {
      axios.get(`${import.meta.env.VITE_server_Url}/jobs`)
         .then(res => {
            setJobs(res.data)
         })
   }, [])

   return (
      <Tabs>
         <div className='container px-6 py-10 mx-auto'>
            <div className='text-center space-y-5 max-w-2xl mx-auto'>
               <h1 className='text-xl font-semibold sm:text-2xl md:text-3xl'>Browse Jobs By Categories</h1>
               <p className='text-[#8d8a8a]'>Three categories available for the time being. They are Web Development, Graphics Design and Digital Marketing. Browse them by clicking on the tabs below.</p>
            </div>
            <div className='flex items-center justify-center my-12'>
               <TabList>
                  <Tab>Web Development</Tab>
                  <Tab>Graphics Design</Tab>
                  <Tab>Digital Marketing</Tab>
               </TabList>
            </div>


            <TabPanel>
               <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {
                     jobs.filter(job => job.category === 'Web Development')
                     .map((job, i) => <JobCard key={i} job={job} />)
                  }
               </div>
            </TabPanel>
            <TabPanel>
               <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {
                     jobs.filter(job => job.category === 'Graphics Design')
                     .map((job, i) => <JobCard key={i} job={job} />)
                  }
               </div>
            </TabPanel>
            <TabPanel>
               <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {
                     jobs.filter(job => job.category === 'Digital Marketing')
                     .map((job, i) => <JobCard key={i} job={job} />)
                  }
               </div>
            </TabPanel>
         </div>
      </Tabs>
   );
};

export default TabCategory;