import React from 'react'

const Tabluar = ({header,data})=> {

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                    {
                        header?.map((info,index)=>{
                            return (
                                <th key={index} scope="col" className="px-6 py-3">
                                    {info?.title}
                                </th>
                            )
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    Array.isArray(data) && data?.map((info,index)=>{
                        return(
                            <tr key={index}  className="odd:bg-white even:bg-gray-50  ">
                                { 
                                    header?.map((column,index)=>{
                                        if(column.type==="actions")
                                        return (
                                            <td key={index} className="px-6 py-4">
                                                <column.Component id={info?._id} info={info}/>
                                            </td>
                                            )
                                        return (
                                            <td key={index}  className="px-6 py-4">
                                                {info?.[column?.id]}
                                            </td>
                                        )
                                    })
                                }
                                
                            </tr>
                        )
                    })
               
                }
                
            </tbody>
        </table>
    </div>

  )
}

export default Tabluar