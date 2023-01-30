import Giscus from '@giscus/react'
import { useTheme } from 'next-themes'

const Comment = () => {
  const { theme } = useTheme()

  return (
    <Giscus
      repo={process.env.NEXT_PUBLIC_REPO as `${string}/${string}`}
      repoId={process.env.NEXT_PUBLIC_REPO_ID as string}
      category={process.env.NEXT_PUBLIC_CATEGORY as string}
      categoryId={process.env.NEXT_PUBLIC_CATEGORY_ID as string}
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={theme === 'dark' ? 'transparent_dark' : 'light'}
      loading="lazy"
    />
  )
}

export default Comment
