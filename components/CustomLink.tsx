import Link from 'next/link'

const CustomLink = (props: any) => {
  const { href, children, ...otherProps } = props

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...otherProps}>
        {children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

export default CustomLink
