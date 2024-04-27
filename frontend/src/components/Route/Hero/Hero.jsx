import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#164215] font-[600] capitalize`}
        >
          Best place <br /> for world tour
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#e1e8e2ba]">
        Explore. Discover. Purchase. <br />

Dive into captivating travel blogs and stunning photographs <br /> from around the globe. Find your next adventure and bring it home with our high-quality prints.
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                   Explore Blogs
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
