import { useState } from 'react'
import { AiOutlineArrowRight, AiOutlineSearch } from 'react-icons/ai'
import Link from 'next/link'
import s from './SearchBar.module.scss'

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  const [search, setSearch] = useState<string>('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    console.log(search)
  }

  return (
    <div className={s.SearchBar}>
      <div className={s.bar__inp}>
        <input
          type="text"
          placeholder="Search for news..."
          value={search}
          onChange={handleSearch}
        />
        <Link href={`/${search}`}>
          <AiOutlineSearch size={20} />
        </Link>
      </div>

      <Link
        href="/covid"
        className={s.covid__link}
      >
        <p>
          Latest news on <span>Covid-19</span>
        </p>

        <AiOutlineArrowRight />
      </Link>
    </div>
  )
}

export default SearchBar
