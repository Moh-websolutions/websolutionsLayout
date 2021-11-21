import Layout from '../components/Layout'
import Header from '../components/Header'

export default function About (){
	return (
		<>
		<Layout title="About">
			<Header hero_title="About Us" hero_subtitle="Who we are" hero_bg="/about-bg.jpeg" />
			<div>
				<p>This content for about page</p>
			</div>
		</Layout>
		</>
	)
}