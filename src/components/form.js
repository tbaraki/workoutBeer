import React from 'react'
import '../components/form.css'

const Form = () => (
    <form className="form-container">
        <p>Activity:
        <select>
                <option value="Walking">Walking</option>
                <option value="Running">Running</option>
                <option value="Swimming">Swimming</option>
                <option value="Hiking">Hiking</option>
                <option value="Cycling">Cycling</option>
            </select></p>

        <p>Duration (minutes): <input type="text" name="Duration" placeholder="Minutes..." /></p>
        <p>Weight: <input type="text" name="Weight" /></p>
        <p>Pounds or Kilograms?</p>
        <p><input type="submit" value="Submit" /></p>
    </form >
)

export default Form