import axios from 'axios'
import { NextPageContext } from 'next'
import { Post } from '../../interfaces'
import Link from 'next/link'

export const getServerSideProps = async (context: NextPageContext) => {
  const postId = context.query.id

  try {
    const { data: post } = await axios(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    )
    return { props: { post } }
  } catch (e) {
    if (axios.isAxiosError(e) && e.response?.status === 404) {
      return {
        notFound: true,
      }
    }
    return { props: {} }
  }
}

interface Props {
  post: Post
}

const PostPage = ({ post }: Props) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href="/">
        <a>[Go to home Link]</a>
      </Link>
      {/* eslint-disable */}
      {/* SSR과 CSR을 비교해보자 */}
      <a href="/">[Go to home A]</a>
    </div>
  )
}

export default PostPage
