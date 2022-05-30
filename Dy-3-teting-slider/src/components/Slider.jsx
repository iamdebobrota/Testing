import React, { useState } from "react";
import Button from "./Button";

const Slider = ({ data }) => {
  const [page, setPage] = useState(0);
  return (
    <div data-testid="slider">
      {data.map((el, indx) => {
        if (indx === page) {
          return (
            <div key={indx}>
              <h3 data-testid='question'>{el.question}</h3>
              <p data-testid='answer'>{el.answer}</p>
            </div>
          );
        }
        return false
      })}
      <div>
        <Button data-testid='prev_btn' disabled={page===0 ? true:false} onClick={()=>setPage(page-1)}>Prev</Button>
        <Button data-testid='next_btn' disabled={page===data.length-1 ? true:false} onClick={()=>setPage(page+1)}>Next</Button>
      </div>
    </div>
  );
};

export default Slider;