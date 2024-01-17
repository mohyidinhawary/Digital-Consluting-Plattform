import alse from "../../assets/alse.svg"
export default function NavLogo(){
    return(
        <>
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse ">
      <img src={alse} className="h-8" alt="alse Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-black hover:text-white">Digital Consluting</span>
  </a>
        </>
    )
}