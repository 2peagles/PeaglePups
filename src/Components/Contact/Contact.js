import React from 'react';
import './Contact.css';

export const Contact = () => {
  return (
    <div className='contact-container'>
      <main class="pa4 black br3">
        <form class="measure center ba pa5 ">
          <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
            <legend class="f4 fw6 ph0 mh0 tc">Contact Us</legend>
            <div class="mt3">
              <label class="db fw6 lh-copy f6" for="name">Name</label>
              <input class="pa2 input-reset ba bg-transparent " type="name" name="name" id="name" />
            </div>
            <div class="mv3">
              <label class="db fw6 lh-copy f6" for="phone-number">Phone Number</label>
              <input class="b pa2 input-reset ba bg-transparent " type="phone-number" name="phone-number" id="phone-number" />
            </div>
          </fieldset>
          <div class="tu">
            <input class="b ph3 pv2 input-reset ba b--black bg-white grow pointer f6 dib " type="submit" value="Sumbit" />
          </div>
        </form>
      </main>
    </div>
  )
}
