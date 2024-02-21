"use client";

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react';


const Pagination = ({method})=> {
  const [page,setPage] = useState(1);

  useEffect(()=>{
    method(page)
  },[page])

  const Next = ()=>{
    setPage(count=>count+1);
  }

  const Prev = ()=>{
    if(page!==1)
    setPage(count=>count-1)
  }
  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px text-base h-10">
          <li>
            <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tighttext-[#292929] bg-white border 
                                    border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
                onClick={Prev}>
              Previous
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-[#292929] bg-white border 
                                  border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
                onClick={Next}>
            Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Pagination;