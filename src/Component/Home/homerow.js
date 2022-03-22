import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import images from "./images";

export default function HomeRow() {
  const [width, setWidth] = useState(0);

  const sliderContainer = useRef();

  useEffect(() => {
    setWidth(
      sliderContainer.current.scrollWidth - sliderContainer.current.offsetWidth
    );
  }, []);

  return (
    <div>
      <div className="row_header"> <h2>Staffs' Gallery</h2></div>
    <motion.div ref={sliderContainer} className="sliderContainer">
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="slider"
      >
        {images.map((image) => {
          return (
            <div>
            <motion.div  className="item"  target="blank" key={image}>
              <a href={image} target='_blank'><img src={image} alt=""/></a>
              
            </motion.div>
           </div>
          );
        })}
      </motion.div>
    </motion.div>
    </div>
  );
}
