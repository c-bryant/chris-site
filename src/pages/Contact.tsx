import { useForm, ValidationError } from '@formspree/react'

import './Contact.scss'
import { Link } from 'react-router'

// const Contact = () => {
//   const nameRef = useRef<HTMLInputElement>(null)
//   const emailRef = useRef<HTMLInputElement>(null)
//   const messageRef = useRef<HTMLTextAreaElement>(null)

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     const email = emailRef.current?.value || ''
//     const message = messageRef.current?.value || ''
//     const mailto = `mailto:chrisbryant.dev@gmail.com?subject=Contact%20from%20${encodeURIComponent(email)}&body=${encodeURIComponent(message)}`
//     window.location.href = mailto
//   }

//   return (
//     <div className="contact-container">
//       <h1>Contact Us</h1>
//       <form className="contact-form" onSubmit={handleSubmit}>
//         <label htmlFor="name">Your Name</label>
//         <input
//           id="name"
//           type="text"
//           ref={nameRef}
//           required
//           placeholder="Your Name"
//         />
//         <label htmlFor="email">Your Email</label>
//         <input
//           id="email"
//           type="email"
//           ref={emailRef}
//           required
//           placeholder="you@example.com"
//         />
//         <label htmlFor="message">Message</label>
//         <textarea
//           id="message"
//           ref={messageRef}
//           required
//           placeholder="Type your message here..."
//           rows={5}
//         />
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   )
// }

const Contact = () => {
  const [state, handleSubmit] = useForm('xlgwdkey')
  if (state.succeeded) {
    return (
      <>
        <p className="contact-success">
          Thank you for your message! I'll get back to you soon.
        </p>
        <Link to="/">Back to Home</Link>
      </>
    )
  }
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">What's your name?</label>
        <input
          id="name"
          type="text"
          name="name"
          required
          placeholder="Your Name"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <label htmlFor="email">How can I reach you?</label>
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder="you@example.com"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message">What's on your mind?</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="What can I help you with?"
          rows={5}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Send
        </button>
      </form>
    </div>
  )
}

export default Contact
