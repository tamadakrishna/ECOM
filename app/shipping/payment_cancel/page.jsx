const page = ()=>{
    return(
    <div class="bg-gray-100 h-full w-full ">
        <div class="bg-white   md:mx-auto">
        <svg viewBox="0 0 24 24" class="text-red-600 w-16 h-16 mx-auto my-6" fill="none"  strokeWidth={1.5} stroke="currentColor" >
  <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

      
            <div class="text-center">
                <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Cancelled</h3>
                <p class="text-gray-600 my-2">Unsuccessful</p>
                <p> Try Again  </p>
                <div class="py-10 text-center">
                    <a href="#" class="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                        GO BACK 
                </a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default page;