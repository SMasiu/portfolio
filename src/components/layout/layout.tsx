import * as React from 'react'
import { GlobalStyles } from '@styles/global-styles'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <GlobalStyles />

      <main>{children}</main>
    </div>
  )
}
