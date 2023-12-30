import React, { useState } from 'react';
const App = () => {
   const [days, setDays] = useState(0)
   const [inputValue, setInputValue] = useState(1);
   const onChange = (newValue) => {
      setInputValue(newValue);
   };
   return (
      <div className='bg-white min-h-[100vh] relative'>
         <img className='w-[250px] absolute right-0 opacity-15' src={require("../src/assets/icons/2.png")} alt="" />


         <section className='px-[3vw] py-[8vh]'>
            <h1 className='mx-auto text-center text-red-500 text-4xl font-bold w-fit'>Vender Votre<br /> Voiture</h1>
            <div className='w-full p-12 min-[100vh]: bg-gray-200 flex items-center sm:flex-row flex-col rounded-xl mb-[10vh] mt-[10vh]'>
               <form className="sm:w-1/2 w-full mx-auto" onSubmit={e=> e.preventDefault()}>

                  <div className='flex justify-between items-center mb-10'>
                     <div className="w-[40%] flex items-center ps-4 bg-slate-300 rounded">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 " />
                        <label for="bordered-radio-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900">Garagiste</label>
                     </div>
                     <div className="w-[40%] flex items-center ps-4 bg-slate-300 rounded">
                        <input checked id="bordered-radio-2" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600" />
                        <label for="bordered-radio-2" className="w-full py-4 ms-2 text-sm font-medium text-gray-900">Particulier</label>
                     </div>

                  </div>
                  <div className="grid md:grid-cols-2 md:gap-6">
                     <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                     </div>
                     <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                     </div>
                  </div>
                  <div className="grid md:grid-cols-2 md:gap-6">
                     <div className="relative z-0 w-full mb-5 group">
                        <input type="tel" pattern="[0-9]{10}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (0658901425)</label>
                     </div>
                     <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Optional)</label>
                     </div>
                  </div>
                  <div className="grid md:grid-cols-2 md:gap-6">

                     <div className="relative z-0 w-full mb-5 group">
                        <label for="floating_last_name" className="text-gray-500">Nombre de Voitures</label>
                        <div className="py-2 px-3 inline-block rounded-lg" data-hs-input-number>
                           <div className="flex items-center gap-x-1.5">
                              <button type="button" className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-input-number-decrement>
                                 <svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
                              </button>
                              <input className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0" type="text" value="0" data-hs-input-number-input />
                              <button type="button" className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-input-number-increment>
                                 <svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                              </button>
                           </div>
                        </div>
                     </div>
                     <div className="relative z-0 w-full mb-5 group">
                        <label for="floating_last_name" className="text-gray-500">Nombre de Jours</label>
                        <div className="py-2 px-3 inline-block rounded-lg " data-hs-input-number>
                           <div className="flex items-center gap-x-1.5">
                              <button type="button" className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-input-number-decrement>
                                 <svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
                              </button>
                              <input className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0" type="text" value="0" data-hs-input-number-input />
                              <button type="button" className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-input-number-increment>
                                 <svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>



                  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
               </form>


            </div>
         </section>
      </div>
   );
};
export default App;