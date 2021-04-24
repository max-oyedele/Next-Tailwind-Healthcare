const FrequentQuestion = (props) => {
  return (
    <div className="px-6 md:px-36 sm:flex">
      <div className="sm:w-1/3 mt-4">
        <span className="block w-1/2 text-2xl font-bold">Frequently asked questions</span>
        <span className="block text-md mt-6">More questions?</span>
        <button className="link text-md">Visit our help center {'>'}</button>
      </div>
      <div className="sm:w-2/3 mt-4">
        {
          props.data?.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between items-center">
                <span className="text-md">{item.question}</span>
                <button><img src="/icons/action/chevron_down.svg" alt="chevron" /></button>
              </div>
              <hr className="border-gray-300 my-4" />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default FrequentQuestion