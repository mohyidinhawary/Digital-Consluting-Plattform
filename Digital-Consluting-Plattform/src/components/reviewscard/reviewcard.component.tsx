import Card from "../../layouts/card/card.component"
import pic1 from "../../assets/pic1.png"
export function ReviewCard(){
    return(
        <>
<Card>
<div>
        <p className=" text-lightText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In
          consectetur error, dolores quae ipsa quos enim corporis magni
          obcaecati tempore natus eos, libero ducimus nulla neque eaque maxime
          nam molestias?
        </p>
      </div>

      <div className=" flex flex-row justify-center">
        <img className=" rounded-full w-1/4" src={pic1} alt="img" />
      </div>
</Card>
        </>
    )
}