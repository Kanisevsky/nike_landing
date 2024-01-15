import Image from "next/image";

interface ShoeCardProps {
  imgUrl: string;
  changeBigShoeImage: ({}) => void;
  bigShoeImg: string
}


function ShoeCard({imgUrl, changeBigShoeImage, bigShoeImg} : ShoeCardProps ) {
  const handleClick = () => {
    if(bigShoeImg !== imgUrl) {
      changeBigShoeImage(imgUrl)
    }
  }
  return (
    <div className={`border-2 rounded-xl cursor-pointer max-sm:flex-1
    ${bigShoeImg === imgUrl ? "border-coral-red" : "border-transparent" }`}
    onClick={handleClick}
    >
      <div className="">
        <Image src={"/"} alt="" width={127} height={103}/>
      </div>
    </div>
  )
}

export default ShoeCard
