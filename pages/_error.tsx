import Banner from '../components/Banner';
import Link from 'next/link';
function ErrorPage() {
	return (
		<>
			<Banner sm={true}>
				<div className="pagename">
					<h1>Ajaj! Někde se stala chyba</h1>
				</div>
			</Banner>
			<section className="pagecontent">
				<div className="error-container">
					<p>Je nám líto, ale zdá se, že stránka, kterou hledáte, neexistuje nebo byla přejmenována.</p>
					<Link href="/">
						<button className="back-link"> &lt;- Zpět domů</button>
					</Link>
				</div>
			</section>
		</>
	);
}

export default ErrorPage;
