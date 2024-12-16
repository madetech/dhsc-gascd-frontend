import '../src/styles/globals.scss'

export const metadata = {
  title: 'DHSC: Get Adult Social Care Data',
  description: 'Department of Health and Social Care: Get Adult Social Care Data Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="govuk-frontend-supported">{children}</body>
    </html>
  )
}