<<<<<<< HEAD
import React from 'react';
import './ProfilePage.css'; // Add this file for custom CSS

const ProfilePage = () => {
  return (
    <div className="profile-page">
      {/* Top section with avatar */}
      <div className="header-section">
        <img
          src="https://via.placeholder.com/100"
          alt="Avatar"
          className="avatar"
        />
        <h2>account_circle</h2>
      </div>

      {/* My Health section */}
      <div className="health-section">
        <div className="health-info">
          <h3>MY HEALTH</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>
        </div>
        <div className="prescriptions">
          <h3>MY PRESCRIPTIONS</h3>
          <div className="prescription-item">
            Lorem <a href="#">→</a>
          </div>
          <div className="prescription-item">
            Lorem <a href="#">→</a>
          </div>
          <div className="prescription-item">
            Lorem <a href="#">→</a>
          </div>
        </div>
      </div>

      {/* Bottom icons for trackers */}
      <div className="trackers">
        <div className="tracker-item">
          <img src="https://via.placeholder.com/50" alt="Amount Tracker" />
          <p>Amount Tracker</p>
        </div>
        <div className="tracker-item">
          <img src="https://via.placeholder.com/50" alt="Reminder" />
          <p>Reminder</p>
        </div>
        <div className="tracker-item">
          <img src="https://via.placeholder.com/50" alt="Health Tracker" />
          <p>Health Tracker</p>
        </div>
      </div>

      {/* My Medicine section */}
      <div className="medicine-section">
        <h3>My medicine</h3>
        <p>
          Information: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p>
          Side Effects: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="medicine-actions">
          <div className="action-item">10 tablets left</div>
          <div className="action-item"><a href="#">Renew prescription</a></div>
          <div className="action-item"><a href="#">Prescription subscription</a></div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
=======
import React from 'react';

const ProfilePage = () => {
  const healthInfo = {
    name: 'John Doe',
    age: 35,
    condition: 'Diabetes',
    medications: ['Metformin', 'Insulin']
  };

  const prescriptions = [
    { name: 'Metformin', link: '/prescriptions/metformin' },
    { name: 'Insulin', link: '/prescriptions/insulin' }
  ];

  return (
    <div className="profile-page">
      <Card>
        <Card.Header>My Health</Card.Header>
        <Card.Body>
          <Card.Title>{healthInfo.name}</Card.Title>
          <Card.Text>Age: {healthInfo.age}</Card.Text>
          <Card.Text>Condition: {healthInfo.condition}</Card.Text>
          <ListGroup>
            {healthInfo.medications.map((medication, index) => (
              <ListGroup.Item key={index}>{medication}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>

      <div className="links-section">
        <h4>Trackers</h4>
        <Button variant="link" href="/amount-tracker">Amount Tracker</Button>
        <Button variant="link" href="/reminder">Reminder</Button>
        <Button variant="link" href="/health-tracker">Health Tracker</Button>
      </div>

      <div className="prescriptions-section">
        <h4>Prescriptions</h4>
        <ListGroup>
          {prescriptions.map((prescription, index) => (
            <ListGroup.Item key={index}>
              <Button variant="link" href={prescription.link}>
                {prescription.name}
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};

export default ProfilePage;
>>>>>>> 241dff734ccdeb5a73d65c1a69547bca4b764629
