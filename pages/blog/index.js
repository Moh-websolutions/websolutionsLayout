import Image from 'next/image'
import Layout from '@/components/Layout'
import Header from '@/components/Header'


export default function Home({posts}) {
  return (
    <Layout title="Blog" description="content">
      <Header hero_title="Blog" hero_subtitle="Latest news / articles" hero_bg="/home-bg.jpeg" />

      <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">

                    {posts.slice(0,5).map((post, idx) => (
                      <div key={post.id}>
                        <div className="post-preview">
                            <a href={`/blog/${post.id}`}>
                                <h2 className="post-title">{post.title}</h2>
                                <h3 className="post-subtitle">{post.body}</h3>
                            </a>
                            <p className="post-meta">
                                Posted by
                                <a href="#!">Start Bootstrap</a>
                                on September 24, 2021
                            </p>
                        </div>
                        <hr className="my-4" />
                      </div>

                    ))}
            
                    <div className="d-flex justify-content-end mb-4"><a className="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div>
                </div>
            </div>
        </div>
    </Layout>
  )
}
 
 
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
    
    revalidate: 10, // In seconds
  }
}