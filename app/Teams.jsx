import Image from "next/image";

export default function Teams() {
  const teamList = [
    { id: 0,
      url: '/images/about-us/t1.png',
      alt: 'image 1'
    },
    { id: 1,
      url: '/images/about-us/t2.png',
      alt: 'image 2'
    },
    { id: 2,
      url: '/images/about-us/t3.png',
      alt: 'image 3'
    },
    { id: 3,
      url: '/images/about-us/t4.png',
      alt: 'image 4'
    }
  ]
  return (
    <>
        {/* // max-w-[295px]
        // w-full */}
        {teamList.map((team) => (<div
          key={team.id}
          className="
            w-[280px]
            min-h-[383px]
            bg-white
            shadow-md
            hover:shadow-2xl
            px-4
            flex
            flex-col
            items-center
            rounded-2xl border-t-8 border-foundation-primary hover:border-blue transition-all ease-in-out duration-1000"
        >
          {/* Team member image */}
          <div className="h-[296px]">
            <div className={`w-[199px] aspect-square  rounded-full mt-12`}>
              <Image src={team.url} width={199} height={199} alt={team.alt}/>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div>
              <h6 className="mb-4">Devon Lane</h6>
              <small>Devon Lane</small>
            </div>
            <div className="flex items-center justify-between gap-2">
              <div className="w-6 aspect-square bg-purple-500 rounded-full"></div>
              <div className="w-6 aspect-square bg-purple-500 rounded-full"></div>
              <div className="w-6 aspect-square bg-purple-500 rounded-full"></div>
            </div>
          </div>
        </div>))}
    </>
  );
}
