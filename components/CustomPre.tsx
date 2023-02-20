import {
  ComponentProps,
  ReactElement,
  useCallback,
  useEffect,
  useState,
  Children
} from 'react'

import { CheckIcon, CopyIcon } from 'data/icons'

const CustomPre = ({ children, ...props }: any): ReactElement => {
  const [isCopied, setCopied] = useState(false)

  useEffect(() => {
    if (!isCopied) return
    const timerId = setTimeout(() => {
      setCopied(false)
    }, 1000)

    return () => {
      clearTimeout(timerId)
    }
  }, [isCopied])

  const handleClick = useCallback<
    NonNullable<ComponentProps<'button'>['onClick']>
  >(async () => {
    const getTextContent = (children: any) => {
      let textContent = ''
      Children.map(children, (child) => {
        if (typeof child === 'string' || typeof child === 'number') {
          textContent += child
        }
        children = child?.props?.children
        if (children) {
          textContent += getTextContent(children)
        }
      })
      return textContent
    }
    if (!navigator?.clipboard) {
      console.error('Access to clipboard rejected!')
    }
    try {
      await navigator.clipboard.writeText(getTextContent(children))
      setCopied(true)
    } catch {
      console.error('Failed to copy!')
    }
  }, [children])

  const IconToUse = isCopied ? CheckIcon : CopyIcon

  return (
    <pre {...props}>
      <button
        onClick={handleClick}
        tabIndex={0}
        {...props}
        className={`float-right border p-1 block rounded-sm ${
          isCopied
            ? 'text-green-400 bg-green-100 border-green-200'
            : 'text-gray-400 bg-gray-100 hover:bg-gray-100 border-gray-200'
        }`}
      >
        <IconToUse className="w-5 h-5" />
      </button>
      {children}
    </pre>
  )
}

export default CustomPre
