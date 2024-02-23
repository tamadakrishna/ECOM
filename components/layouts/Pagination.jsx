"use client";


const Pagination = ({page,set,totalDocument,documentsPerPage})=> {


  const Next = ()=>{
    const totalPages = Math.ceil(totalDocument / documentsPerPage);

    if(page<totalPages){
      set((prev)=>prev + 1)
    }

  }

  const Prev = ()=>{
    if(page>1){
      set((prev)=>prev - 1)
    }
  }

  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px text-base h-10 large_screen:h-6">
          <li>
            <a href="#" className="flex items-center justify-center px-4 h-10 large_screen:px-2 large_screen:h-6 ms-0 leading-tighttext-[#292929] bg-white border 
                                    border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
                onClick={()=>{Prev()}}>
              Previous
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center justify-center px-4 h-10 large_screen:px-2 large_screen:h-6 leading-tight text-gray-500 bg-white border 
            border-gray-300 hover:bg-gray-100 hover:text-gray-700">{page}</a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center px-4 h-10 large_screen:px-2 large_screen:h-6 leading-tight text-[#292929] bg-white border 
                                  border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
                onClick={()=>{Next()}}>
            Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Pagination;