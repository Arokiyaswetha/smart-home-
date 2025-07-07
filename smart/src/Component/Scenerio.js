import React, { useState } from 'react';
import '../css/scenerio.css'; // Make sure the CSS file name matches

const rules = [
  {
    type: 'Rule',
    name: 'Turn off Lights',
    description: 'When no motion is detected for 10 min in Living Room, turn off all lights.',
  },
  {
    type: 'Schedule',
    name: 'AC On at 7PM',
    description: 'Turn on AC in Bedroom every day at 7.00 PM.',
  },
  {
    type: 'Voice Command',
    name: 'Good Night Routine',
    description: 'When ‘Good night’ is said, turn off all lights and lock doors.',
  },
];

const Scenerio = () => {
  const [newRule, setNewRule] = useState({
    name: '',
    trigger: '',
    action: '',
  });

  return (
    <div className="automation-container">
      {/* <div className="automation-breadcrumb">
        Dashboard &gt; Automation &gt; <span>Automation scenarios</span>
      </div> */}
      <h2 className="automation-title">Automation Scenarios</h2>

      <div className="automation-tabs-header">
        <button className="tab-button active">All Rules</button>
        <button className="tab-button">Device schedule</button>
      </div>

      <div className="automation-scenario-list">
        {rules.map((rule, idx) => (
          <div key={idx} className="automation-scenario-card purple-card">
            <h4 className={`rule-type ${rule.type.toLowerCase().replace(' ', '-')}`}>{rule.type}</h4>
            <h3 className="rule-name">{rule.name}</h3>
            <p className="rule-description">{rule.description}</p>
            <div className="rule-actions">
              <button className="edit-btn purple-btn">Edit</button>
              <button className="disable-btn purple-btn">Disable</button>
            </div>
          </div>
        ))}
      </div>

      <div className="automation-form purple-form">
        <h3>Add New Automation</h3>
        <div className="form-row">
          <label>Rule Name</label>
          <input
            type="text"
            placeholder="Enter rule name"
            value={newRule.name}
            onChange={(e) => setNewRule({ ...newRule, name: e.target.value })}
          />
        </div>
        <div className="form-row">
          <label>Trigger</label>
          <input
            type="text"
            placeholder="e.g, No motion, 7:00 PM ,voice"
            value={newRule.trigger}
            onChange={(e) => setNewRule({ ...newRule, trigger: e.target.value })}
          />
        </div>
        <div className="form-row">
          <label>Action</label>
          <input
            type="text"
            placeholder="e.g, Turn off lights"
            value={newRule.action}
            onChange={(e) => setNewRule({ ...newRule, action: e.target.value })}
          />
        </div>
        <div className="form-actions">
          <button className="save-btn purple-btn">Save</button>
          <button className="create-btn purple-btn">Create Rule</button>
        </div>
      </div>
    </div>
  );
};

export default Scenerio;
