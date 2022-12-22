import { useState } from "react";
import React from 'react'




export const Rating = (item: any, index: any) => {
    const [rate, setRate] = useState(0);
    [...Array(5)].map((item, index) => {
        const givenRating = index + 1;
        return (
        <label>
            <input
            type="radio"
      className='rating'
            value={givenRating}
            onClick={() => {
                setRate(givenRating);
                alert(`Are you sure you want to give ${givenRating} stars ?`);
            }}
            />
            
            <div
                color={
                givenRating < rate || givenRating === rate
                    ? "000"
                    : "rgb(192,192,192)"
                }
            />
            
        </label>
        );
    })}
 

export default Rating
