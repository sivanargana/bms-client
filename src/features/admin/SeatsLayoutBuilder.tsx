import { Controller, useFieldArray, useForm } from "react-hook-form";
import _ from 'lodash';
import { Button, Input, Popover, Select } from "antd";
import React, { useEffect } from "react";


function SeatsLayoutBuilder({seats = [],onSave,onUpdate}:any) {

const getGrid = () => {
  const rows = 26; // A to Z
  const columns = 40;
  const grid = [];

  for (let row = 0; row < rows; row++) {
    const rowLabel = String.fromCharCode(65 + row); // 'A' = 65
    for (let column = 1; column <= columns; column++) {
      grid.push({
        row: rowLabel,
        column,
        number: 0,
        type: 'blank',
        price: 0,
      });
    }
  }

  return grid;
};






  const { control, getValues,watch,setValue } = useForm({ defaultValues: { rows: getGrid() } })
  const { fields: rows} = useFieldArray({ control, name: "rows" });
  useEffect(() => {

    seats.forEach((item:any,) => {
      let match = rows.findIndex((s:any)=>(s.column == item.column && s.row == item.row))
  
        console.log(match)

         setValue(`rows.${match}.number`,item.number)
         setValue(`rows.${match}.type`,item.type)

     
      
    });

    
    
  }, []);
  
 
  const handlePrint = () => {
    let filled:any  = getValues().rows.filter((item:any)=>item.type !== 'blank')
    onSave(filled)
     

  }
 
  const handlePrint2 = () => {
    let filled:any  = getValues().rows.filter((item:any)=>item.type !== 'blank')
    onUpdate(filled)
     

  }

  



  return (
    <>
     {seats.length > 0 ? <Button size="small" onClick={() => handlePrint2()}>Update</Button> : <Button size="small" onClick={() => handlePrint()}>Add</Button> }
      <div className="flex flex-wrap p-[20px]">

        {
          rows.map((column: any, i: any) =>
          {
              let type = watch(`rows.${i}.type`);
          let number = watch(`rows.${i}.number`);
            return <React.Fragment key={i}>
              <Popover title="Seat Info" trigger="click" content={
                <div className="grid grid-cols-1 gap-[10px]">
                  
                  {type === "basic" && <Controller
                    name={`rows.${i}.number`}
                    control={control}
                    render={({ field }) => <Input placeholder="Number" {...field} />}
                  />}
                  <Controller
                    name={`rows.${i}.type`}
                    control={control}
                    render={({ field }) => <Select placeholder="Type" {...field} >
                      <Select.Option value="basic">Basic</Select.Option>
                      <Select.Option value="space">Space</Select.Option>
                      <Select.Option value="blank">Blank</Select.Option>
                    </Select>}
                  />
                </div>
              }>
                  {(() => {
                switch (type) {
                  case "blank":
                    return <div className="size-[30px] rounded flex items-center justify-center border border-gray-200 hover:border-blue-500"></div>;
                  case "space":
                    return <div className="size-[30px] rounded flex items-center justify-center border border-transparent hover:border-blue-500"></div>;
                  case "basic":
                    return <div className="size-[30px] rounded flex items-center justify-center border border-gray-300 text-xs bg-gray-200">{column.row+''+column.column}</div>;
               
                }
              })()}
              </Popover>
              {column.column % 40 !== 0 && <div className="w-[5px]"></div>}
              {column.column % 40 === 0 && <div className="h-[5px] w-full"></div>}
            </React.Fragment>
          }
          )
        }

      </div>
    </>

  )
}


export default SeatsLayoutBuilder
