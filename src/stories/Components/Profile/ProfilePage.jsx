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
