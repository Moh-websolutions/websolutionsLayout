
import Image from 'next/image'
import Layout from '@/components/Layout'
import Header from '@/components/Header'
export default function POST ({post}) {
    return(
       
        <>
        <Layout title="About" description="this is desc about page">
            <Header hero_title={post.title} hero_subtitle="" hero_bg="/post-bg.jpeg" />
            <main className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <p>{post.body}</p>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
        </>
        
    )
}

 export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
  
    return {
      paths: posts.map((post) => ({
        params: { id: post.id.toString() },
      })),
      fallback: false,
    }
  }


// for each individual page/path : get the data for the path/page
export async function getStaticProps({params}) {

    const { id } = params
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`);
    const posts = await res.json();
    const post = posts[0];

    return {
        props: {post}
    }
}