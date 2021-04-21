import ReactPaginate from 'react-paginate'

const Paginate = () => {
  const handlePageClick = () => {

  }

  return (
    <div className="flex justify-center mt-4 mb-10">
      <ReactPaginate
        previousLabel={'< Back'}
        nextLabel={'Next >'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={3}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  )
}

export default Paginate