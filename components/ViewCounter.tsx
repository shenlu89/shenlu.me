'use client'
import useSWR from 'swr'
import type { NextPage } from 'next'
import { EyeSlashIcon } from '@heroicons/react/24/outline'

import fetcher from 'lib/fetcher'
import type { Views, Slug } from 'lib/types'

const ViewCounter: NextPage<Slug> = ({ slug, method }) => {
  const { data } = useSWR<Views>(`/api/views/${slug}`, (url) =>
    fetcher(url, { method })
  )
  const views = Number(data?.total)

  return (
    <span className="flex items-center justify-end">
      {views > 0 ? (
        views.toLocaleString()
      ) : (
        <EyeSlashIcon className="w-4 h-4 mr-1" />
      )}
      {' views'}
    </span>
  )
}

export default ViewCounter
