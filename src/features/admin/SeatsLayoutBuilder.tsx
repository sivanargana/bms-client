import { useFieldArray, useForm } from "react-hook-form";

 
function SeatsLayoutBuilder() {
    const data = Array.from({length:30}).map((_,row)=>{
    return Array.from({length:30}).map((_,column)=>{
        return{
          row:row,
          column:column,
          number:0,
          type:"blank"
        }
      })
  })
  console.log(data)
  const { control, register, getValues, watch } = useForm()
   const { fields: rows, append: addRow, remove: removeRow } = useFieldArray({ control, name: "rows" });

 
  
  return (
    <div>
  {rows.map((field: any, index: any) => {
     return (
     <div key={index}>
       rr
      
      
     </div>)
        })}
    </div>
  )
}

 
export default SeatsLayoutBuilder
 