import Image from "next/image"
interface ButtonProps {
  label: string,
  iconUrl: string
}

function Button({label, iconUrl}: ButtonProps) {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red">
      {label}
      <Image src={iconUrl} alt="arrow" width={20} height={20} className="ml-2 rounded-full"/>
    </button>
  )
}

export default Button
