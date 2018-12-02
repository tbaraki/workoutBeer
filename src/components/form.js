import React from 'react'
import '../components/form.css'

const Form = () => (
  <form className="form-container">
    <p className="activity-label">Activity:</p>
    <select className="activity-input">
      <option value="Walking">Walking</option>
      <option value="Running">Running</option>
      <option value="Swimming">Swimming</option>
      <option value="Hiking">Hiking</option>
      <option value="Cycling">Cycling</option>
    </select>

    <p className="duration-label">Duration (minutes): </p>
    <div className="duration-input">
      <input type="text" name="Duration" placeholder="Minutes..." />
    </div>

    <p className="weight-label">Weight: </p>
    <div className="weight-input">
      <input type="text" name="Weight" placeholder="Weight..." />
    </div>

    <p className="unit-label">Pounds or Kilograms?</p>
    <div className="unit-input">
      <ul>
        <li>
          <input type="radio" id="lbs" name="units" value="lbs" />
          <label for="lbs">lbs</label>
        </li>
        <li>
          <input type="radio" id="kg" name="units" value="kg" />
          <label for="huey">kg</label>
        </li>
      </ul>
    </div>

    <input className="submit-input" type="submit" value="Submit" />
  </form>
)

export default Form
