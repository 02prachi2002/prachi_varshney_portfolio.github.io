import React from 'react';
import "./Contactme.css"
import { useForm, ValidationError } from '@formspree/react';
function Contactme() {
  const [state, handleSubmit] = useForm("xvoekzvz");
  if (state.succeeded) {
      return <p>Thanks for your Feedback !!</p>;
  }
  return (
    <div className='contactme' id='contact'>

<h1 className='ch1'>Contact Me</h1>
<div class="container">

  <form onSubmit={handleSubmit}  action='https://formspree.io/f/xvoekzvz' >
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia">India</option>

    </select>
    <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
    <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

    <label for="subject">Subject</label>
    <textarea  id="message"
        name="message" placeholder="Write something.."></textarea>

    
    <button type="submit" disabled={state.submitting} class="contactbtn">
        Submit
      </button>
  </form>
</div>
    </div>
      
  );
}

export default Contactme;