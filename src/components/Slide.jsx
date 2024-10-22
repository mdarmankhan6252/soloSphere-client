
const Slide = ({ title, image }) => {
   return (
      <div
         className='w-full bg-center bg-cover h-[26rem] sm:h-[38rem] lg:h-[46rem]'
         style={{
            backgroundImage: `url("${image}")`,
         }}
      >
         <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
            <div className='text-center'>
               <h1 className='text-xl font-semibold text-white lg:text-4xl'>
                  {title}
               </h1>
               <br />
               <button className='px-8 py-4 mt-4 text-sm font-medium text-black capitalize transition-colors duration-300 transform bg-white rounded-md hover:bg-gray-200  '>
                  See All Jobs
               </button>
            </div>
         </div>
      </div>
   );
};

export default Slide;