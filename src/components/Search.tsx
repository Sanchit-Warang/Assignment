'use client'
import { User } from '@/types/types'
import isEven from '@/utils/isEven'
import { shiftFocus } from '@/utils/shiftFocus'
import { useMemo, useState } from 'react'
import ResultListItem from './ResultListItem'

type Props = {
  users: User[]
  addChip: (id: number) => void
}

const Search = ({ users, addChip }: Props) => {

  const [showResults, setShowResults] = useState(false)// to Hide When initially not in focus
  const [query, setQuery] = useState('') // search query from input


  //filter the search results 
  //use Memo to avoid running on any other renders 
  const filteredUsers = useMemo(
    () =>
      users.filter((user) =>
        user.name.toLowerCase().includes(query.toLowerCase())
      ),
    [users, query]
  )

  //reset the query and add the chip
  const handleDivClick = (id: number) => {
    setQuery('')
    addChip(id)
  }

  return (
    <div className="relative">
      {/* Input section */}
      <input
        className="w-full m-0 p-0"
        type="text"
        placeholder="Add new user ..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setShowResults(true)}
        onKeyDown={(e) => {
          if (e.key === 'Backspace' && query === '') {
            e.preventDefault()
            shiftFocus()
          }
        }}
      />
      {/* Results section */}
      <div
        id="results"
        className={`absolute overflow-y-auto overflow-x-hidden top-full left-0 w-full shadow-lg bg-gray-100 z-10 max-h-[300px]
        ${showResults ? '' : 'hidden'}
        `}
      >
        {filteredUsers.map((user, i) => (
          <div
            key={user.id}
            onClick={() => handleDivClick(user.id)}
            className={`flex gap-1 items-center p-2 cursor-pointer ${
              isEven(i) ? 'bg-white' : ''
            }`}
          >
            <ResultListItem user={user} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Search
