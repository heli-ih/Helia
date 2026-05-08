'use client'
import { useState } from 'react'

const lineStyle = (i: number): React.CSSProperties => ({
  opacity: 0,
  animation: 'typeIn 0.3s ease forwards',
  animationDelay: `${i * 0.06}s`,
})

export default function SectionCollab() {
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const canSubmit = email && subject && message

  const handleSubmit = () => {
    if (!canSubmit) return
    const mailto = `mailto:heliaa.haghighi@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`
    window.open(mailto)
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'var(--bg-panel)',
    border: '0.5px solid rgba(255,255,255,0.08)',
    borderRadius: '6px',
    padding: '10px 12px',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-mono)',
    fontSize: '15px',
    outline: 'none',
    transition: 'border-color 0.15s',
  }

  return (
    <div className="section-enter" style={{ padding: '32px 36px', overflowY: 'auto', height: '100%' }}>
      <div style={{ fontSize: '14px', color: 'var(--purple)', letterSpacing: '0.1em', marginBottom: '20px' }}>
        202 Accepted — POST /collab
      </div>
      <h2 style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '28px',
        fontWeight: 700,
        color: 'var(--text-primary)',
        letterSpacing: '-0.02em',
        marginBottom: '6px',
      }}>
        Work together
      </h2>
      <p style={{
        fontSize: '15px',
        color: 'var(--text-secondary)',
        fontFamily: 'var(--font-mono)',
        marginTop: '14px',
        lineHeight: 1.85,
        maxWidth: '480px',
        marginBottom: '24px',
      }}>
        Whether it&apos;s a project, a role, or just a question — send it through.
        I read every message.
      </p>

      <div style={{
        background: 'var(--bg-panel)',
        border: '0.5px solid rgba(255,255,255,0.07)',
        borderRadius: '10px',
        padding: '22px',
        maxWidth: '480px',
      }}>
        {/* Email */}
        <div style={{ marginBottom: '16px', ...lineStyle(0) }}>
          <div style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '6px', fontFamily: 'var(--font-mono)' }}>
            Email <span style={{ color: 'var(--amber)' }}>*</span>
          </div>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="your@email.com"
            style={{ ...inputStyle }}
            onFocus={e => (e.target as HTMLInputElement).style.borderColor = 'rgba(96,112,200,0.3)'}
            onBlur={e => (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.08)'}
          />
        </div>

        {/* Subject */}
        <div style={{ marginBottom: '16px', ...lineStyle(1) }}>
          <div style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '6px', fontFamily: 'var(--font-mono)' }}>
            Subject <span style={{ color: 'var(--amber)' }}>*</span>
          </div>
          <input
            type="text"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            placeholder="what's this about?"
            style={{ ...inputStyle }}
            onFocus={e => (e.target as HTMLInputElement).style.borderColor = 'rgba(96,112,200,0.3)'}
            onBlur={e => (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.08)'}
          />
        </div>

        {/* Message */}
        <div style={{ marginBottom: '22px', ...lineStyle(2) }}>
          <div style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '6px', fontFamily: 'var(--font-mono)' }}>
            Message <span style={{ color: 'var(--amber)' }}>*</span>
          </div>
          <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Hit me!"
            rows={4}
            style={{ ...inputStyle, resize: 'vertical' }}
            onFocus={e => (e.target as HTMLTextAreaElement).style.borderColor = 'rgba(96,112,200,0.3)'}
            onBlur={e => (e.target as HTMLTextAreaElement).style.borderColor = 'rgba(255,255,255,0.08)'}
          />
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={!canSubmit}
          style={{
            width: '100%',
            padding: '11px',
            background: sent ? 'rgba(96,112,200,0.15)' : !canSubmit ? 'transparent' : 'var(--purple-bg)',
            border: `0.5px solid ${sent ? 'var(--purple)' : !canSubmit ? 'rgba(255,255,255,0.06)' : 'var(--purple-border)'}`,
            borderRadius: '6px',
            color: sent ? 'var(--purple)' : !canSubmit ? 'var(--text-secondary)' : 'var(--purple)',
            fontFamily: 'var(--font-mono)',
            fontSize: '15px',
            cursor: !canSubmit ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease',
            letterSpacing: '0.04em',
            ...lineStyle(3),
          }}
        >
          {sent ? '✓ request sent' : 'POST /collab →'}
        </button>
      </div>
    </div>
  )
}
