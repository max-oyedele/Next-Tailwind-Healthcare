const BreadCrumb = (props) => {
  const data = props.data
  return (
    <div className="mt-10 px-6 md:px-36">
      <div className="flex items-center">
        {
          data && data.length > 1 &&
          data.map((item, index) => {
            if (index < data.length - 1) {
              return (
                <div key={index}>
                  <span className="text-sm">{item}</span>
                  <span className="text-sm mx-2">/</span>
                </div>
              )
            }
            return (
              <span key={index} className="text-sm">{item}</span>
            )
          })
        }
      </div>
    </div>
  )
}

export default BreadCrumb