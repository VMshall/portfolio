import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faMicrochip,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <section>
      <div className="container text-center my-5" id="about">
        <h2 className="mb-5 fw-bold">
          <span className="section-title">About Me</span>
        </h2>
        <div className="row g-3">
          <div className="col-md-4">
            <div className="card p-3 h-100">
              <div className="card-body">
                <div className="icon mb-3">
                  <FontAwesomeIcon icon={faBookOpen} size="2x" />
                </div>
                <h5 className="card-title">Academic Excellence</h5>
                <p className="card-text">
                  Maintaining a strong academic record with focus on electronics
                  and embedded systems.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 h-100">
              <div className="card-body">
                <div className="icon mb-3">
                  <FontAwesomeIcon icon={faMicrochip} size="2x" />
                </div>
                <h5 className="card-title">Technical Expertise</h5>
                <p className="card-text">
                  Proficient in circuit design, microcontrollers, and digital
                  signal processing. Experienced with industry-standard tools
                  and technologies.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 h-100">
              <div className="card-body">
                <div className="icon mb-3">
                  <FontAwesomeIcon icon={faLightbulb} size="2x" />
                </div>
                <h5 className="card-title">Innovation Focus</h5>
                <p className="card-text">
                  Passionate about creating innovative solutions through
                  electronics. Active participant in hackathons and technical
                  competitions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
