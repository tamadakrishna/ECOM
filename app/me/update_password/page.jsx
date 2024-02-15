import React from 'react'
import UpdatePassword from "@/components/auth/UpdatePassword";

const Update_Password = ({searchParams}) => {
  return (
    <div className="mobile:h-[100%] mobile:w-[100%] ">
        <UpdatePassword user={searchParams}/>
    </div>
  )
}

export default Update_Password