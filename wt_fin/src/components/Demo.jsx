import React from 'react'

const Demo = () => {
  return (
    <div className='text-black flex items-center justify-center'>
      <div className='w-[834px]'>
        <p className='text-7xl py-4 pt-6'>Talk to a member of the team</p>
        <p className='font-medium text-2xl pb-[40px]'>Fill in the form below and we’ll follow up with you swiftly to discuss our tailored solutions for larger companies.<br /> <br />Our Privacy Policy and TRUSTe Compliance certification can be found here. <br /><br />Depending on your location, a Citrix Sales Representative or a Citrix Solution Advisor (a trusted partner of ours) will be reaching out to you to offer assistance for Podio. In Europe, we work with local partners to offer you a local sales experience and language support.</p>
        <div className='bg-[#F4F4F4] flex items-center pt-[48px] justify-center'>
            <div className='w-[540px]'>
                <p className='text-center text-sm font-semibold'>Fill in the form below and we’ll follow up with you swiftly to discuss our tailored solutions for larger companies.<br /><br />Our Privacy Policy and TRUSTe Compliance certification can be found <br />
                    here. <br /> <br />Depending on your location, a Sales Representative or a Solution Advisor (a trusted partner of ours) will be to you to offer assistance for Podio. In Europe, we work with local partners to offer you a local sales experience and language support.</p>

                <form className="container p-10 flex flex-col" >
  
                    <div className="p-5">
                        <label className="block mb-2 text-xl font-medium text-black font-semibold">
                            Name
                        </label>
                        <div >
                            <input 
                            type="email" 
                        
                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                            required
                            />
                        </div>
                    </div>
                    <div className="px-5">
                        <label className="block mb-2 text-xl font-medium text-black font-semibold">
                            Phone
                        </label>
                        <div >
                            <input 
                            type="password" 
                          
                                                       
                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                            required
                            />
                        </div>
                    </div>
                    <div className="p-5">
                        <label className="block mb-2 text-xl font-medium text-black font-semibold">
                            Email
                        </label>
                        <div >
                            <input 
                            type="password" 
                                                 
                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                            required
                            />
                        </div>
                    </div>
                    <div className="p-5">
                        <label className="block mb-2 text-xl font-medium text-black font-semibold">
                            Country
                        </label>
                        <div >
                            <input 
                            type="password" 
                                                 
                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                            required
                            />
                        </div>
                    </div>
                    <div className="p-5">
                        <label className="block mb-2 text-xl font-medium text-black font-semibold">
                            If other, please specify
                        </label>
                        <div >
                            <input 
                            type="password" 
                                             
                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                            required
                            />
                        </div>
                    </div>
                    <div className="p-5">
                        <label className="block mb-2 text-xl font-medium text-black font-semibold">
                            Industry
                        </label>
                        <div >
                            <input 
                            type="password" 
                                                
                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                            required
                            />
                        </div>
                    </div>
                    <div className="p-5">
                        <label className="block mb-2 text-xl font-medium text-black font-semibold">
                            Organistaion
                        </label>
                        <div >
                            <input 
                            type="password" 
                                                
                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                            required
                            />
                        </div>
                    </div>
                <br />
                <div className='flex items-center justify-center'>
                    <button type="submit" className="w-1/4 text-white bg-[#5091BD] font-bold rounded-lg block text-xl px-5 py-2.5 text-center ">
                    Submit
                </button>
                </div>
                
            </form>
            
            </div>

        </div>
      
      </div>

    </div>
  )
}

export default Demo


