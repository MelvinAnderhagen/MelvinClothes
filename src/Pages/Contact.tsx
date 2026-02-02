import useUsersFetch from "../Hooks/useUsersFetch";
import { CircularProgress } from "@mui/material";

const Contact = () => {
  const { users, loading } = useUsersFetch();
  return (
    <div className="contact-page">
      <div className="container">
        <header className="header">
          <h1>Contact MelvinClothes</h1>
          <p>
            Founded in 2015, MelvinClothes started as a small garage streetwear
            project and grew into a global ecommerce clothing brand focused on
            clean style, comfort, and everyday wear.
          </p>
        </header>

        <section className="contact-grid">
          <div className="card">
            <h2>Get in Touch</h2>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Message" rows={4} />
              <button type="submit">Send Message</button>
            </form>
          </div>

          <div className="card">
            <h2>Store Information</h2>
            <p>📍 450 Fashion Ave, New York, NY</p>
            <p>📞 +1 (555) 445-7788</p>
            <p>✉️ hello@melvinclothes.com</p>
            <p className="hours">Support hours: Mon – Fri, 9am – 6pm EST</p>
          </div>
        </section>

        <section className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            {loading ? (
              <CircularProgress color="inherit" />
            ) : (
              users.map((employee) => (
                <div className="team-card" key={employee.id}>
                  <div className="avatar">
                    {employee.name.firstname[0]}
                    {employee.name.lastname[0]}
                  </div>
                  <h3>
                    {employee.name.firstname} {employee.name.lastname}
                  </h3>
                  <p className="username">@{employee.username}</p>
                  <p>{employee.email}</p>
                  <p>{employee.phone}</p>
                  <span className="address">
                    {employee.address.city}, {employee.address.street}{" "}
                    {employee.address.number}
                  </span>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
