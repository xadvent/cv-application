import "../../styles/ExperienceSection.css";
import propTypes from "prop-types";

export default function ExperienceSection({ experience }) {
  const experienceItems = experience.map((item, index) =>
    formatExperience(item, index),
  );

  function formatExperience(item, index) {
    return (
      <div key={index} className="experience-item">
        <div className="left-experience">
          <div className="date">{item.startDate + " - " + item.endDate}</div>
          <div className="location">{item.location ? item.location : ""}</div>
        </div>
        <div className="right-experience">
          <div className="work-title" style={{ display: "flex" }}>
            <div className="job-title" style={{ fontWeight: "bold" }}>
              {item.title}
            </div>
            <div className="company" style={{ fontStyle: "italic" }}>
              {" - " + item.name}
            </div>
          </div>
          <div
            className="work-description"
            style={{ maxWidth: "95%", minHeight: "min-content", margin: "0px" }}
          >
            {item.description}
          </div>
        </div>
      </div>
    );
  }
  return experienceItems.length > 0 ? (
    <div className="section">
      <div className="banner">Experience</div>
      {experienceItems}
    </div>
  ) : null;
}

ExperienceSection.propTypes = {
  experience: propTypes.array.isRequired,
};
