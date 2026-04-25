import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import ThemeUpdater from '@/components/ThemeUpdater/ThemeUpdater'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import { LanguageProvider } from '@/context/LanguageContext'

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
            <LanguageSwitcher />
            <ThemeUpdater />
            <div className="layout-content">
              {children}
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
