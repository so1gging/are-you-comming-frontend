interface BadgeProps {
  text: string
  color: 'red' | 'blue'
}

const Border = {
  red: 'border-red',
  blue: 'border-blue',
}

const Text = {
  red: 'text-red',
  blue: 'text-blue',
}

const Badge = ({ text, color }: BadgeProps) => {
  return (
    <div className={`border-2 rounded-xl ${Border[color]} pr-2 pl-2 w-fit`}>
      <span className={`${Text[color]} text-subtitle`}>{text}</span>
    </div>
  )
}

export default Badge
