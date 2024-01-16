import React from 'react'
import { User } from '@/types/types'

type Props = {
  user: User
  deleteChip: (id: number) => void
}

const Chip = ({ user, deleteChip }: Props) => {

  //Handle the x click on the chip
  const handleXClick = (id: number) => {
    deleteChip(id)
  }

  return (
    <div className="flex p-1 items-center rounded-full my-1 gap-1 bg-slate-200">
      {/* Using img rather than Image for remote images */}
      <img
        className="rounded-full"
        src={`https://i.pravatar.cc/150?img=${user.id + 10}`}
        width={30}
        height={30}
        alt="image"
      />
      <p>{user.name}</p>
      <b
        onClick={() => {
          handleXClick(user.id)
        }}
        className="cursor-pointer hover:text-red-500"
      >
        X
      </b>
    </div>
  )
}

export default Chip
