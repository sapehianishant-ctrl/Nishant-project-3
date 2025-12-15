import React from "react";

const Home = () => {
  return (
    <>
      <style>{`
        .home {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 93px 8%;
          background-color: #ffffffff;
          flex-wrap: wrap;
        }

        .home-content {
          flex: 1;
          max-width: 750px;
        }

        .tagline {
          color: #6b6b6b;
          font-weight: 600;
          margin-bottom: 10px;
          font-size: 18px;
        }

        .home-content h1 {
          font-size: 42px;
          font-weight: 700;
          color: #111;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .subtext {
          color: #555;
          font-size: 20px;
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .btn-primary {
          background-color: #1976ff;
          color: #fff;
          font-size: 20px;
          border: none;
          padding: 20px 28px;
          border-radius: 30px;
          cursor: pointer;
          transition: 0.3s;
        }

        .btn-primary:hover {
          background: rgba(235, 240, 235, 1);
          color: #0d6efd;
        }

        .stats {
          display: flex;
          gap: 50px;
          margin-top: 40px;
          flex-wrap: wrap;
        }

        .stat h3 {
          color: #1976ff;
          font-size: 26px;
          margin-bottom: 5px;
        }

        .stat p {
          color: #444;
          font-size: 16px;
        }

        .home-image {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .home-image img {
          max-width: 400px;
          width: 100%;
          height: auto;
        }

        @media (max-width: 900px) {
          .home {
            flex-direction: column-reverse;
            text-align: center;
          }

          .stats {
            justify-content: center;
          }

          .home-image img {
            max-width: 300px;
            margin-bottom: 40px;
          }
        }

        @media (max-width: 600px) {
          .home {
            padding: 50px 4%;
          }

          .home-content h1 {
            font-size: 32px;
          }

          .subtext {
            font-size: 18px;
          }

          .btn-primary {
            font-size: 18px;
            padding: 15px 20px;
          }

          .stats {
            gap: 20px;
            margin-top: 30px;
          }

          .stat h3 {
            font-size: 22px;
          }

          .stat p {
            font-size: 14px;
          }

          .home-image img {
            max-width: 250px;
          }
        }
      `}</style>

      <section id="home" className="home">
        <div className="home-content">
          <p className="tagline">❤️ Health comes first</p>
          <h1>
            Find your Doctor and
            <br /> make an Appointments
          </h1>
          <p className="subtext">  
            Talk to online doctors and get medical advice, online prescriptions,
            refills and medical notes within minutes. On-demand healthcare
            services at your fingertips.
          </p>

          <button className="btn-primary">💼 Book Appointment</button>

          <div className="stats">
            <div className="stat">
              <h3>145k+</h3>
              <p>Receive Patients</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Expert Doctors</p>
            </div>
            <div className="stat">
              <h3>10+</h3>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>

        <div className='home-image-section'>
          <img src='image 1.png' alt='image 1' style={{ height: "700px" }} />
        </div>
      </section>

      <style>{`
        .services-section {
          text-align: center;
          padding: 80px 8%;
          background-color: #fff;
        }

        .services-section h2 {
          font-size: 50px;
          font-weight: 700;
          color: #111;
          margin-bottom: 10px;
        }

        .services-section h2::after {
          content: '';
          display: block;
          width: 80px;
          height: 3px;
          background-color: #b22b5c;
          margin: 10px auto 20px;
          border-radius: 10px;
        }

        .services-section p.description {
          color: #444;
          font-size: 18px;
          max-width: 900px;
          margin: 0 auto 60px;
          line-height: 1.6;
        }

        .services-container {
          display: flex;
          justify-content: center;
          gap: 67px;
          flex-wrap: wrap;
        }

        .service-box {
          background-color: #fff;
          border: 1px solid #ddd;
          border-radius: 10px;
          padding: 40px 30px;
          text-align: center;
          max-width: 400px;
          transition: all 0.3s ease;
          position: relative;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
        }

        .service-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .service-icon {
          width: 60px;
          height: 60px;
          background-color: #eaf2ff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
          color: #1976ff;
          margin: 0 auto 15px;
        }

        .service-title {
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 15px;
          color: #000;
        }

        .service-text {
          font-size: 16px;
          color: #555;
          line-height: 1.6;
        }

        @media (max-width: 1000px) {
          .services-container {
            flex-direction: column;
            align-items: center;
          }

          .service-box {
            width: 90%;
          }
        }

        @media (max-width: 600px) {
          .services-section {
            padding: 60px 4%;
          }

          .services-section h2 {
            font-size: 36px;
          }

          .services-section p.description {
            font-size: 16px;
            margin-bottom: 40px;
          }

          .service-box {
            padding: 30px 20px;
          }

          .service-icon {
            width: 50px;
            height: 50px;
            font-size: 22px;
          }

          .service-title {
            font-size: 20px;
          }

          .service-text {
            font-size: 14px;
          }
        }
      `}</style>

      <section id="services" className="services-section">
        <h2>What We Do</h2>
        <p className="description">
          We bring healthcare to your convenience, offering a comprehensive
          range of on-demand medical services tailored to your needs. Our
          platform allows you to connect with experienced online doctors who
          provide expert medical advice, issue online prescriptions, and offer
          quick refills whenever you require them.
        </p>

        <div className="services-container">
          <div className="service-box">
            <div className="service-icon">🚑</div>
            <h3 className="service-title">Emergency Care</h3>
            <p className="service-text">
              Our Emergency Care service is designed to be your reliable support
              in critical situations. Whether it's a sudden illness, injury, or
              any medical concern that requires immediate attention, our team of
              dedicated healthcare professionals is available 24/7 to provide
              prompt and efficient care.
            </p>
          </div>

          <div className="service-box">
            <div className="service-icon">💓</div>
            <h3 className="service-title">Heart Disease</h3>
            <p className="service-text">
              Our team of experienced cardiologists and medical experts use
              state-of-the-art technology to assess your cardiovascular health
              and design personalized treatment plans. From comprehensive
              screenings to advanced interventions, we are committed to helping
              you maintain a healthy heart and lead a fulfilling life.
            </p>
          </div>

          <div className="service-box">
            <div className="service-icon">🦷</div>
            <h3 className="service-title">Dental Care</h3>
            <p className="service-text">
              Smile with confidence as our Dental Care services cater to all
              your oral health needs. Our skilled dentists provide a wide range
              of treatments, from routine check-ups and cleanings to cosmetic
              procedures and restorative treatments.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .about-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 100px 8%;
          background-color: #e1e3ecff;
          flex-wrap: wrap;
          gap: 50px;
        }

        .about-image {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .about-image img {
          max-width: 550px;
          border-radius: 10px;
          z-index: 2;
          position: relative;
        }

        .about-image::before {
          position: absolute;
          width: 380px;
          height: 380px;
          border: 3px solid #b22b5c;
          transform: rotate(45deg);
          top: 0;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
          z-index: 1;
        }

        .about-content {
          flex: 1;
          max-width: 648px;
        }

        .about-content h2 {
          font-size: 40px;
          font-weight: 700;
          color: #01adf7ff;
          margin-bottom: 10px;
        }

        .about-content h2::after {
          display: block;
          width: 80px;
          height: 3px;
          background-color: #b22b5c;
          margin-top: 10px;
          border-radius: 5px;
        }

        .about-content p {
          color: #444;
          font-size: 18px;
          line-height: 1.6;
          margin-top: 20px;
        }

        .solutions {
          margin-top: 40px;
        }

        .solution-item {
          margin-bottom: 25px;
          display: flex;
          align-items: flex-start;
          gap: 15px;
        }

        .solution-item-icon {
          color: #b22b5c;
          font-size: 20px;
          margin-top: 5px;
        }

        .solution-item h4 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 5px;
          color: #111;
        }

        .solution-item p {
          font-size: 16px;
          color: #555;
          line-height: 1.5;
          margin: 0;
        }

        @media (max-width: 900px) {
          .about-section {
            flex-direction: column;
            text-align: center;
          }

          .about-image::before {
            display: none;
          }

          .about-content {
            text-align: center;
          }

          .solution-item {
            flex-direction: column;
            align-items: center;
          }
        }

        @media (max-width: 600px) {
          .about-section {
            padding: 60px 4%;
            gap: 30px;
          }

          .about-content h2 {
            font-size: 32px;
          }

          .about-content p {
            font-size: 16px;
          }

          .solution-item h4 {
            font-size: 18px;
          }

          .solution-item p {
            font-size: 14px;
          }

          .about-image img {
            max-width: 100%;
          }
        }
      `}</style>

      <section id="about" className="about-section">
        <div className="about-image">
          <img src='image 2.png' alt='image 2' />
        </div>

        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Welcome to Health Plus, your trusted partner for accessible and
            personalized healthcare. Our expert doctors offer online
            consultations and specialized services, prioritizing your well-being.
            Join us on this journey towards a healthier you.
          </p>

          <div className="solutions">
            <h3 style={{ color: "#555", marginBottom: "20px" }}>
              Your Solutions
            </h3>

            <div className="solution-item">
              <div className="solution-item-icon">✔️</div>
              <div>
                <h4>Choose a Specialist</h4>
                <p>
                  Find your perfect specialist and book with ease at Health
                  Plus. Expert doctors prioritize your health, offering tailored
                  care.
                </p>
              </div>
            </div>

            <div className="solution-item">
              <div className="solution-item-icon">✔️</div>
              <div>
                <h4>Make a Schedule</h4>
                <p>
                  Choose the date and time that suits you best, and let our
                  dedicated team ensure your well-being with personalized care.
                </p>
              </div>
            </div>

            <div className="solution-item">
              <div className="solution-item-icon">✔️</div>
              <div>
                <h4>Get Your Solutions</h4>
                <p>
                  Our experienced doctors are here to provide expert advice and
                  personalized treatment plans, helping you achieve your best
                  possible health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .why-section {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 50px;
          padding: 100px 8%;
          background: #fff;
          flex-wrap: wrap;
        }

        .why-left {
          flex: 1;
          max-width: 750px;
          position: relative;
          display: flex;
          justify-content: center;
        }

        .why-left img {
          width: 100%;
          max-width: 350px;
          height: auto;
          border-radius: 10px;
          background: #eaf2ff;
          object-fit: cover;
          display: block;
        }

        .doctor-card {
          // position: absolute;
          bottom: 20px;
          right: 20px;
          background: #fff;
          border-radius: 19px;
          box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
          padding: 19px 26px;
          width: 210px;
          z-index: 2;
        }

        .doctor-card h3 {
          font-size: 16px;
          margin-bottom: 15px;
        }

        .doctor-item {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
        }

        .doctor-item img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }

        .doctor-item p {
          margin: 0;
          font-size: 13px;
        }

        .find-btn {
          background: #007bff;
          color: white;
          border: none;
          border-radius: 20px;
          padding: 8px 18px;
          font-size: 14px;
          cursor: pointer;
          transition: 0.3s;
        }

        .find-btn:hover {
          background: #df1313ff;
        }

        .why-right {
          flex: 1;
          max-width: 550px;
        }

        .why-right h2 {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 15px;
        }

        .why-right h2::after {
          content: '';
          display: block;
          width: 80px;
          height: 3px;
          background: #b22b5c;
          margin-top: 8px;
          border-radius: 5px;
        }

        .why-right p {
          color: #555;
          line-height: 1.6;
          margin-bottom: 25px;
        }

        .why-list {
          list-style: none;
          padding: 0;
          margin-bottom: 30px;
        }

        .why-list li {
          font-size: 16px;
          margin-bottom: 10px;
        }

        .book-btn {
          background: #16e4f7ff;
          color: #000;
          border: none;
          border-radius: 30px;
          padding: 17px 32px;
          font-size: 20px;
          cursor: pointer;
          transition: 0.3s;
        }

        .book-btn:hover {
          background: #4968c4ff;
          color: #f9f7f7ff;
        }

        @media (max-width: 900px) {
          .why-section {
            flex-direction: column;
            text-align: center;
            gap: 40px;
          }

          .doctor-card {
            position: static;
            margin-top: 20px;
          }
        }

        @media (max-width: 600px) {
          .why-section {
            padding: 60px 4%;
            gap: 30px;
          }

          .why-right h2 {
            font-size: 28px;
          }

          .why-right p {
            font-size: 16px;
         
`}</style>


      <section className="why-section">
        <div className="why-left">
          <img src="image 3.png" alt="Doctor" /> {/* 👈 Replace with your image */}
          <div className="doctor-card">
            <h3>Available Doctor</h3>
            <div className="doctor-item">
              <img src="image 3.png" alt="Doctor 1" />
              <div>
                <p><strong>Leslie Alexander, MD</strong></p>
                <p>Cardiologist</p>
              </div>
            </div>
            <div className="doctor-item">
              <img src="image 3.png" alt="Doctor 2" />
              <div>
                <p><strong>Darrell Steward, CRNP</strong></p>
                <p>Dermatologist</p>
              </div>
            </div>
            <button className="find-btn">Find Doctor</button>
          </div>
        </div>

        <div className="why-right">
          <h2>Why Choose Health</h2>
          <p>
            Discover the reasons to choose Health Plus for your healthcare needs.
            Experience expert care, convenience, and personalized solutions,
            making your well-being our top priority.
          </p>
          <ul className="why-list">
            <li>✅ Best Professional Doctors</li>
            <li>✅ Emergency Care</li>
            <li>✅ 24/7 Support Live Chat</li>
            <li>✅ Enrollment Easy and Quick</li>
          </ul>
          <button className="book-btn">📅 Book Appointment</button>
        </div>
      </section>
      {/* --- REVIEWS SECTION --- */}
<style>{`
  .reviews-section {
    background: #e3e5ecff;
    padding: 100px 8%;
    text-align: left;
    position: relative;
    font-family: 'Poppins', sans-serif;
  }

  .reviews-header {
    margin-bottom: 50px;
  }

  .reviews-header h3 {
    font-size: 25px;
    font-weight: 500;
    color: #6b6b6b;
    margin-bottom: 42px;
  }

  .reviews-header h3 span {
    color: #1976ff;
    font-weight: 600;
  }

  .reviews-header h2 {
    font-size: 42px;
    font-weight: 700;
    color: #111;
    margin-bottom: 49px;
    margin: -10px;
  }

  .review-quote {
    font-size: 22px;
    font-weight: 400;
    color: #000;
    line-height: 1.6;
    max-width: 1657px;
    margin: 0 auto 40px;
    position: relative;
  }

  .review-quote::before {
    content: '“';
    position: absolute;
    left: -27px;
    color: #1976ff;
    font-size: 48px;
    top: -16px;
  }

  .review-quote::after {
    content: '”';
    position: absolute;
    right: 27px;
    color: #1976ff;
    font-size: 44px;
    top: -10px;
  }

  .review-author {
    font-weight: 600;
    font-size: 25px;
    margin-top: 19px;
  }

  .review-location {
    color: #777;
    font-size: 25px;
  }

  .review-controls {
    position: absolute;
    right: 4%;
    bottom: 40px;
    display: flex;
    gap: 37px;
  }

  .review-controls button {
    background: none;
    border: none;
    font-size: 40px;
    cursor: pointer;
    color: #111;
    transition: 0.3s;
  }

  .review-controls button:hover {
    color: #1976ff;
  }

  @media (max-width: 900px) {
    .reviews-section {
      text-align: center;
    }

    .review-quote::before,
    .review-quote::after {
      display: none;
    }

    .review-controls {
      position: static;
      justify-content: center;
      margin-top: 40px;
    }
  }
`}</style>

  <section id="reviews" className="reviews-section">
  <div className="reviews-header">
    <h3>More over <span>1500+ Customers</span></h3>
    <h2>Don't believe us, Check clients word</h2>
  </div>

  <div className="review-quote">
    Health Plus transformed my healthcare experience! The online consultations
    were so convenient, and the doctors were knowledgeable and caring.
  </div>

  <div className="review-author">Esther Howard</div>
  <div className="review-location">Texas, USA</div>

  <div className="review-controls">
    <button>←</button>
    <button>→</button>
  </div>
</section>
{/* --- MEET OUR DOCTORS SECTION --- */}
<style>{`
  .doctors-section {
    text-align: center;
    padding: 100px 8%;
    background-color: #fff;
    font-family: 'Poppins', sans-serif;
  }

  .doctors-section h2 {
    font-size: 45px;
    font-weight: 700;
    color: #111;
    margin-bottom: 10px;
  }

  .doctors-section h2::after {
    content: '';
    display: block;
    width: 80px;
    height: 3px;
    background-color: #b22b5c;
    margin: 10px auto 30px;
    border-radius: 10px;
  }

  .doctors-section p.description {
    color: #444;
    font-size: 19px;
    max-width: 950px;
    margin: 0 auto 70px;
    line-height: 1.6;
  }

  .doctors-container {
    display: flex;
    justify-content: center;
    gap: 160px;
    flex-wrap: wrap;
  }

  .doctor-card {
    background-color: #f5f7ff;
    border-radius: 20px;
    padding: 30px 25px 40px;
    max-width: 280px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  }

  .doctor-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  }

  .doctor-image {
    background-color: #eaf2ff;
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 20px;
  }

  .doctor-image img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 20px;
  }

  .doctor-name {
    font-size: 25px;
    font-weight: 600;
    color: #000;
    margin-bottom: 5px;
  }
    .doctor-card h3 {
    font-size: 20px;
    margin-bottom: 15px;s
}

  .doctor-speciality {
    font-size: 16px;
    color: #666;
    margin-bottom: 10px;
  }

  .doctor-rating {
    font-size: 15px;
    color: #555;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  .doctor-rating span {
    color: #f7b731;
    font-size: 18px;
  }

  @media (max-width: 1000px) {
    .doctors-container {
      flex-direction: column;
      align-items: center;
    }

    .doctor-card {
      width: 90%;
    }
  }
`}</style>

<section id="doctors" className="doctors-section">
  <h2>Meet Our Doctors</h2>
  <p className="description">
    Meet our exceptional team of specialist doctors, dedicated to providing
    top-notch healthcare services at Health Plus. Trust in their knowledge
    and experience to lead you towards a healthier and happier life.
  </p>

  <div className="doctors-container">
    <div className="doctor-card">
      <div className="doctor-image">
        <img src="image 4.png" alt="Dr. Kathryn Murphy" />
      </div>
      <h3 className="doctor-name">Dr. Kathryn Murphy</h3>
      <p className="doctor-speciality">General Surgeons</p>
      <p className="doctor-rating">
        <span>⭐</span> 4.9 (1800+ Reviews)
      </p>
    </div>

    <div className="doctor-card">
      <div className="doctor-image">
        <img src="image 5.png" alt="Dr. Jacob Jones" />
      </div>
      <h3 className="doctor-name">Dr. Jacob Jones</h3>
      <p className="doctor-speciality">Hematologists</p>
      <p className="doctor-rating">
        <span>⭐</span> 4.8 (700+ Reviews)
      </p>
    </div>

    <div className="doctor-card">
      <div className="doctor-image">
        <img src="image 6.png" alt="Dr. Jenny Wilson" />
      </div>
      <h3 className="doctor-name">Dr. Jenny Wilson</h3>
      <p className="doctor-speciality">Endocrinologists</p>
      <p className="doctor-rating">
        <span>⭐</span> 4.7 (450+ Reviews)
      </p>
    </div>

    <div className="doctor-card">
      <div className="doctor-image">
        <img src="image 7.png" alt="Dr. Albert Flores" />
      </div>
      <h3 className="doctor-name">Dr. Albert Flores</h3>
      <p className="doctor-speciality">Hematologists</p>
      <p className="doctor-rating">
        <span>⭐</span> 4.8 (500+ Reviews)
      </p>
    </div>
  </div>
</section>
      
    </>
  );
};

export default Home;

