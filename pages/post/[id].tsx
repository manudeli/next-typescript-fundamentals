import { useRouter } from 'next/dist/client/router'
import React from 'react'

interface Props {}

const Post = (props: Props) => {
  const router = useRouter()

  return (
    <div>
      <button onClick={() => router.push('/about')}>Go to about</button>
    </div>
  )
}

export default Post
