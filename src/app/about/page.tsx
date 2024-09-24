export default function AboutPage() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url('/assets/aboutTopBg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "30rem",
          width: "100%",
          filter: "#912828",
          color: "white",
        }}
      >
        <div className="mx-16 pt-[15%] tracking-wider">
          <div className="flex items-center">
            <div className="w-4 h-9 bg-[#620808] mr-4"></div>
            <h1 className="text-[4rem] font-extrabold">What is Kantonize?</h1>
          </div>
          <h2 className="ml-[3rem] tracking-wider text-[16px]">
            Kantonize is a Kanton Customizing Website. The customization you
            never knew you’ll need.
          </h2>
        </div>
      </div>

      <div className="text-center my-12">
        <h1 className="text-6xl font-extrabold">MEET THE TEAM</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 h-auto py-16 relative mt-28">
        <div className="flex flex-col items-center justify-center  relative">
          <div className="bg-[#912828] w-full max-w-lg aspect-[4/3] relative"></div>
          <img
            src="/assets/MARKPIC.png"
            alt="Person 1"
            className="absolute -top-10 w-[240x] h-[423px] z-10"
          />
          <div className="text-center mb-32">
            <h2 className="text-black text-xl font-bold">
              Mark Andrei Encanto
            </h2>
            <p className="text-gray-600">Project Manager</p>
          </div>
          <div className="bg-[#912828] w-full max-w-lg aspect-[4/3]"></div>
          <img
            src="/assets/MARKPIC.png"
            alt="Person 1"
            className="absolute top-[33rem] w-[240x] h-[420PX] z-10"
          />
          <div className="text-center mb-32">
            <h2 className="text-black text-xl font-bold">Khee Jay Galvez</h2>
            <p className="text-gray-600">Developer</p>
          </div>
          <div className="bg-[#912828] w-full max-w-lg aspect-[4/3]"></div>
          <img
            src="/assets/MARKPIC.png"
            alt="Person 1"
            className="absolute bottom-[11.25rem] w-[240x] h-[423px] z-10"
          />
          <div className="text-center mb-32">
            <h2 className="text-black text-xl font-bold">
              Cherilyn Marie Deocampo
            </h2>
            <p className="text-gray-600">UI/UX Designer</p>
          </div>
        </div>

        {/* Second grid item */}
        <div className="flex flex-col items-center justify-center relative">
          <div className="bg-[#912828] w-full max-w-lg aspect-[4/3] relative"></div>
          <img
            src="/assets/CHAPIC.png"
            alt="Person 2"
            className="absolute -top-[8.5rem] w-[240x] h-[520PX] z-10"
          />
          <div className="text-center mb-32">
            <h2 className="text-black text-xl font-bold">
              Chariz Dianne Falco
            </h2>
            <p className="text-gray-600">Developer</p>
          </div>
          <div className="bg-[#912828] w-full max-w-lg aspect-[4/3]"></div>
          <img
            src="/assets/CHAPIC.png"
            alt="Person 2"
            className="absolute top-[26.75rem] w-[240x] h-[520PX] z-10"
          />
          <div className="text-center mb-32">
            <h2 className="text-black text-xl font-bold">
              Allan Andrews Tacuel
            </h2>
            <p className="text-gray-600">Illustrator/Asset Director</p>
          </div>
          <div className="bg-[#912828] w-full max-w-lg aspect-[4/3]"></div>
          <img
            src="/assets/JEPHPIC.png"
            alt="Person 2"
            className="absolute bottom-[11.25rem] w-[460px] h-[620px] z-10"
          />
          <div className="text-center mb-32">
            <h2 className="text-black text-xl font-bold">
              Jephone Israel Jireh Torre
            </h2>
            <p className="text-gray-600">UI/UX Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
