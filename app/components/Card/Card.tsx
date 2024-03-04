
type CardProps = {
  children: React.ReactNode
}

function Card({ children }: CardProps) {
  return (
    <div
      className="p-4 mx-2 my-6 rounded relative md:grid-cols-2 lg: grid-cols-3 bg-bg-100"
    >
      {children}
    </div>
  )
}

export default Card