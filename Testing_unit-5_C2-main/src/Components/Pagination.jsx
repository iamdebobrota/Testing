import './style.css'
import ReactPaginate from 'react-paginate';

export const Pagination = ({ total, selected, onPageChange }) => {
  return <div className="pageContainer"  data-testid="pagination">
    {/* <div>Prev</div>
   {
     new Array(total).fill(1).map((e,i)=>(
       <div key={i} className='child'>{i+1}</div>
     ))
   }
    <div>Next</div> */}

<ReactPaginate
                  previousLabel={"prev"}
                  nextLabel={"next"}
                  pageCount={20}
                 
                  pageRangeDisplayed={25}
                  onPageChange={onPageChange}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}/>
  </div>;
};
