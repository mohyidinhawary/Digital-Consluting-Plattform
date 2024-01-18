import { ListItem } from "../../types/list";



export default function renderNestedList (items: ListItem[])  {
    return (
        
      <ul className="text-gray-500 dark:text-gray-400 font-medium">
        {items.map((item) => (
          <li key={item.name} className="mb-4">
            <a href={item.link} className="hover:underline">{item.name}</a>
            {item.children && renderNestedList(item.children)}
          </li>
        ))}
      </ul>
     
    );
  };