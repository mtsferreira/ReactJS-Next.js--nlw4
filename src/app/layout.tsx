"use client"

import '../styles/globals.css'
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdownProvider } from '../contexts/CountdownContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ChallengesProvider>
      <CountdownProvider>
        <html lang="en">
          <body>{children}</body>
        </html>
      </CountdownProvider>
    </ChallengesProvider>
  )
}
