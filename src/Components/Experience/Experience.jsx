import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <div>
      <h1 className="md:text-5xl text-3xl font-bold text-center ">
        Exper<span className="text-amber-500">ience</span>
      </h1>
      <div className="border-b py-10">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="February 2025 - present"
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
            width: "60px", // Adjust the container width
            height: "60px", // Adjust the container height
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }} // White background for better contrast
          icon={
            <img
              src="\City_Bank_Logo.png" // Update with your actual logo path
              alt="Company Logo"
              style={{
                width: "80%", // Adjust image width
                height: "80%", // Adjust image height
                borderRadius: "5%",
                objectFit: "contain", // Ensures the logo is not cropped
              }}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Enterprise Architecture, IT, City Bank PLC.
          </h4>
          <p>Technical Documentation</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
