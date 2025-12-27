import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import { getImagePath } from '../utils/imagePath';

interface LayoutProps {
  children: React.ReactNode
  title?: string
}

export default function Layout({ children, title = 'GreenSpring - Business Transformation Consulting' }: LayoutProps) {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="icon" type="image/x-icon" href={getImagePath('favicons/favicon.ico')} />
        <link rel="icon" type="image/png" sizes="16x16" href={getImagePath('favicons/favicon-16x16.png')} />
        <link rel="icon" type="image/png" sizes="32x32" href={getImagePath('favicons/favicon-32x32.png')} />
        <link rel="apple-touch-icon" sizes="180x180" href={getImagePath('favicons/apple-touch-icon-180x180.png')} />
        <link rel="icon" type="image/png" sizes="192x192" href={getImagePath('favicons/android-chrome-192x192.png')} />
        <link rel="icon" type="image/png" sizes="512x512" href={getImagePath('favicons/android-chrome-512x512.png')} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  )
}