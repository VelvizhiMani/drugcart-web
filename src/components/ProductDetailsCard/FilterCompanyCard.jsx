import React from 'react'

const FilterCompanyCard = () => {
  return (
    <>
      <div className="text-center bg-[#35A24D] p-2 mt-10 border-b-2 px-4">
            <h2 className="text-xl text-white font-bold ps-7">
              Filter By Company
            </h2>
          </div>
          <div className="items-center justify-start gap-2 border-[1.5px] mb-10">
            <h2 className="text-md font-bold p-2 border-b-2 px-4">
              Revyur beauty care india pvt ltd
            </h2>
            <h2 className="text-md font-bold p-2 border-b-2 px-4">
              Blossom kochhar aroma magic
            </h2>
            <h2 className="text-md font-bold p-2 border-b-2 px-4">
              Sriveda sattva pvt ltd
            </h2>
            <h2 className="text-md font-bold p-2 border-b-2 px-4">
              Vlcc health care ltd
            </h2>
            <h2 className="text-md font-bold p-2 px-4">Dabur india ltd</h2>
          </div>  
    </>
  )
}

export default FilterCompanyCard;