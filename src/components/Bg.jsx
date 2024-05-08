import { useState } from "react"
import { FaArrowRight, FaCalendar, FaSearch } from "react-icons/fa"
import { FaLocationPin, FaPerson } from "react-icons/fa6"


export const Bg = () => {
    const [active,setActive]=useState('Hostales')
  return (
    <div className="container mx-auto px-6 pt-12">
        <div className="relative rounded-2xl lg:pb-32 lg:h-[70vh]">
            <div className="overflow-hidden relative h-full w-full">
                <img src="/lago.jpg" alt="" className="lg:absolute top-0 w-full lg:h-[70vh] hh-[30rem] object-cover rounded-2xl"/>
            </div>

            <div className="absolute top-0 bottom-0 left-0 right-0 h-fit">
                <h1 className="text-white text-4xl flex justify-center mt-16 font-bold lg:w-4/5 mx-auto text-center">Explora el Perú entero y disfruta su belleza</h1>
                <p className="flex justify-center text-white mt-4 px-6 text-center">
                    Encuentra y vive una experiencia diferente en el Perú
                </p>
            </div>

            <div className="lg:w-4/5 mx-auto lg:h-[70vh] h-full">
                <div className="absolute top-52 bg-white px-8 py-8  rounded-[10px] lg:absolute bottom-52  lg:w-4/5 shadow-lg">
                    <div className="lg:flex gap-4 gap-x-2">
                        <div className="flex flex-wrap gap-x-16 w-full">
                            <button onClick={()=>setActive('Hostales')}
                            className={`rounded-sm flex gap-x-2 items-center focus:outline-none h-14 text-base cursor-pointer bg-transparent whitespace-pre ${active === "Hostales"?"text-black border-b-2 border-solid border-black":"text-secondary"}`}>
                                Hostales
                            </button>
                            <button onClick={()=>setActive('Vuelos')}
                            className={`rounded-sm flex gap-x-2 items-center focus:outline-none h-14 text-base cursor-pointer bg-transparent whitespace-pre ${active === "Vuelos"?"text-black border-b-2 border-solid border-black":"text-secondary"}`}>
                                Vuelos
                            </button>
                            <button onClick={()=>setActive('Autobus')}
                            className={`rounded-sm flex gap-x-2 items-center focus:outline-none h-14 text-base cursor-pointer bg-transparent whitespace-pre ${active === "Autobus"?"text-black border-b-2 border-solid border-black":"text-secondary"}`}>
                                Autobus
                            </button>
                            <button onClick={()=>setActive('Taxis')}
                            className={`rounded-sm flex gap-x-2 items-center focus:outline-none h-14 text-base cursor-pointer bg-transparent whitespace-pre ${active === "Taxis"?"text-black border-b-2 border-solid border-black":"text-secondary"}`}>
                                Taxis
                            </button>                            
                        </div>
                        <button className="whitespace-pre flex items-center gap-2 bg-transparent outline-none border-none text-secondary">
                            Ultima Búsqueda
                            <FaArrowRight/>
                        </button>
                    </div>

                    <div className="flex flex-wrap items-end gap-4 justify-between border-t border-solid py-4">
                        <div>
                            <p className="text-secondary text-lg">Destino</p>
                            <div className="relative h-10 w-40 flex items-center">
                                <FaLocationPin size={12} className="text-white absolute top-0 bottom-0 left-2 z-10 h-full"/>
                                <input type="text" placeholder="Ayacucho,Perú" className="bg-secondary rounded-md px-8 py-1 text-sm absolute h-full w-full"/>
                            </div>
                        </div>                       
                            
                        <div className="relative h-10 w-40 flex items-center">
                            <FaCalendar size={12} className="text-white absolute top-0 bottom-0 left-2 z-10 h-full"/>
                            <input type="date" defaultValue="2024-03-05" placeholder="Ayacucho,Perú" className="bg-secondary rounded-md px-8 py-1 text-sm absolute h-full w-full"/>
                        </div>                      
                            
                        <div className="relative h-10 w-40 flex items-center">
                            <FaCalendar size={12} className="text-white absolute top-0 bottom-0 left-2 z-10 h-full"/>
                            <input type="date" defaultValue="2024-03-08" placeholder="Ayacucho,Perú" className="bg-secondary rounded-md px-8 py-1 text-sm absolute h-full w-full"/>
                        </div>                           
                                                    
                        <div className="relative h-10 w-40 flex items-center">
                            <FaPerson size={12} className="text-white absolute top-0 bottom-0 left-2 z-10 h-full"/>
                            <input type="text" placeholder="Persona" className="bg-secondary rounded-md px-8 py-1 text-sm absolute h-full w-full "/>
                        </div>  

                        <div className="text-white h-10 w-40 flex items-center justify-center">
                            <button className="rounded-lg bg-primary placeholder:text-white px-2 outline-none h-full w-full flex items-center justify-center gap-2 hover:bg-white hover:text-primary transition-bg shadow">
                                <FaSearch/>
                                Buscar
                            </button>
                        </div>                          
                        
                    </div>                                                        
                </div>
            </div>
        </div>
    </div>
  )
}
