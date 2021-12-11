import React from 'react'

export default function SpinningLogo() {
  const [engageSlink, setEngageSlink] = React.useState(false)

  function toggleSlink() {
    setEngageSlink(!engageSlink)
  }

  return (
    <section className="logo__container">
      <svg className={`logo ${engageSlink ? 'slink-engaged' : ''}`} width="96" height="84" viewBox="0 0 96 84" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M91.3946 49.5224C91.2035 51 90.9695 52.524 90.9695 54.0921V59.5544H10.6001V54.0921C10.6001 49.0028 10.928 43.9704 11.5683 39.0193L91.3946 49.5224Z" fill="white"/>
        <path d="M92.1134 45.9043C91.3616 48.814 90.9874 51.815 91.0107 54.8305L10.6157 54.785C10.5368 44.5875 11.8027 34.5277 14.3018 24.8556L92.1134 45.9043Z" fill="white"/>
        <path d="M92.1134 45.9043C91.3616 48.8141 90.9874 51.8151 91.0107 54.8306L10.6157 54.7851C10.5368 44.5875 11.8027 34.5278 14.3018 24.8557L92.1134 45.9043Z" fill="white"/>
        <path d="M92.1134 45.9043C91.3616 48.814 90.9874 51.815 91.0107 54.8305L10.6157 54.785C10.5368 44.5875 11.8027 34.5277 14.3018 24.8556L92.1134 45.9043Z" fill="white"/>
        <path d="M92.1134 45.9042C91.3616 48.814 90.9874 51.8149 91.0107 54.8305L10.6157 54.785C10.5368 44.5874 11.8027 34.5277 14.3018 24.8555L92.1134 45.9042Z" fill="url(#paint0_linear_309_3)"/>
        <defs>
        <linearGradient id="paint0_linear_309_3" x1="11.8604" y1="40.008" x2="90.6892" y2="49.382" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FF01D7"/>
          <stop offset="1" stop-color="#FBFF03"/>
        </linearGradient>
        </defs>
      </svg>
      <button onClick={toggleSlink}>{engageSlink ? 'Collapse the slinky' : 'Deploy the slinky'}</button>
    </section>
  )
}