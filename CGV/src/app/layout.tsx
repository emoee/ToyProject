export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* 여기에 head 관련 메타데이터를 추가할 수 있습니다 */}
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
