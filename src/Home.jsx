import React, { useEffect, useState } from 'react'
import FormVende from './FormVende'
import FormSponsor from './FormSponsor'


const Home = () => {
  return (
    <div className='relative'>
      <img className='sm:w-[250px] w-[150px] absolute right-0' src={require("../src/assets/icons/1.png")} alt="" />

      <div className='h-[100vh] container px-[3vw] mx-auto'>
        <img className='w-[170px] mx-auto pt-[60px]' src={require("../src/assets/Salon des Voitures d'Occasions d'Agadir معرض السيــــــارات المستعملــــــة بأكاديــــــر.png")} alt="" />
        <h1 className='text-3xl text-center mt-5'>معرض السيــــــارات المستعملــــــة بأكاديــــــر</h1>
        <h1 className='text-3xl text-center mt-5'>Salon des Voitures d'Occasions d'Agadir</h1>
        <img className='sm:w-[600px] w-[80%] mx-auto pt-[100px]' src={require("../src/assets/car.PNG")} alt="" />
        <h1 className='text-3xl text-center mt-5'>Du 21 au 28 Janvier 2024 <br /> Parc d’exposition Agadir</h1>
        <div className='w-full flex items-center justify-between mt-[8vh]'>
          <h1 className='sm:text-xl text-xs text-center mt-5'>05 25 16 46 64 <br />voiturexpo.ma</h1>
          <img className='sm:w-[200px] w-[100px]' src={require("../src/assets/icons/7.png")} alt="" />
        </div>
      </div>


      <div className='bg-white min-h-[100vh] relative'>
        <img className='w-[250px] absolute right-0 opacity-15' src={require("../src/assets/icons/2.png")} alt="" />


        <section className='px-[3vw] pt-[8vh]'>
          <h1 className='mx-auto text-center text-red-500 text-6xl font-bold w-fit'>À PROPOS DE <br /> L'ÉVÉNEMENT</h1>
          <div className='w-full p-12 bg-gray-200 flex items-center sm:flex-row flex-col rounded-xl mb-[10vh] mt-[10vh]'>
            <div className='bg-black min-w-[250px] min-h-[250px] sm:mr-14 mr-0 sm:mb-0 mb-8 flex items-center justify-center'>
              <img className='w-[220px]' src={require("../src/assets/Salon des Voitures d'Occasions d'Agadir معرض السيــــــارات المستعملــــــة بأكاديــــــر.png")} alt="" />
            </div>
            <p className='text-[#09163b] text-lg sm:text-left text-center'>
              Le salon des voitures d'occasion constitue une opportunité incontournable pour les particuliers et les entreprises envisageant l'achat ou la vente de véhicules d'occasions. Prévu à <span className='font-bold'>Agadir</span> sur une période de huit jours, <span className='font-bold'>du 21 au 28 janvier</span>, l'événement offre plus de 800 emplacements. Soyez assurés de dénicher le véhicule de vos rêves au sein de ce cadre exceptionnel.
            </p>
          </div>
          <div className='grid gap-[5rem] justify-center sm:grid-cols-repeat grid-cols-1'>
            <div className='bg-[#2d2d2e] text-white rounded-xl py-[20px] px-[100px] flex items-center flex-col'>
              <img className='w-[120px]' src={require("../src/assets/icons/8.png")} alt="" />
              <h2 className='font-bold my-[3vh]'>VENTE</h2>
              <p className='text-center'>Mettez en avant vos véhicules avec notre public engagé, forgez des relations solides</p>
            </div>
            <div className='bg-[#2d2d2e] text-white rounded-xl py-[25px] px-[100px] flex items-center flex-col'>
              <img className='w-[120px]' src={require("../src/assets/icons/9.png")} alt="" />
              <h2 className='font-bold my-[3vh]'>ACHAT</h2>
              <p className='text-center'>Trouvez la voiture de vos rêves et initiez une nouvelle aventure sur la route.</p>
            </div>
            <div className='bg-[#2d2d2e] text-white rounded-xl py-[25px] px-[100px] flex items-center flex-col'>
              <img className='w-[120px]' src={require("../src/assets/icons/10.png")} alt="" />
              <h2 className='font-bold my-[3vh]'>REPRISE</h2>
              <p className='text-center'>Mettez en avant votre engagement envers une économie circulaire et écologique.</p>
            </div>
            <div className='bg-[#2d2d2e] text-white rounded-xl py-[25px] px-[100px] flex items-center flex-col'>
              <img className='w-[250px] mt-8' src={require("../src/assets/Salon des Voitures d'Occasions d'Agadir معرض السيــــــارات المستعملــــــة بأكاديــــــر.png")} alt="" />
              <h2 className='font-bold my-[3vh]'>VOITUREXPO</h2>
              <p className='text-center'>Notre objectif est de vous offrir une expérience holistique et enrichissante dans le monde de l'automobile d'occasion.</p>
            </div>
          </div>
        </section>

        <section className='bg-white relative mt-[13vh] pb-[20vh]'>
          <img className='w-[250px] absolute right-0 opacity-15' src={require("../src/assets/icons/2.png")} alt="" />
          <div className='px-[3vw] pt-[8vh] text-black'>
            <h1 className='text-center text-red-500  text-6xl font-bold '>SERVICES <br /> SUR PLACE</h1>
            <p className='sm:text-2xl text-md mt-[10vh] sm:text-left text-center'>Notre engagement va bien au-delà de la simple présentation de voitures. Au sein de cet événement exceptionnel, nous vous invitons à découvrir une gamme de services soigneusement conçus pour sublimer votre expérience, que vous soyez acheteur, vendeur ou simplement un passionné d'automobile. Plongez dans un univers où l'excellence du service rencontre la passion automobile.
            </p>
            <div className='w-full py-12 px-[10vw] bg-gray-200 flex flex-col items-center justify-center rounded-xl mt-[10vh]'>
              <div className='flex items-center justify-between w-full'>
                <div className='text-center sm:text-[1rem] text-xs font-bold flex items-center flex-col'>
                  <div className='rounded-full mb-[1vh] bg-white sm:w-[70px] sm:h-[70px] w-[50px] h-[50px] flex items-center justify-center'>
                    <img className='sm:w-[50px] w-[30px]' src={require("../src/assets/icons services/1.png")} alt="" />
                  </div>
                  Parking
                </div>
                <div className='text-center sm:text-[1rem] text-xs font-bold flex items-center flex-col'>
                  <div className='rounded-full mb-[1vh] bg-white sm:w-[70px] sm:h-[70px] w-[50px] h-[50px] flex items-center justify-center'>
                    <img className='sm:w-[50px] w-[30px]' src={require("../src/assets/icons services/2.png")} alt="" />
                  </div>
                  Légalisation
                </div>
                <div className='text-center sm:text-[1rem] text-xs font-bold flex items-center flex-col'>
                  <div className='rounded-full mb-[1vh] bg-white sm:w-[70px] sm:h-[70px] w-[50px] h-[50px] flex items-center justify-center'>
                    <img className='sm:w-[50px] w-[30px]' src={require("../src/assets/icons services/3.png")} alt="" />
                  </div>
                  Narsa Services
                </div>
                <div className='text-center sm:text-[1rem] text-xs font-bold flex items-center flex-col'>
                  <div className='rounded-full mb-[1vh] bg-white sm:w-[70px] sm:h-[70px] w-[50px] h-[50px] flex items-center justify-center'>
                    <img className='sm:w-[50px] w-[30px]' src={require("../src/assets/icons services/4.png")} alt="" />
                  </div>
                  Financement
                </div>
              </div>
              <div className='flex items-center justify-between w-full mt-[15vh]'>
                <div className='text-center sm:text-[1rem] text-xs font-bold flex items-center flex-col'>
                  <div className='rounded-full mb-[1vh] bg-white sm:w-[70px] sm:h-[70px] w-[50px] h-[50px] flex items-center justify-center'>
                    <img className='sm:w-[50px] w-[30px]' src={require("../src/assets/icons services/5.png")} alt="" />
                  </div>
                  Sécurité
                </div>
                <div className='text-center sm:text-[1rem] text-xs font-bold flex items-center flex-col'>
                  <div className='rounded-full mb-[1vh] bg-white sm:w-[70px] sm:h-[70px] w-[50px] h-[50px] flex items-center justify-center'>
                    <img className='sm:w-[50px] w-[30px]' src={require("../src/assets/icons services/6.png")} alt="" />
                  </div>
                  Caméras
                </div>
                <div className='text-center sm:text-[1rem] text-xs font-bold flex items-center flex-col'>
                  <div className='rounded-full mb-[1vh] bg-white sm:w-[70px] sm:h-[70px] w-[50px] h-[50px] flex items-center justify-center'>
                    <img className='sm:w-[50px] w-[30px]' src={require("../src/assets/icons services/7.png")} alt="" />
                  </div>
                  Mécanicien
                </div>
                <div className='text-center sm:text-[1rem] text-xs font-bold flex items-center flex-col'>
                  <div className='rounded-full mb-[1vh] bg-white sm:w-[70px] sm:h-[70px] w-[50px] h-[50px] flex items-center justify-center'>
                    <img className='sm:w-[50px] w-[30px]' src={require("../src/assets/icons services/8.png")} alt="" />
                  </div>
                  Lavage
                </div>
              </div>
              <div className='flex items-center justify-between w-full mt-[15vh]'>
                <div className='text-center sm:text-[1rem] text-xs font-bold flex items-center flex-col'>
                  <div className='rounded-full mb-[1vh] bg-white sm:w-[70px] sm:h-[70px] w-[50px] h-[50px] flex items-center justify-center'>
                    <img className='sm:w-[50px] w-[30px]' src={require("../src/assets/icons services/9.png")} alt="" />
                  </div>
                  Test drive
                </div>
                <div className='text-center sm:text-[1rem] text-xs font-bold flex items-center flex-col'>
                  <div className='rounded-full mb-[1vh] bg-white sm:w-[70px] sm:h-[70px] w-[50px] h-[50px] flex items-center justify-center'>
                    <img className='sm:w-[50px] w-[30px]' src={require("../src/assets/icons services/10.png")} alt="" />
                  </div>
                  Internet
                </div>
                <div className='text-center sm:text-[1rem] text-xs font-bold flex items-center flex-col'>
                  <div className='rounded-full mb-[1vh] bg-white sm:w-[70px] sm:h-[70px] w-[50px] h-[50px] flex items-center justify-center'>
                    <img className='sm:w-[50px] w-[30px]' src={require("../src/assets/icons services/11.png")} alt="" />
                  </div>
                  Visite technique
                </div>
                <div className='text-center sm:text-[1rem] text-xs font-bold flex items-center flex-col'>
                  <div className='rounded-full mb-[1vh] bg-white sm:w-[70px] sm:h-[70px] w-[50px] h-[50px] flex items-center justify-center'>
                    <img className='sm:w-[50px] w-[30px]' src={require("../src/assets/icons services/12.png")} alt="" />
                  </div>
                  Restaurant
                </div>
              </div>
            </div>
          </div>

        </section>

        <section className='bg-white relative mt-[13vh] pb-[20vh]'>
          <img className='w-[250px] absolute right-0 opacity-15' src={require("../src/assets/icons/2.png")} alt="" />
          <div className='px-[3vw] pt-[8vh] text-black'>
            <h1 className='text-center text-red-500 text-6xl font-bold '>PROFIL DES<br />EXPOSANTS</h1>
            <p className='sm:text-2xl sm:text-left text-center text-md mt-10'>Le Salon des Voitures d'Occasions d'Agadir, un événement incontournable offrant une diversité répondant à toutes les attentes des passionnés d'automobile, met en avant plusieurs secteurs clés pour enrichir l'expérience des visiteurs.
            </p>
            <div className='grid sm:grid-cols-5 grid-cols-3 gap-y-[10vh] items-center justify-between w-full mt-[10vh]'>
              <div className='text-center font-bold flex items-center flex-col'>
                <img className='w-[70px] mb-[1vh]' src={require("../src/assets/Profils exposants/1.png")} alt="" />
                <div className='px-5 py-2 sm:text-[1rem] text-xs bg-gray-200'>Garagistes</div>

              </div>
              <div className='text-center font-bold flex items-center flex-col'>
                <img className='w-[70px] mb-[1vh]' src={require("../src/assets/Profils exposants/2.png")} alt="" />
                <div className='px-5 py-2 sm:text-[1rem] text-xs bg-gray-200'>Pneumatiques</div>

              </div>
              <div className='text-center font-bold flex items-center flex-col'>
                <img className='w-[70px] mb-[1vh]' src={require("../src/assets/Profils exposants/3.png")} alt="" />
                <div className='px-5 py-2 sm:text-[1rem] text-xs bg-gray-200'>Assurance</div>

              </div>
              <div className='text-center font-bold flex items-center flex-col'>
                <img className='w-[70px] mb-[1vh]' src={require("../src/assets/Profils exposants/4.png")} alt="" />
                <div className='px-5 py-2 sm:text-[1rem] text-xs bg-gray-200'>Banques</div>
              </div>
              <div className='text-center font-bold flex items-center flex-col'>
                <img className='w-[70px] mb-[1vh]' src={require("../src/assets/Profils exposants/5.png")} alt="" />
                <div className='px-5 py-2 sm:text-[1rem] text-xs bg-gray-200'>Lavage</div>
              </div>
              <div className='text-center font-bold flex items-center flex-col'>
                <img className='w-[70px] mb-[1vh]' src={require("../src/assets/Profils exposants/6.png")} alt="" />
                <div className='px-5 py-2 sm:text-[1rem] text-xs bg-gray-200'>Jantes</div>

              </div>
              <div className='text-center font-bold flex items-center flex-col'>
                <img className='w-[70px] mb-[1vh]' src={require("../src/assets/Profils exposants/7.png")} alt="" />
                <div className='px-5 py-2 sm:text-[1rem] text-xs bg-gray-200'>Mécanique</div>

              </div>
              <div className='text-center font-bold flex items-center flex-col'>
                <img className='w-[70px] mb-[1vh]' src={require("../src/assets/Profils exposants/8.png")} alt="" />
                <div className='px-5 py-2 sm:text-[1rem] text-xs bg-gray-200'>Batterie</div>

              </div>
              <div className='text-center font-bold flex items-center flex-col'>
                <img className='w-[70px] mb-[1vh]' src={require("../src/assets/Profils exposants/9.png")} alt="" />
                <div className='px-5 py-2 sm:text-[1rem] text-xs bg-gray-200'>Climatisation</div>
              </div>
              <div className='text-center font-bold flex items-center flex-col'>
                <img className='w-[70px] mb-[1vh]' src={require("../src/assets/Profils exposants/10.png")} alt="" />
                <div className='px-5 py-2 sm:text-[1rem] text-xs bg-gray-200'>Diagnostique</div>
              </div>
              <div className='text-center font-bold flex items-center flex-col'>
                <img className='w-[70px] mb-[1vh]' src={require("../src/assets/Profils exposants/11.png")} alt="" />
                <div className='px-5 py-2 sm:text-[1rem] text-xs bg-gray-200'>Pare-brise</div>

              </div>
              <div className='text-center font-bold flex items-center flex-col'>
                <img className='w-[70px] mb-[1vh]' src={require("../src/assets/Profils exposants/12.png")} alt="" />
                <div className='px-5 py-2 sm:text-[1rem] text-xs bg-gray-200'>Polissage</div>

              </div>
              <div className='text-center font-bold flex items-center flex-col'>
                <img className='w-[70px] mb-[1vh]' src={require("../src/assets/Profils exposants/13.png")} alt="" />
                <div className='px-5 py-2 sm:text-[1rem] text-xs bg-gray-200'>Accessoires</div>

              </div>
              <div className='text-center font-bold flex items-center flex-col'>
                <img className='w-[70px] mb-[1vh]' src={require("../src/assets/Profils exposants/14.png")} alt="" />
                <div className='px-5 py-2 sm:text-[1rem] text-xs bg-gray-200'>Pétrolières</div>
              </div>
              <div className='text-center font-bold flex items-center flex-col'>
                <img className='w-[70px] mb-[1vh]' src={require("../src/assets/Profils exposants/15.png")} alt="" />
                <div className='px-5 py-2 sm:text-[1rem] text-xs bg-gray-200'>Remorquage</div>
              </div>
              <div className='text-center font-bold flex items-center flex-col'>
                <img className='w-[70px] mb-[1vh]' src={require("../src/assets/Profils exposants/16.png")} alt="" />
                <div className='px-5 py-2 sm:text-[1rem] text-xs bg-gray-200'>Tôleries</div>

              </div>
              <div className='text-center font-bold flex items-center flex-col'>
                <img className='w-[70px] mb-[1vh]' src={require("../src/assets/Profils exposants/17.png")} alt="" />
                <div className='px-5 py-2 sm:text-[1rem] text-xs bg-gray-200'>Tracker gps</div>

              </div>
              <div className='text-center font-bold flex items-center flex-col'>
                <img className='w-[70px] mb-[1vh]' src={require("../src/assets/Profils exposants/18.png")} alt="" />
                <div className='px-5 py-2 sm:text-[1rem] text-xs bg-gray-200'>Huiles moteur</div>

              </div>
              <div className='text-center font-bold flex items-center flex-col'>
                <img className='w-[70px] mb-[1vh]' src={require("../src/assets/Profils exposants/19.png")} alt="" />
                <div className='px-5 py-2 sm:text-[1rem] text-xs bg-gray-200'>Vidange</div>
              </div>
              <div className='text-center font-bold flex items-center flex-col'>
                <img className='w-[70px] mb-[1vh]' src={require("../src/assets/Profils exposants/20.png")} alt="" />
                <div className='px-5 py-2 sm:text-[1rem] text-xs bg-gray-200'>Tapisserie</div>
              </div>
            </div>
          </div>
        </section>
        <section className='bg-white relative mt-[13vh] pb-[20vh]'>
          <img className='w-[250px] absolute right-0 opacity-15' src={require("../src/assets/icons/2.png")} alt="" />

          <div className='px-[3vw] pt-[8vh]'>
            <h1 className='text-center text-red-500 text-6xl font-bold'>POURQUOI<br /> EXPOSER ?</h1>
            <div className='grid gap-[5rem] justify-center sm:grid-cols-repeat grid-cols-1 mb-[10vh] mt-[10vh]'>
              <div className='bg-[#2d2d2e] text-white rounded-xl py-[25px] px-[100px] flex items-center flex-col'>
                <img className='w-[120px]' src={require("../src/assets/Pourquoi exposer/7.png")} alt="" />
                <h2 className='font-bold my-[3vh] text-center'>DÉVELOPPER VOTRE RÉSEAU</h2>
                <p className='text-center'>Avec un événement niche, vous aurez recours à divers prestataires à forte valeur ajoutée qui vous permettra de développer votre business</p>
              </div>
              <div className='bg-[#2d2d2e] text-white rounded-xl py-[25px] px-[100px] flex items-center flex-col'>
                <img className='w-[120px]' src={require("../src/assets/Pourquoi exposer/8.png")} alt="" />
                <h2 className='font-bold my-[3vh] text-center'>PROSPECTER EN TEMPS-RÉEL</h2>
                <p className='text-center'>Les réalités du marché sont en perpétuel changement, un aspect où le Salon vous assiste pour mieux informer vos prises de décision</p>
              </div>
              <div className='bg-[#2d2d2e] text-white rounded-xl py-[25px] px-[100px] flex items-center flex-col'>
                <img className='w-[120px]' src={require("../src/assets/Pourquoi exposer/9.png")} alt="" />
                <h2 className='font-bold my-[3vh] text-center'>FAVORISER VOTRE VISIBILITÉ</h2>
                <p className='text-center'>Le salon vous accorde un taux de visibilité accrue, qui s'amortisse dans le temps par une facilité d'accès au divers marchés.</p>
              </div>
              <div className='bg-[#2d2d2e] text-white rounded-xl py-[25px] px-[100px] flex items-center flex-col'>
                <img className='w-[120px]' src={require("../src/assets/Pourquoi exposer/10.png")} alt="" />
                <h2 className='font-bold my-[3vh] text-center'>STIMULER VOTRE ÉQUIPE</h2>
                <p className='text-center'>Engagez vos employés comme ambassadeurs pour stimuler la performance et la motivation en interne.</p>
              </div>
              <div className='bg-[#2d2d2e] text-white rounded-xl py-[25px] px-[100px] flex items-center flex-col'>
                <img className='w-[120px]' src={require("../src/assets/Pourquoi exposer/11.png")} alt="" />
                <h2 className='font-bold my-[3vh] text-center'>ACCROÎTRE VOS VENTES</h2>
                <p className='text-center'>Une mise en relation directe avec vos prospects, favorise l'achat des produits/services et justifie une hausse, forte probable, de votre capital client.</p>
              </div>
              <div className='bg-[#2d2d2e] text-white rounded-xl py-[25px] px-[100px] flex items-center flex-col'>
                <img className='w-[120px]' src={require("../src/assets/Pourquoi exposer/12.png")} alt="" />
                <h2 className='font-bold my-[3vh] text-center'>SE POSITIONNER SUR LE MARCHÉ</h2>
                <p className='text-center'>Le contact direct avec le client renforce votre image de marque, booste vos commandes et renforce votre position sur le marché.</p>
              </div>

            </div>
          </div>

        </section>
        <FormVende />
        <FormSponsor/>
        
        
        <section className='px-[3vw] py-[8vh]'>
            <h1 className='mx-auto text-center text-red-500 text-6xl font-bold w-fit'>Rendez Nous<br /> Visite</h1>
          <div className='w-full sm:p-12 p-5 min-[100vh]: bg-gray-200 flex items-center sm:flex-row flex-col rounded-xl mb-[10vh] mt-[10vh]'>
          <iframe className='sm:h-[600px] h-[400px] ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.8893498128555!2d-9.538354599999998!3d30.4108811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3c9d3725a9d29%3A0xd2e9ec1805ca9c21!2sExpo%20Agadir!5e0!3m2!1sfr!2sma!4v1704927473579!5m2!1sfr!2sma" style={{border:0, width: '100%'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>

      </div>


      <div className='relative w-full h-[100vh]'>
        <img className='sm:w-[250px] w-[150px] absolute right-0' src={require("../src/assets/icons/1.png")} alt="" />

        <div className='h-[100vh] container px-[3vw] mx-auto relative'>
          <div className='flex items-center justify-center flex-col pt-[20vh]'>
            <img className='w-[170px] mx-auto pt-[60px]' src={require("../src/assets/Salon des Voitures d'Occasions d'Agadir معرض السيــــــارات المستعملــــــة بأكاديــــــر.png")} alt="" />
            <h1 className='text-3xl text-center mt-5'>معرض السيــــــارات المستعملــــــة بأكاديــــــر</h1>
            <h1 className='text-3xl text-center mt-5'>Salon des Voitures d'Occasions d'Agadir</h1>
          </div>
          <div className='w-full flex items-center flex-col absolute bottom-16'>
            <img className='sm:w-[200px] w-[100px]' src={require("../src/assets/icons/7.png")} alt="" />
            <h1 className='sm:text-md text-xs text-center mt-5'>Technopark Souss Massa TA128, CP: 80070, Agadir, Maroc</h1>
            <h1 className='sm:text-md text-xs text-center'>Tél: +212 5 25 16 46 64</h1>
            <h1 className='sm:text-md text-xs text-center'>Email: info@ssampartners.ma - Site web: www.ssampartners.ma</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home