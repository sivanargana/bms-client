

function Seat({ columns }: any) {
    return (
        <div className="grid gap-[10px]" style={{ gridTemplateRows: `repeat(1,30px)`, gridTemplateColumns: `repeat(${20},30px)` }}>
            add column
            {columns.map((column: any, i: any) => (
                <div key={i}>
                    {column.status === 0 && <div className="size-[30px] text-xs flex items-center justify-center rounded border border-gray-300 bg-gray-300">{column.column}</div>}
                    {column.status === 1 && <label className="size-[30px] text-xs flex items-center justify-center rounded bg-white text-gray-400 border border-green-500 [&:has(input:checked)]:bg-black [&:has(input:checked)]:text-white" style={{ gridColumnStart: column.y }}>
                        <input type="checkbox" className="hidden" />
                        {column.column}
                    </label>}
                </div>
            ))}
        </div>
    )

}
function Rows({ rows }: any) {
    return (
        <div className="flex flex-col gap-[10px]">
add row
            {rows.map((row: any, i: any) => (
                <div className="flex gap-[50px]" key={i}>
                    <div className="size-[30px] flex items-center justify-center rounded border bg-black text-white">{row.row}</div>
                    <Seat columns={row.columns} />
                </div>
            ))}
        </div>
    )

}
function Area({ areas }: any) {
    return (
        <div className="inline-flex flex-col gap-[10px] p-[20px]">
            add group
            {areas.map((area: any, i: any) => (
                <>
                    <div className="text-center font-bold text-lg border-b border-gray-200 pb-[5px] my-[10px]">{area.name}</div>
                    <Rows rows={area.rows} />
                </>

            ))}
            <img src="/screen.svg" className="h-[50px] self-center mt-[50px]" />
        </div>
    )

}

function SeatLayout2({ data }: any) {


    return data[0]?.areas && <Area areas={data[0]?.areas} />
}

export default SeatLayout2