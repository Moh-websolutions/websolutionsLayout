export default function Header ({hero_title, hero_subtitle, hero_bg}){
	return (

	// <!-- Page Header-->
    <>
        <header className="masthead" style={{backgroundImage: `url(${hero_bg})`}}>
            <div className="container position-relative px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="site-heading">
                            <h1>{hero_title}</h1>
                            <span className="subheading">{hero_subtitle}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
 
    </>

	)
}

Header.defaultProps = {
	hero_title: "Clean Blog",
	hero_subtitle: "A Blog Theme by Start Bootstrap",
    hero_bg: "/about-bg.jpeg"
}