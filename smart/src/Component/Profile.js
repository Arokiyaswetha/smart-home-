import React, { useState } from 'react';
import '../css/profile.css';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('Profile');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Profile':
        return (
          <div className="profile-settings">
            <h3>Profile Settings</h3>
            <label>Full Name</label>
            <div className="input-field">Alex Morgan</div>

            <label>Email</label>
            <div className="input-field">alex.morgan@email.com</div>

            <label>Phone Number</label>
            <div className="input-field">Add phone number</div>

            <button className="save-btn">Save Changes</button>
          </div>
        );
      case 'Security':
  return (
    <div className="profile-settings">
      <h3>Change Password</h3>

      <label>Current Password</label>
      <input
        type="password"
        className="input-field"
        placeholder="Enter current password"
      />

      <label>New Password</label>
      <input
        type="password"
        className="input-field"
        placeholder="Enter new password"
      />

      <label>Confirm new Password</label>
      <input
        type="password"
        className="input-field"
        placeholder="Re-enter new password"
      />

      <button className="save-btn">Update password</button>
    </div>
  );

      case 'Access Control':
  return (
    <div className="profile-settings">
      <h3>Role Permissions</h3>
      <p className="subheading">Assign and manage permissions for each member role.</p>

      <table className="access-table">
        <tbody>
          <tr>
            <td>Admin</td>
            <td>Full Access</td>
          </tr>
          <tr>
            <td>Homeowner</td>
            <td>Limited Access</td>
          </tr>
          <tr>
            <td>Guest Support</td>
            <td>Restricted</td>
          </tr>
        </tbody>
      </table>

      <h3 style={{ marginTop: '2rem' }}>Add Member Access</h3>

      <label>Name</label>
      <input type="text" className="input-field" placeholder="Enter your name" />

      <label>Member Email</label>
      <input type="email" className="input-field" placeholder="Enter email address" />

      <label>Enter Role</label>
      <input type="text" className="input-field" placeholder="Enter a role" />

      <button className="save-btn">Save</button>
    </div>
  );

      case 'Voice Assistant':
  return (
    <div className="profile-settings">
      <h3>Voice Assistant Integration</h3>
      <p className="subheading">
        Connect your Smart home with Alexa, Google Assistant or Siri to control devices and automate routines using voice commands
      </p>

      <div className="voice-assist-cards">
        {[
          {
            name: "Amazon Alexa",
            description: "Enable Alexa to control Device and run automations",
            icon: "🗣️"
          },
          {
            name: "Google Assistant",
            description: "Link Google Assistant for hands-free device control",
            icon: "🎤"
          },
          {
            name: "Apple Siri",
            description: "Integrate with Siri for voice-activated routines",
            icon: "💬"
          }
        ].map((assistant, index) => (
          <div key={index} className="va-card">
            <div className="va-icon">{assistant.icon}</div>
            <h4>{assistant.name}</h4>
            <p>{assistant.description}</p>
            <div className="va-buttons">
              <button className="connect-btn">Connect</button>
              <button className="learn-btn">Learn More</button>
            </div>
          </div>
        ))}
      </div>

      <h4 className="sample-title">Sample voice commands</h4>
      <ul className="voice-commands">
        <li>
          <span className="cmd-icon">⚡</span>
          <div>
            <strong>Turn off all lights</strong>
            <p>“Hey Google, turn off all lights”</p>
          </div>
        </li>
        <li>
          <span className="cmd-icon">💡</span>
          <div>
            <strong>Start energy saving mode</strong>
            <p>“Alexa, activate energy saving mode”</p>
          </div>
        </li>
        <li>
          <span className="cmd-icon">📊</span>
          <div>
            <strong>Show energy usage</strong>
            <p>“Hey Siri, show my energy usage”</p>
          </div>
        </li>
      </ul>
    </div>
  );

      case 'Integration':
  return (
    <div className="profile-settings">
      <h3>Third-party Integrations</h3>
      <p className="subheading">
        Connect your account to smart home platforms, security systems, and energy providers for seamless automation and monitoring.
      </p>

      <h4 className="section-title">Smart Home platforms</h4>
      <div className="integration-cards">
        {[
          {
            title: "Google Home",
            subtitle: "Connect Google Home",
            description: "Enable device control and automation via Google Home ecosystem.",
            buttons: ["Connect"]
          },
          {
            title: "Applet Homekit",
            subtitle: "Connect HomeKit",
            description: "Integrate with Apple HomeKit for secure smart home management.",
            buttons: ["Connect"]
          }
        ].map((platform, index) => (
          <div className="integration-card" key={index}>
            <h5>{platform.title}</h5>
            <strong>{platform.subtitle}</strong>
            <p>{platform.description}</p>
            <div className="integration-buttons">
              {platform.buttons.map((btn, idx) => (
                <button key={idx} className="connect-btn">{btn}</button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h4 className="section-title">Security Systems</h4>
      <div className="integration-card">
        <h5>External Security</h5>
        <strong>API Integration</strong>
        <p>Connect to third-party security systems for real-time monitoring.</p>
        <div className="integration-buttons">
          <button className="connect-btn">View API Docs</button>
          <button className="connect-btn">Generate Key</button>
        </div>
      </div>

      <h4 className="section-title">Energy Provides</h4>
      <div className="integration-card">
        <h5>Provide API</h5>
        <strong>Connect Energy Provider</strong>
        <p>Sync usage data and automate billing with your energy provider</p>
        <div className="integration-buttons">
          <button className="connect-btn">Connect</button>
          <button className="connect-btn">API info</button>
        </div>
      </div>
    </div>
  );
      default:
        return null;
    }
  };

  return (
    <div className="profile-container">
      <div className="breadcrumb">
        <span>Dashboard</span> &gt; <span>Settings</span> &gt; <span className="active">Profile</span>
      </div>

      <div className="tabs">
        {['Profile', 'Security', 'Access Control', 'Voice Assistant', 'Integration'].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? 'active' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {renderTabContent()}
    </div>
  );
};

export default Profile;
