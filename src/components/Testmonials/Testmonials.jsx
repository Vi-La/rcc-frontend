import React, { useEffect, useState } from "react";
import { publicRequest } from "../../api";

const Testmonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(()=>{
    const getTestimonials = async ()=>{
      const response = await publicRequest.get("testimonial");
      // console.log("displayed data:", response.data.data)
      setTestimonials(response.data.data)
    }
    getTestimonials()
  },[]);

  return (
    <section className="section-testimonials" id="testmony">
      <div className="row">
        <h2 className="testimonials-heading">
          Now Testimonials from our community
        </h2>
      </div>
      <div className="row community-row">
        {testimonials.map((item)=>(
        <div className="col span-1-of-5 box" key={item._id}>
          <blockquote>
            {item.message}
            <cite>
              <img src={item.image} alt="testimonial1" />
              {item.name}
            </cite>
          </blockquote>
        </div>
        ))}
      </div>
    </section>
  );
};

export default Testmonials;
