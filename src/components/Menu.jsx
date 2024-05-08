const Menu = () => {
  return (
    <div className="py-12">
      <div className="fixed bottom-28 left-0 -rotate-90  ">
        <p className="flex">
          <p className="text-xl">⟵ </p> Mind lorem
        </p>
      </div>

      <div className="bg-[#fffeef]  ">
        <div className="grid grid-cols-2 ml-36">
          <div className=" flex ">
            <div className="w-96">
              <h1 className="text-8xl text-[#be9738] p-19 font-bold ">
                The<br></br>Serene<br></br>Capsules
              </h1>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              className="rotate-90 w-96 h-96"
              src="https://www.pngmart.com/files/13/Fish-Oil-Capsule-PNG-Picture.png"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
