import { ICardProps } from "../../types/card"
import { CardBody } from "./card.style"
export default function Card({children}:ICardProps){
    return(
        <>
 <CardBody>
 {children}
 </CardBody>
  
   
        </>
    )
}