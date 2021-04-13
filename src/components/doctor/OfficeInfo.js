const MapContainer = () => {
  return (
    <div className="px-6 md:px-36 grid grid-rows-1 grid-y-4 sm:grid-cols-2 sm:grid-rows-1 sm:gap-x-4 sm:my-10">
      <div className="order-2 sm:order-1 flex flex-col justify-center pr-6 md:pr-16">
        <span className="text-xl text-gray-900 font-bold mt-6">15 Broad St Ste 901</span>
        <span className="text-sm text-gray-700 mt-4">Boston, MA. 02019</span>
        <span className="text-sm text-gray-700 mt-4">Tel: (857)263-7488</span>

        <span className="text-md text-gray-900 font-bold mt-10">Office Hours</span>
        <span className="text-sm text-gray-700 mt-4">Mon - Fri: 8:00AM - 6:00PM</span>

        <span className="text-md text-gray-900 font-bold mt-10">Location details</span>
        <span className="text-sm text-gray-700 mt-4">Members should proceed through the main doors of the Icon building and immediately look to the left once they enter. The Icon building entrance sits on West Peachtree St on the same side of the building as the Whole Foods entrance.</span>

        <span className="text-md text-gray-900 font-bold mt-10">Parking</span>
        <span className="text-sm text-gray-700 mt-4">There's limited street parking available around the building. We will validate up to 1 hour of parking within the Icon garage located on 13th Street NW. From this garage, take the elevator down to the first floor where you will find our office.</span>
      </div>
      <div className="order-1 sm:order-2 mt-6 border">
        <img src="/home/map.png" width="100%" className="object-cover w-full h-full" alt="map" />
      </div>
    </div>
  )
}

const OfficeInfo = () => {
  return (
    <div>
      <MapContainer />
    </div>
  )
}

export default OfficeInfo