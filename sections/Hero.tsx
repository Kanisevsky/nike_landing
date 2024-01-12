 import Button from "@/components/Button"
function Hero() {
  return (
    <section id="home" 
    className="w-full flex xl:flex-row justify-center min-h-screen gap-10 max-container">
      <div 
      className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p>Our summer collection</p>
        <h1>
         <span>The new Arrival</span>
         <br/>
         <span>Nike </span>
         Shoes
        </h1>
        <p>Discover stylish Nike arrivals, quality and innovation for your active life </p>
        <Button label="Show Now" iconUrl="/icons/arrow-right.svg"/>
      </div>
    </section>
  )
}

export default Hero
