import React from 'react'
import { termsAndConditions } from '../../../data/termsAndConditions';

const page = () => {
  return (
    <div className="max-w-[900px] mx-auto px-10 xl:px-20 pt-[60px] md:pt-20 pb-5 xl:pt-[150px] xl:pb-10 flex flex-col gap-5 lg:gap-10">
      {termsAndConditions.map((item, index) => {
        return (
          <>
            <div
              className="flex flex-col gap-3"
              key={"termsAndConditions" + index}
            >
              <h3 className="text-xl lg:text-[30px] mb-6 font-bold">
                {item.heading}
              </h3>
              <p className='text-left'>{item.description}</p>
            </div>
          </>
        );
      })}
    </div>
  )
}

export default page