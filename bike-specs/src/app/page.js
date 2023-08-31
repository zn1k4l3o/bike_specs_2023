import Link from 'next/link'
import'./page.scss'

export default function Home() {
  return (
    <main className="home">
      <div className='background-photo'>
        <section>
          <h1>Bike Specs</h1>
          <h2>Welcome to Bike Specs, a site dedicated to providing information on specifications of bikes from variety of manufacturers.</h2>
          <Link href="/">
            <button >View All</button>
          </Link>
        </section>
      </div>
      <div className='search-home'>
          <h2>Search bike by name:</h2>
          
      </div>
    </main>
  )
}
