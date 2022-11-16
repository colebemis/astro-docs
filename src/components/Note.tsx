const colorMap = {
  info: 'lightblue',
  warning: 'yellow',
  danger: 'lightpink'
}

const defaultTitleMap = {
  info: 'Note',
  warning: 'Warning',
  danger: 'Danger'
}

export function Note({
  variant = 'info',
  title = defaultTitleMap[variant],
  children
}: {
  variant: 'info' | 'warning' | 'danger'
  title?: string
  children: React.ReactNode
}) {
  return (
    <div style={{padding: 16, backgroundColor: colorMap[variant]}}>
      <p style={{margin: 0, fontWeight: 'bold'}}>{title}</p>
      {children}
    </div>
  )
}
