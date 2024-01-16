'use client'
import { useState, useRef } from 'react'
import Search from '@/components/Search'
import Chip from '@/components/Chip'
import usersData from '@/data/users'
import { User } from '@/types/types'
import { shiftFocusChip } from '@/utils/shiftFocus'

export default function Home() {
  const [users, setUsers] = useState(usersData) // Maintain Users List
  const [currUsers, setCurrUsers] = useState<User[]>([]) // Maintain Chip List

  //Add To Chip and remove from the List
  const addChip = (id: number) => {
    const userToAdd = users.find((user) => user.id === id)

    const updatedUsers = users.filter((user) => user.id !== id)
    setUsers(updatedUsers)

    if (userToAdd) {
      setCurrUsers((prevCurrUsers) => [...prevCurrUsers, userToAdd])
    }
  }

  //Delete from chips and add to result list
  const deleteChip = (id: number) => {
    const userToDelete = currUsers.find((user) => user.id === id)

    const updatedCurrUsers = currUsers.filter((user) => user.id !== id)
    setCurrUsers(updatedCurrUsers)

    if (userToDelete) {
      setUsers((prevUsers) => [...prevUsers, userToDelete])
    }
  }

  return (
    <div>
      <center>
        <div className="text-4xl mt-4 text-blue-900">Pick users</div>
      </center>
      <div className="flex justify-center mt-20">
        <div
          className=" flex flex-wrap items-center gap-4 w-[50%] border-b-4 border-blue-900"
          id="chipList"
        >
          {/* Iterate the Chip List */}
          {currUsers.map((user, i) => (
            <div
              tabIndex={0}
              key={i}
              onKeyDown={(e) => {
                if (e.key === 'Backspace') {
                  shiftFocusChip()
                  deleteChip(user.id)
                }
              }}
            >
              <Chip deleteChip={deleteChip} user={user} />
            </div>
          ))}
          <div className="w-[50%] p-0">
            <Search addChip={addChip} users={users} />
          </div>
        </div>
      </div>
    </div>
  )
}
