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
