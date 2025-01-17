import Image from 'next/image';
import Layout from '@/components/Layout';
import Header from '@/components/Header' 
import { API_URL } from 'url.config';
 

export default function Home({articles}) {



  return (
    <Layout title="Blog" description="content">
      <Header hero_title="Blog" hero_subtitle="Latest news / articles" hero_bg="/home-bg.jpeg" />

      <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">

                    {articles.slice(0,5).map((article, idx) => (
                      <div key={article.id}>
                        <div className="article-preview">
                            <a href={`/blog/${article.id}`}>
                                <h2 className="article-title">{article.title}</h2>
                                <h3 className="article-subtitle">{article.description}</h3>
                            </a>
                            <p className="article-meta">
                                articleed by &nbsp;
                                {article.author.name }
                                 on {article.created_at}

                                 {/* {console.log(article.author.picture)} */}
                             </p>
                          
                             <div>
                            
                             <Image 
                                unoptimized={process.env.ENVIRONMENT !== "PRODUCTION"}
                                src={`${API_URL}${article.author.picture.formats.small.url}`} 
                                width={50}height={50} layout="fixed" 
                              />
                            </div>
                        </div>
                        <hr className="my-4" />
                      </div>

                    ))}

           
                    <div className="d-flex justify-content-end mb-4">
                        <a className="btn btn-primary text-uppercase" href="#!" id="button_next_articles" >Older articles →</a></div>
                </div>
            </div>
        </div>
    </Layout>
  )
}
 
 
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/articles`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
    
    revalidate: 10, // In seconds
  }
}


//on click button_next_articles display next 5 articles
 