const Descripcion = () => {
  return (
    <div className=" ml-36">
      <div className="grid grid-cols-2">
        <div>
          <div className="flex flex-col md:flex-row md:items-center justify-between border-t  border-gray-500/20  mb-6">
            <div className="flex items-center gap-x-10 mt-6">
              <div className=" text-5xl font-semibold text-[#be9738] ">01</div>

              <img
                src="https://images.pexels.com/photos/19686909/pexels-photo-19686909/free-photo-of-calle-colorido-de-colores-colgando.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w-16 h-16 object-cover rounded-full  m-1 "
              />
              <div className="flex items-end pl-3 ">
                <p className="text-gray-900 text-sm font-semibold ">
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
                  relleno estándar de las industrias desde el año 1500, cuando
                </p>
              </div>

              <div className="flex pl-3 items-start">40mg</div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between border-t  border-gray-500/20 mb-6">
            <div className="flex items-center gap-x-10 mt-6">
              <div className="text-5xl font-semibold text-[#be9738]">02</div>

              <img
                src="https://images.pexels.com/photos/19686909/pexels-photo-19686909/free-photo-of-calle-colorido-de-colores-colgando.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w-16 h-16 object-cover rounded-full  m-1 "
              />

              <div className="flex items-end pl-3 ">
                <p className="text-gray-900 text-sm font-semibold">
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
                  relleno estándar de las industrias desde el año 1500, cuando
                </p>
              </div>
              <div className="flex pl-3 items-start">40mg</div>
            </div>
          </div>
        </div>

        <div className="p-14 grid justify-center items-center">
          <div className="w-96">
            <p>
              With each dose of MindMend, you embark on a journey of
              self-cfscovery and healing, Fenal the weight of stress and anxiety
              melt away as your a sanctuary of and tranquility
            </p>
            <img
              className="w-12 h-12"
              src="https://cdn.pixabay.com/photo/2016/12/11/07/52/logo-1898929_1280.png"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Descripcion;
