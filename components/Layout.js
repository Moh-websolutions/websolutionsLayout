import Head from 'next/head';
import Nav from '/components/Nav'
import Footer from '/components/Footer' 
import Header from '/components/Header' 



export default function Layout({title, keywords, description, children}) {
  return (

    <div>
        <Head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content={description} />
            <meta name="author" content="Bootstrap" />
            <title>{title}</title>
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            // Font Awesome icons
            <script src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" crossorigin="anonymous"></script>
            // Google fonts
            <link href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800" rel="stylesheet" type="text/css" />

            {/* styles  */}
        </Head>

        <Nav />

        {children}

        <Footer />

    </div>

  )

}

{/* default roots */}
Layout.defaultProps = {
    title: "Bootstrap default title",
    description: "Bootstrap default description",
    keywords: "default, keyword"
}