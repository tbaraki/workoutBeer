import React from 'react'
import { Link } from 'gatsby'

const Form = () => (
    <form> 
        <p>Activity: <input type="text" name="Activity" /></p>
        <p>Duration (minutes): <input type="text" name="Duration" /></p>
        <input type="submit" value="Submit" />
    </form>
)

export default Form