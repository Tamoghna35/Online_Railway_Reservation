import "./Services.css";

const Services = () => {
  return (
    <div>
      <br />
      <br />
      <div className="services">
        <h1>Our Services</h1>
        <div className="cen">
          <div className="service">
            <i className="anchor icon"></i>
            <h2>Reservation</h2>
            <p>Reserve your railway tickets with us! </p>
          </div>

          <div className="service">
            <i className="building icon"></i>
            <h2>Hotels</h2>
            <p>Stay at the best hotels under our flagship. </p>
          </div>

          <div className="service">
            <i className="subway icon"></i>
            <h2>Train Schedule</h2>
            <p>Check the train schedule before you leave. </p>
          </div>

          <div className="service">
            <i className="utensils icon"></i>
            <h2>Meals</h2>
            <p>Enjoy fresh and healthy food with every train journey. </p>
          </div>

          <div className="service">
            <i className="university icon"></i>
            <h2>Heritage Tour</h2>
            <p>
              Visit the heritage sights with some of our famous train routes.
            </p>
          </div>

          <div className="service">
            <i className="frown icon"></i>
            <h2>Grievances</h2>
            <p>
              For any issues contact us and we will get back to you at the
              earliest
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
