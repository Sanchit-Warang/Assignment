import { User } from "@/types/types"

const ResultListItem = ({user}: {user: User}) => {
  return (
    <>
      <img
        className="rounded-full"
        src={`https://i.pravatar.cc/150?img=${user.id + 10}`}
        width={30}
        height={30}
        alt="image"
      />{' '}
      <div className="w-[50%]">{user.name}</div>{' '}
      <div className="w-[50%] text-gray-400">{user.email}</div>
    </>
  )
}

export default ResultListItem
