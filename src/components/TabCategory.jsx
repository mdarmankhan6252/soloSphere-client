import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';

const TabCategory = () => {
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
               <JobCard />
            </TabPanel>
            <TabPanel>
               <JobCard />
            </TabPanel>
            <TabPanel>
               <JobCard />
            </TabPanel>
         </div>
      </Tabs>
   );
};

export default TabCategory;