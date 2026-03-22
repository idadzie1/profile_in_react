import React from 'react'
import '../../general.css';
import '../sections/messageform.css'

const MessageForm = () => {
  return (
    <section id='contact__form'>
        <h4>Explore My</h4>
        <h2>Portfolio</h2>
        <form action="" method=''>
            <input type="text" name='name' id='' placeholder='John Doe'/>
            <input type="email" name="email" id="" placeholder='example@email.com'/>
            <input type="text" name='Subject' id='' placeholder='Enquiry'/>
            <textarea name="message" id="" placeholder='message'></textarea>
            <div className="control__butttons">
                <button className='btn'>Send</button>
                <button className='btn'>Clear</button>
            </div>
        </form>
    </section>
  
  )
}

export default MessageForm
