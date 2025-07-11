import { useFieldArray, useForm } from "react-hook-form";
import _ from 'lodash';
import { Button } from "antd";


function SeatsLayoutBuilder() {

  const getGrid = () => {
    let rows = 30;
    let columns = 30;
    let grid = [];
    for (let row = 1; row <= rows; row++) {
      for (let column = 1; column <= columns; column++) {
        grid.push({ column, row, number: 0, type: 'blank', price: 0 });
      }
    }
    return grid;
  }
 

  const groupedByRow:any = Object.values(_.groupBy(getGrid(),'row'));

 



  const { control, register, getValues } = useForm({ defaultValues: { rows: getGrid() } })
  const { fields: rows, append: addRow, remove: removeRow } = useFieldArray({ control, name: "rows" });

  const handleChange = (column: any) => {
    console.log(column)

  }

 

  return (
    <div className="flex flex-col gap-[10px] p-[20px]">
        <Button size="small" onClick={() => { console.log(getValues()) }}>Print</Button>
    {
      groupedByRow.map((row:any,i1:any)=>
      <div key={i1} className="flex gap-[10px]">
      {
          row.map((column:any,i2:any)=>
         <label key={i2} className="size-[30px] border flex items-center justify-center text-xs [&:has(input:checked)]:bg-green-100">
          <input type="checkbox" className="hidden" onChange={()=>handleChange(column)}  />
          {column.column}
        </label>
      )
      }
      </div>
      )
      }
    
    </div>
 
  )
}


export default SeatsLayoutBuilder
