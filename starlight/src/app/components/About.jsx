import React from 'react'

function About() {
  return (
    <div id="about" className="about-us section">
  <div className="containe services">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
      <div className="col-span-12 lg:col-span-4">
        <div className="flex justify-center lg:justify-start">
          <div className="w-64 lg:w-full">
            <img  src="/images/about-left-image.png" alt="person graphic" className="w-full" />
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-8 flex mx-auto  items-center">
        <div className="grid   grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="   item  col-span-1 lg:col-span-1">
            <div className="  flex items-center">
              <img src="/images/1.png" alt="reporting" className=" w-20 h-20" />
              <div className="ml-4">
                <h4 className="text-xl text-white font-bold">Vision Statement:</h4>
                <p className=' text-white'>Nurture brilliance, empower, community impact.</p>
              </div>
            </div>
          </div>
          <div className=" item   col-span-1 lg:col-span-1">
            <div className="flex items-center">
              <img src="/images/2.png" alt="" className=" w-20 h-20" />
              <div className="ml-4">
                <h4 className="text-xl  text-white font-bold">Mission Statement:</h4>
                <p className=' text-white'>Transformative, ignite curiosity, lifelong learners.</p>
              </div>
            </div>
          </div>
          <div className=" item  col-span-1 lg:col-span-1">
            <div className="flex items-center">
              <img src="/images/3.png" alt="" className=" w-20 h-20" />
              <div className="ml-4">
                <h4 className="text-xl text-white font-bold">Core Values:</h4>
                <p className=' text-white'>Excellence: Strive, grow, personal achievement, standards.</p>
              </div>
            </div>
          </div>
          <div className=" item  col-span-1 lg:col-span-1">
            <div className="flex items-center">
              <img src="/images/4.png" alt="" className=" w-20 h-20" />
              <div className="ml-4">
                <h4 className="text-xl text-white font-bold">Distinctive Features:</h4>
                <p className=' text-white'>State-of-the-Art Facilities: Modern, dynamic, equipped, conducive learning.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default About
