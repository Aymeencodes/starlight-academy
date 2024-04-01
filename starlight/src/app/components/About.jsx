import React from 'react'

function About() {
  return (
    <div id="about" class="about-us section">
  <div class="containe services">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-4">
      <div class="col-span-12 lg:col-span-4">
        <div class="flex justify-center lg:justify-start">
          <div class="w-64 lg:w-full">
            <img  src="/images/about-left-image.png" alt="person graphic" class="w-full" />
          </div>
        </div>
      </div>
      <div class="col-span-12 lg:col-span-8 flex mx-auto  items-center">
        <div class="grid   grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="   item  col-span-1 lg:col-span-1">
            <div class="  flex items-center">
              <img src="/images/1.png" alt="reporting" class=" w-20 h-20" />
              <div class="ml-4">
                <h4 class="text-xl text-white font-bold">Vision Statement:</h4>
                <p className=' text-white'>Nurture brilliance, empower, community impact.</p>
              </div>
            </div>
          </div>
          <div class=" item   col-span-1 lg:col-span-1">
            <div class="flex items-center">
              <img src="/images/2.png" alt="" class=" w-20 h-20" />
              <div class="ml-4">
                <h4 class="text-xl  text-white font-bold">Mission Statement:</h4>
                <p className=' text-white'>Transformative, ignite curiosity, lifelong learners.</p>
              </div>
            </div>
          </div>
          <div class=" item  col-span-1 lg:col-span-1">
            <div class="flex items-center">
              <img src="/images/3.png" alt="" class=" w-20 h-20" />
              <div class="ml-4">
                <h4 class="text-xl text-white font-bold">Core Values:</h4>
                <p className=' text-white'>Excellence: Strive, grow, personal achievement, standards.</p>
              </div>
            </div>
          </div>
          <div class=" item  col-span-1 lg:col-span-1">
            <div class="flex items-center">
              <img src="/images/4.png" alt="" class=" w-20 h-20" />
              <div class="ml-4">
                <h4 class="text-xl text-white font-bold">Distinctive Features:</h4>
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
