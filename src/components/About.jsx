import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import "./about.scss";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngular,
  faCss3,
  faGitAlt,
  faGolang,
  faHtml5,
  faJava,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a Fullstack Developer specializing in backend system design and
        optimization, with a strong foundation in Computer Science gained
        through academic training at Ho Chi Minh University of Technology
        (HCMUT). My expertise lies in analyzing, designing, and implementing
        scalable, efficient, and secure systems to solve real-world problems.
      </motion.p>

      <div className="mt-10 bg-tertiary p-6 rounded-lg shadow-md text-white flex items-center gap-10">
        {/* Avatar Image */}
        <img
          src="src/assets/myavt.jpg" // Replace with your image path
          alt="Avatar"
          className="w-36 h-36 rounded-full object-cover"
        />

        {/* Personal Information */}
        <div>
          <h3 className="text-[22px] font-bold mb-2">Personal Information</h3>
          <p className="text-[17px] leading-[28px]">
            <strong>Name:</strong> Nong Minh Chien <br />
            <strong>University:</strong> Ho Chi Minh University Of Technology
            (HCMUT) <br />
            <strong>GPA:</strong> 3.5/4.0 <br />
            <strong>Phone Number:</strong> +84 388 506 847 <br />
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/chiencse"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              https://github.com/chiencse
            </a>{" "}
            <br />
            <strong>Email:</strong>{" "}
            <a
              href="mailto:minhchien662004@gmail.com"
              className="text-blue-400 underline"
            >
              minhchien662004@gmail.com
            </a>
          </p>
        </div>

        <div className="stage-cube-cont pl-28">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faJava} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faGolang} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
