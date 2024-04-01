import React from "react";

function Reviews() {
  return (
    <div id="reviews" className="  container mx-auto mt-[100px]">
      <div className=" text-center mb-16">
        <h2 className=" text-2xl md:text-3xl font-bold text-purple-900">
          Reviews
        </h2>
        <h2 className=" text-4xl md:text-5xl font-bold text-blue-800">
          What are people saying ..
        </h2>
      </div>
      <div className=" flex flex-wrap justify-center  items-center">
        <div class="card w-full md:w-[380px] h-96 bg-base-100 shadow-xl image-full mb-8 md:mr-8">
          {" "}
          <figure>
            <img src="/images/review1.jpg" alt="Shoes" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">Mark .</h2>
            <p>
              "Starlight School has been a game-changer for my academic journey.
              The teachers are incredibly supportive, and the curriculum is
              top-notch. I've grown both academically and personally since
              joining."
            </p>
            <div className="card-actions justify-end">
              <div className="rating w-44">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-white"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-white"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-white"
                  checked
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-white"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-white"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="card w-full md:w-[380px] h-96 bg-base-100 shadow-xl image-full mb-8 md:mr-8">
          {" "}
          <figure>
            <img src="/images/review2.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Thomas . </h2>
            <p>
              "Attending Starlight has been a transformative experience. The
              teachers go above and beyond to ensure student success. I've
              developed strong language skills and confidence, thanks to their
              dedicated support."
            </p>
            <div className="card-actions justify-end">
              <div className="rating w-44 ">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-white"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-white"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-white"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-white"
                  checked
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-white"
                />
              </div>{" "}
            </div>
          </div>
        </div>
        <div class="card w-full md:w-[380px] h-96 bg-base-100 shadow-xl image-full mb-8 md:mr-8">
          {" "}
          <figure>
            <img src="/images/review3.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Ania .</h2>
            <p>
              "Starlight School exceeded my expectations. The programming
              hackathon support was phenomenal. I learned valuable coding
              techniques and teamwork skills that have been instrumental in my
              career development. Highly recommended!"
            </p>
            <div className="card-actions justify-end">
              <div className="rating w-44">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-white"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-white"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-white"
                  checked
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-white"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-white"
                />
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
