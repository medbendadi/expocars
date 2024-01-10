import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const FormSponsor = () => {
   const [companie, setCompanie] = useState('')
   const [fname, setFname] = useState('')
   const [lname, setLname] = useState('')
   const [email, setEmail] = useState('')
   const [phone, setPhone] = useState('')
   const [post, setPost] = useState('')
   const [message, setMessage] = useState('')

   const onSubmit = async (e) => {
      e.preventDefault()
      try {
      const data = await axios.post(`${process.env.BaseURL}/sponsor/create`, { company: companie, first_name: fname, last_name: lname, email, phone_1: phone, position: post , comment: message })         
      } catch (err) {
         toast.error("Votre message n'a pas été reçu ")   
      }

      toast.success('Votre message bien recu ')

      setCompanie('')
      setEmail('')
      setFname('')
      setLname('')
      setMessage('')
      setPhone('')
      setPost('')
   }
   return (
      <div className='bg-black min-h-[100vh] relative'>
         <img className='w-[250px] absolute right-0 -z-10' src={require("../src/assets/icons/1.png")} alt="" />


         <section className='px-[3vw] py-[8vh]'>
            <h1 className='mx-auto text-center text-red-500 z-10 text-6xl font-bold w-fit'>Devenir<br /> Sponsor</h1>
            <div className='w-full p-12 min-[100vh]:  flex items-center sm:flex-row flex-col rounded-xl mb-[10vh] mt-[10vh]'>


               <form className="sm:w-2/3 w-full mx-auto" onSubmit={onSubmit}>
                  <div className="relative z-0 w-full mb-5 group">
                     <input type="text" name="companie" id="companie" value={companie} onChange={e=> setCompanie(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                     <label htmlFor="companie" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Entreprise</label>
                  </div>
                  <div className="grid md:grid-cols-2 md:gap-6">
                     <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="first_name" id="first_name" value={fname} onChange={e=> setFname(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Prenom</label>
                     </div>
                     <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="last_name" id="last_name" value={lname} onChange={e=> setLname(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nom</label>
                     </div>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                     <input type="email" name="email" id="email" value={email} onChange={e=> setEmail(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                     <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Adresse e-mail</label>
                  </div>
                  <div className="grid md:grid-cols-2 md:gap-6">
                     <div className="relative z-0 w-full mb-5 group">
                        <input type="tel" pattern="[0-9]{10}" name="phone" id="phone" value={phone} onChange={e=> setPhone(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Numéro de téléphone (0600110011)</label>
                     </div>
                     <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="post" id="post" value={post} onChange={e=> setPost(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="post" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Post occupé</label>
                     </div>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                  <label htmlFor="message" className="block mb-2 font-medium text-gray-900 dark:text-gray-400">Quels sont vos objectifs principaux pour nouer un partenariat avec MAISON&OBJET ? (Promotion de votre marque, accueil de vos clients, lancement d'un nouveau produit...)</label>
  <textarea id="message" rows="4" value={message} onChange={e=> setMessage(e.target.value)} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 focus:border-none focus:outline-none" placeholder="laissez un commentaire..."></textarea>
                  </div>
                  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
               </form>



            </div>
         </section>
      </div>
   )
}

export default FormSponsor