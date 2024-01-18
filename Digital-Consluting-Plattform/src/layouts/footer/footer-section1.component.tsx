import { lists } from "../../types/list"
import renderNestedList from "./nested-list.component"

export default function FooterSection1(){
    return(
        <>
         <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        {lists.map((l)=>(
            <div key={Object.keys(l)[0]} >
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{Object.keys(l)[0]}</h2>
            {renderNestedList((l as any)[Object.keys(l)[0]])}
        </div>
        ))
        
}
       
    </div>
        </>
    )
}