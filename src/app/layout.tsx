import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import SettingsManager from '@/components/SettingsManager/SettingsManager'
import { LanguageProvider } from '@/context/LanguageContext'
import { ColorProvider } from '@/context/ColorContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vito Giuliano | Software Engineer',
  description: 'Full-Stack Developer and Software Engineer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          <LanguageProvider>
            <ColorProvider>
              <SettingsManager />
              <div className="layout-content">
                {children}
              </div>
            </ColorProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
