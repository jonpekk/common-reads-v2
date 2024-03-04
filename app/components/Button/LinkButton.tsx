import { Link } from "@remix-run/react"

type TLinkButtonProps = {
  href: string,
  type?: 'primary' | 'secondary',
  children: React.ReactNode
}

function LinkButton({ href, type, children }: TLinkButtonProps) {

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