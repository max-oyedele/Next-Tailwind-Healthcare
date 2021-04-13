import { BiVideo, BiVideoOff } from "react-icons/bi";

const TxtContainer = () => {
  return (
    <div className="px-6 md:px-52 lg:px-96 flex flex-col">
      <span className="text-2xl text-gray-900 font-bold mt-10">About Katarzyna(Kasia) Ostrezenska, MD</span>
      <span className="text-md text-gray-900 font-bold mt-6">Clinical Expertise:</span>
      <span className="text-sm text-gray-700 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum dignissim lorem a semper. Neque feugiat ultricies id pellentesque. Enim cursus tellus dolor scelerisque eu, lectus scelerisque egestas ipsum. Adipiscing aliquet consequat sit nunc, suscipit neque suspendisse elit. Sed nulla felis diam tellus aliquet. Lectus congue adipiscing porta vitae mi vestibulum. Mi pellentesque eget eget libero volutpat, diam. Varius ultrices mauris ullamcorper id odio. Augue turpis ut egestas luctus cursus. Cras eget vel tortor sed vitae bibendum.</span>

      <span className="text-md text-gray-900 font-bold mt-6">Clinical Expertise:</span>
      <span className="text-sm text-gray-700 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum dignissim lorem a semper. Neque feugiat ultricies id pellentesque. Enim cursus tellus dolor scelerisque eu, lectus scelerisque egestas ipsum. Adipiscing aliquet consequat sit nunc, suscipit neque suspendisse elit. Sed nulla felis diam tellus aliquet. Lectus congue adipiscing porta vitae mi vestibulum. Mi pellentesque eget eget libero volutpat, diam. Varius ultrices mauris ullamcorper id odio. Augue turpis ut egestas luctus cursus. Cras eget vel tortor sed vitae bibendum.</span>

      <span className="text-md text-gray-900 font-bold mt-6">Clinical Expertise:</span>
      <span className="text-sm text-gray-700 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum dignissim lorem a semper. Neque feugiat ultricies id pellentesque. Enim cursus tellus dolor scelerisque eu, lectus scelerisque egestas ipsum. Adipiscing aliquet consequat sit nunc, suscipit neque suspendisse elit. Sed nulla felis diam tellus aliquet. Lectus congue adipiscing porta vitae mi vestibulum. Mi pellentesque eget eget libero volutpat, diam. Varius ultrices mauris ullamcorper id odio. Augue turpis ut egestas luctus cursus. Cras eget vel tortor sed vitae bibendum.</span>

      <span className="text-md text-gray-900 font-bold mt-6">Clinical Expertise:</span>
      <span className="text-sm text-gray-700 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum dignissim lorem a semper. Neque feugiat ultricies id pellentesque. Enim cursus tellus dolor scelerisque eu, lectus scelerisque egestas ipsum. Adipiscing aliquet consequat sit nunc, suscipit neque suspendisse elit. Sed nulla felis diam tellus aliquet. Lectus congue adipiscing porta vitae mi vestibulum. Mi pellentesque eget eget libero volutpat, diam. Varius ultrices mauris ullamcorper id odio. Augue turpis ut egestas luctus cursus. Cras eget vel tortor sed vitae bibendum.</span>
    </div>
  )
}

const MeetContainer = () => {
  const data = [
    {
      title: 'Boston',
      label: '2972 Westheimer Rd. Santa Ana, Illinois 85486',
      img: '/doctor/meetImg1.png',
      subTitle: 'Clifford Gluck, MD',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      available: true
    },
    {
      title: 'Boston',
      label: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
      img: '/doctor/meetImg2.png',
      subTitle: 'Tanya Judge, MD',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      available: false
    }
  ]

  return (
    <div className="px-6 md:px-36 my-16">
      <div className="flex flex-col items-center">
        <span className="text-2xl text-gray-900 font-bold">Meet other doctors</span>
      </div>
      <div className="flex justify-center">
        <div className="w-full md:w-3/4 sm:grid sm:grid-cols-2 sm:gap-x-6">
          {
            data.map((item, index) => (
              <div key={index} className="bg-gray-100 px-4 py-6 flex flex-col rounded-sm mt-6">
                <span className="text-sm text-gray-900 font-bold uppercase">{item.title}</span>
                <span className="text-xs text-gray-700 mt-3">{item.label}</span>
                <div className="bg-white flex justify-center items-center rounded-sm mt-6">
                  <img src={item.img} className="object-cover w-full h-full" alt={item.title} />
                </div>
                <span className="text-sm text-gray-900 mt-6">{item.subTitle}</span>
                <span className="text-sm text-gray-700 mt-4">{item.desc}</span>
                <div className="flex items-center mt-10">
                  {
                    item.available ?
                      <BiVideo />
                      :
                      <BiVideoOff />
                  }
                  <span className="text-sm text-gray-900 ml-1">Virtual Consultation {item.available ? 'Available' : 'Not Available'}</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

const Profile = () => {
  return (
    <div>
      <TxtContainer />
      <MeetContainer />
    </div>
  )
}

export default Profile