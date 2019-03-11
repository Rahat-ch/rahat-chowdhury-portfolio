import React from 'react';

const Contact = () => (
  <section id="three">
    <h1>Get In Touch</h1>
    <p>
      Feel free to get in touch for any questions, projects, or employment
      opportunities.
    </p>
    <div className="row">
      <div className="8u 12u$(small)">
        <form method="post" action="https://formspree.io/rahat@rahatcodes.com">
          <div className="row uniform 50%">
            <div className="6u 12u$(xsmall)">
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div className="6u 12u$(xsmall)">
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className="12u">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                rows="4"
              />
            </div>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send" />
            </li>
          </ul>
        </form>
      </div>
    </div>
  </section>
)

export default Contact;