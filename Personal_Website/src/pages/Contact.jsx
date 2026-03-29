import React, { useState } from 'react';

//Connect with real email service 

function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', subject: '', message: '' });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const inputStyle = {
    backgroundColor: 'rgba(24, 28, 20, 0.4)',
    border: '1px solid rgba(236, 223, 204, 0.2)',
    borderRadius: '12px',
    color: '#ECDFCC',
    padding: '0.65rem 1rem',
    width: '100%',
    outline: 'none',
    fontSize: '0.875rem',
    fontFamily: 'inherit',
    transition: 'border-color 0.2s',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.75rem',
    marginBottom: '0.4rem',
    color: 'rgba(236, 223, 204, 0.6)',
    letterSpacing: '0.05em',
  };

  return (
    <section id="contact" data-aos="fade-up" className="px-5 py-12 sm:px-10 sm:py-16 lg:px-32 lg:py-24">
      <p className="text-xs uppercase tracking-widest mb-2" style={{ color: 'rgba(236, 223, 204, 0.5)' }}>
        Contact
      </p>
      <h1 className="font-bold tracking-tight leading-none mb-3" style={{ color: '#ECDFCC', fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
        Let's Connect!
      </h1>
      <p className="mb-10 text-sm" style={{ color: 'rgba(236, 223, 204, 0.5)' }}>
        Open to any new opportunities or collaborations.
      </p>

      <div
        className="rounded-3xl p-8 flex flex-col gap-4"
        style={{
          backgroundColor: '#697565',
          border: '1px solid rgba(236, 223, 204, 0.2)',
          maxWidth: '720px',
        }}
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>First Name</label>
            <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} style={inputStyle}
              onFocus={e => e.target.style.borderColor = 'rgba(236,223,204,0.6)'}
              onBlur={e => e.target.style.borderColor = 'rgba(236,223,204,0.2)'}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Last Name</label>
            <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} style={inputStyle}
              onFocus={e => e.target.style.borderColor = 'rgba(236,223,204,0.6)'}
              onBlur={e => e.target.style.borderColor = 'rgba(236,223,204,0.2)'}
            />
          </div>
        </div>

        <div>
          <label style={labelStyle}>Email</label>
          <input name="email" placeholder="your-email@email.com" value={form.email} onChange={handleChange} style={inputStyle}
            onFocus={e => e.target.style.borderColor = 'rgba(236,223,204,0.6)'}
            onBlur={e => e.target.style.borderColor = 'rgba(236,223,204,0.2)'}
          />
        </div>

        <div>
          <label style={labelStyle}>Subject</label>
          <input name="subject" placeholder="Let's collaborate" value={form.subject} onChange={handleChange} style={inputStyle}
            onFocus={e => e.target.style.borderColor = 'rgba(236,223,204,0.6)'}
            onBlur={e => e.target.style.borderColor = 'rgba(236,223,204,0.2)'}
          />
        </div>

        <div>
          <label style={labelStyle}>Message</label>
          <textarea
            name="message"
            placeholder="Tell me about your project or how I can help..."
            value={form.message}
            onChange={handleChange}
            rows={5}
            style={{ ...inputStyle, resize: 'vertical' }}
            onFocus={e => e.target.style.borderColor = 'rgba(236,223,204,0.6)'}
            onBlur={e => e.target.style.borderColor = 'rgba(236,223,204,0.2)'}
          />
        </div>

        <button
          className="rounded-full font-medium text-sm tracking-wide transition-all duration-200"
          style={{
            backgroundColor: '#ECDFCC',
            color: '#181C14',
            padding: '0.75rem 2rem',
            alignSelf: 'flex-start',
            border: 'none',
            cursor: 'pointer',
          }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#181C14'; e.currentTarget.style.color = '#ECDFCC'; }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#ECDFCC'; e.currentTarget.style.color = '#181C14'; }}
        >
          Send Message
        </button>
      </div>
    </section>
  );
}

export default Contact;