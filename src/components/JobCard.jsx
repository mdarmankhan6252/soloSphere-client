import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
   const { category, deadline, title, max_price, min_price, description, _id } = job;
   return (
      <Link to={`/job/${_id}`} className='w-full px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all duration-300'>
         <div className='flex items-center justify-between'>
            <span className='text-xs font-light text-gray-800 '>
               Deadline: {deadline}
            </span>
            <span className={`px-3 py-1 text-[8px] text-blue-800 uppercase  ${category === 'Web Development' && 'bg-blue-200'} ${category === 'Graphic Design' && 'bg-pink-200'} ${category === 'Digital Marketing' && 'bg-green-200'} rounded-full`}>
               {category}
            </span>
         </div>

         <div>
            <h1 className='mt-2 text-lg font-semibold text-gray-800 '>
               {title}
            </h1>

            <p className='mt-2 text-sm text-gray-600 '>
               {description.slice(0, 50) + '...'}
            </p>
            <p className='mt-2 text-sm font-bold text-gray-600 '>
               Range: ${min_price} - ${max_price}
            </p>
         </div>
      </Link>
   );
};

export default JobCard;