import React from 'react'
import UpdateProfile from '@/components/auth/UpdateProfile'

const Update_Profile = ({searchParams}) => {
  return (
    <div className="mobile:h-[100%] mobile:w-[100%] ">
      <UpdateProfile user={searchParams}/>
    </div>
  )
}

export default Update_Profile