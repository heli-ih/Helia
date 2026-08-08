'use client'
import { useState } from 'react'
import { useBreakpoint } from '@/hooks/useBreakpoint'

type Section = 'me' | 'origin' | 'projects' | 'stack' | 'changelog' | 'achievements' | 'certifications' | 'testimonials' | 'collab'

interface AvatarPanelProps {
  active: Section
}

const avatarMap: Record<Section, { src: string; label: string }> = {
  me:           { src: '/avatar-default.jpg', label: 'standing by' },
  origin:       { src: '/avatar-default.jpg', label: 'standing by' },
  projects:     { src: '/avatar-default.jpg', label: 'in production' },
  stack:        { src: '/avatar-default.jpg', label: 'running deps' },
  changelog:    { src: '/avatar-default.jpg', label: 'reviewing logs' },
  achievements:   { src: '/avatar-default.jpg', label: 'celebrating wins' },
  certifications: { src: '/avatar-default.jpg', label: 'showing receipts' },
  testimonials:   { src: '/avatar-default.jpg', label: 'reading kind words' },
  collab:         { src: '/avatar-phone.png',   label: 'ready to respond' },
}

export default function AvatarPanel({ active }: AvatarPanelProps) {
  const [hovered, setHovered] = useState(false)
  const { isTablet } = useBreakpoint()

  // On the landing section, the big in-section avatar owns the visual —
  // render nothing at all so the Me content fills the row width.
  if (active === 'me') return null

  const avatar = avatarMap[active]
  // Hover → face close-up
  const src = hovered ? '/avatar-face.png' : avatar.src

  return (
    <div style={{
      width: isTablet ? '130px' : '220px',
      minWidth: isTablet ? '130px' : '220px',
      borderLeft: '0.5px solid rgba(255,255,255,0.06)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px 14px',
      gap: '14px',
      background: '#0e0e11',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Avatar frame */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: '160px',
          height: '232px',
          borderRadius: '12px',
          overflow: 'hidden',
          position: 'relative',
          flexShrink: 0,
          cursor: 'pointer',
          border: `0.5px solid ${hovered ? 'rgba(96,112,200,0.25)' : 'rgba(255,255,255,0.07)'}`,
          transition: 'border-color 0.3s ease',
          /*
           * KEY: white-bg removal trick.
           * The avatar images have a pure white (#fff) background.
           * mix-blend-mode: multiply makes white (255,255,255) × dark-bg = dark-bg color,
           * effectively making white transparent. The colored avatar remains visible.
           * This only works because our panel bg is very dark.
           */
          background: '#0e0e11',
        }}
      >
        {/* Mini terminal screen top — hidden on hover, and on /collab where the
            phone-holding avatar's head sits where this widget would land. */}
        {!hovered && active !== 'collab' && (
          <div style={{
            position: 'absolute',
            top: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '48px',
            height: '30px',
            background: '#0e1028',
            border: '0.5px solid #2a3060',
            borderRadius: '3px',
            padding: '4px 5px',
            display: 'flex',
            flexDirection: 'column',
            gap: '3px',
            zIndex: 3,
            pointerEvents: 'none',
          }}>
            {[80, 50, 70, 40].map((w, i) => (
              <div key={i} style={{
                height: '2px',
                width: `${w}%`,
                background: 'var(--purple)',
                borderRadius: '1px',
                opacity: 0.35 + i * 0.1,
              }} />
            ))}
          </div>
        )}

        {/* Avatar image with white-bg removal — gentle idle float, paused on hover */}
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          animation: 'floatY 3.5s ease-in-out infinite',
          animationPlayState: hovered ? 'paused' : 'running',
        }}>
          <img
            key={src}
            src={src}
            alt="Helia Haghighi, software developer and data analyst based in Dubai, UAE"
            style={{
              height: hovered ? '102%' : active === 'collab' ? '92%' : '80%',
              width: 'auto',
              objectFit: 'contain',
              objectPosition: 'bottom center',
              transition: 'height 0.35s ease',
              display: 'block',
              // White background removal: multiply blends white away on dark bg
              mixBlendMode: 'multiply',
              // Plays immediately when the panel mounts — coincides with the
              // big avatar's fly-in landing. No extra delay = no perceived gap.
              opacity: 0,
              animation: 'avatarAppear 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            }}
          />
        </div>

        {/* Bottom vignette */}
        <div style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: '28px',
          background: 'linear-gradient(to top, #0e0e11, transparent)',
          pointerEvents: 'none',
          zIndex: 4,
        }} />

        {/* Hover speech bubble — sits just below the avatar's mouth, with a
            tiny tail pointing UP toward the face. */}
        {hovered && (
          <div style={{
            position: 'absolute',
            top: '190px',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '11px',
            color: 'var(--purple)',
            background: 'var(--purple-bg)',
            border: '0.5px solid var(--purple-border)',
            padding: '4px 10px',
            borderRadius: '10px',
            whiteSpace: 'nowrap',
            fontFamily: 'var(--font-mono)',
            zIndex: 5,
            letterSpacing: '0.04em',
            boxShadow: '0 4px 14px rgba(0,0,0,0.4)',
          }}>
            Hi there!
            {/* Tail outline (slightly larger, sits behind the fill) */}
            <span aria-hidden="true" style={{
              position: 'absolute',
              top: '-7px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '6px solid transparent',
              borderRight: '6px solid transparent',
              borderBottom: '7px solid var(--purple-border)',
              pointerEvents: 'none',
            }} />
            {/* Tail fill */}
            <span aria-hidden="true" style={{
              position: 'absolute',
              top: '-6px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '5px solid transparent',
              borderRight: '5px solid transparent',
              borderBottom: '6px solid var(--purple-bg)',
              pointerEvents: 'none',
            }} />
          </div>
        )}
      </div>

      {/* Status row — fades out on hover so the speech bubble owns the moment. */}
      <div style={{
        textAlign: 'center',
        opacity: hovered ? 0 : 1,
        transition: 'opacity 0.2s ease',
        pointerEvents: hovered ? 'none' : 'auto',
      }}>
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', gap: '5px', marginBottom: '5px',
        }}>
          <div style={{
            width: '5px', height: '5px', borderRadius: '50%',
            background: 'var(--purple)',
            boxShadow: '0 0 6px rgba(96,112,200,0.7)',
            animation: 'pulse 2s ease-in-out infinite',
          }} />
          <span style={{
            fontSize: '14px', color: 'var(--purple)',
            fontFamily: 'var(--font-mono)', letterSpacing: '0.02em',
          }}>
            {avatar.label}
          </span>
        </div>
      </div>

    </div>
  )
}
