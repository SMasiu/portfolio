import * as React from 'react'
import { GlobalStyles } from '@styles/global-styles'
import { Header } from '@components/header/header'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      {/* <Header /> */}

      <main>{children}</main>
    </div>
  )
}
