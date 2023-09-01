import Link from 'next/link'
import'./page.scss'
import SearchBar from '@/components/search bar'
import CategoryButton from '@/components/category button'

const categoryList = [
  "Adventure",
  "Off-Road",
  "Sport",
  "Touring",
  "A2 Bikes",
  "Dual-Sport",
  "Cafe Racer",
  "Scooter"
]

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
          <SearchBar/>
      </div>
      <div className='category-pick-home'>
        <h2>Categories</h2>
        <section className='category-grid'>
          {categoryList.map(value => <CategoryButton category={value}/>)}
        </section>
      </div>
    </main>
  )
}
