import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom"
import { AuthContext } from "../provider/AuthProvider";
import DatePicker from "react-datepicker";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateJob = () => {
   const { user } = useContext(AuthContext)
   const navigate = useNavigate();
   const job = useLoaderData();
   const [startDate, setStartDate] = useState(job.deadline);
   console.log(job);

   const handleUpdateJob = e =>{
      e.preventDefault()
      const form = e.target;
      const title = form.job_title.value;
      const email = form.email.value;
      const deadline = startDate;
      const category = form.category.value;
      const min_price = form.min_price.value;
      const max_price = form.max_price.value;
      const description = form.description.value;
      const updateJob = {
         title,
         deadline,
         category,
         min_price,
         max_price,
         description,
         buyer : {
            buyer_email : email,
            name : user.displayName,
            photo : user.photoURL
         }
      }

      axios.put(`${import.meta.env.VITE_server_Url}/job/${job._id}`, updateJob)
      .then(res =>{
         console.log(res.data);
         if(res.data.modifiedCount > 0){
            toast.success('Your posted job has been updated.')
            navigate('/myPostedJobs')
         }else{
            toast.error('Please change something.')
         }
      })
      
      
   }
   return (
      <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
         <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
            <h2 className='text-lg font-semibold text-gray-700 capitalize '>
               Update a Job
            </h2>

            <form onSubmit={handleUpdateJob}>
               <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                  <div>
                     <label className='text-gray-700 ' htmlFor='job_title'>
                        Job Title
                     </label>
                     <input
                        id='job_title'
                        name='job_title'
                        type='text'
                        defaultValue={job.title}
                        className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                     />
                  </div>

                  <div>
                     <label className='text-gray-700 ' htmlFor='emailAddress'>
                        Email Address
                     </label>
                     <input
                        id='emailAddress'
                        type='email'
                        name='email'
                        defaultValue={user?.email}
                        disabled
                        className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                     />
                  </div>
                  <div className='flex flex-col gap-2 '>
                     <label className='text-gray-700'>Deadline</label>

                     <DatePicker className="w-full border p-2 rounded-lg" selected={startDate} onChange={(date) => setStartDate(date)} />
                  </div>

                  <div className='flex flex-col gap-2 '>
                     <label className='text-gray-700 ' htmlFor='category'>
                        Category
                     </label>
                     <select
                        name='category'
                        id='category'
                        defaultValue={job.category}
                        className='border p-2 rounded-md'
                     >
                        <option value='Web Development'>Web Development</option>
                        <option value='Graphics Design'>Graphics Design</option>
                        <option value='Digital Marketing'>Digital Marketing</option>
                     </select>
                  </div>
                  <div>
                     <label className='text-gray-700 ' htmlFor='min_price'>
                        Minimum Price
                     </label>
                     <input
                        id='min_price'
                        name='min_price'
                        type='number'
                        defaultValue={job.min_price}
                        className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                     />
                  </div>

                  <div>
                     <label className='text-gray-700 ' htmlFor='max_price'>
                        Maximum Price
                     </label>
                     <input
                        id='max_price'
                        name='max_price'
                        type='number'
                        defaultValue={job.max_price}
                        className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                     />
                  </div>
               </div>
               <div className='flex flex-col gap-2 mt-4'>
                  <label className='text-gray-700 ' htmlFor='description'>
                     Description
                  </label>
                  <textarea
                     className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                     name='description'
                     defaultValue={job.description}
                     id='description'
                     cols='30'
                  ></textarea>
               </div>
               <div className='flex justify-end mt-6'>
                  <input type="submit" value="Update" className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'/>
               </div>
            </form>
         </section>
      </div>
   )
}

export default UpdateJob