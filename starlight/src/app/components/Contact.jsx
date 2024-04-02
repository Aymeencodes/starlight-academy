"use client";
import React, { useState } from "react";
import Lottie from "lottie-react";
import contactAnimation from "../animation/contact.json";
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("xzbnjkpy");
  if (state.succeeded) {
      return <div role="alert" className="alert mb-9 container mx-auto alert-success">
      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span>your message has been sent </span>
    </div>;
  }

  return (
    <div
      id="contact"
      className=" container mx-auto mt-[100px] flex flex-col md:flex-row justify-between "
    >
      <div className=" w-[100%]   md:w-[50%]">
        <h1 className=" text-center md:text-left text-4xl font-bold ">
          Contact our School
        </h1>
        <form onSubmit={handleSubmit} className="card-body p-0 pt-8" >
          <div className="form-control">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="email"
           
              className="input input-bordered"
             
              required
            />
             <ValidationError
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
          </div>
          <div className="form-control">
            <label className="label"></label>
            <textarea
             
             name="message"
              id="message"
              rows="4"
              required
              className="block p-2.5 w-full text-sm text-gray-900  rounded-lg border  border-gray-300 focus:border-blue-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
            <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
          </div>
          <div className="form-control mt-6">
            <button disabled={state.submitting} type="submit" className="btn btn-primary">Send</button>
          </div>
        </form>
        
      </div>
      <div>
        <div className=" animation">
          <Lottie
            className="contact-animation"
            style={{ height: 500 }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
