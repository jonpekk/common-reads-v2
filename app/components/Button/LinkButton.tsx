import { Link } from "@remix-run/react"

interface ILinkButtonProps {
  href: string,
  type?: 'primary' | 'secondary',
  children: React.ReactNode
}

function LinkButton({ href, type, children }: ILinkButtonProps) {

  let buttonBackground = 'bg-primary-200'

  switch (type) {
    case 'secondary':
      buttonBackground = 'bg-bg-300'
      break;
    default:
      break
  }

  return (
    <Link to={href} className={`${buttonBackground} hover:opacity-75 text-black py-2 px-4 rounded`}>{children}</Link>
  )
}

export default LinkButton