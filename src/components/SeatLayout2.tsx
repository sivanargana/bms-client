import { Button, Col, Drawer, Form, Input, Popover, Row } from "antd"
import useModal from "antd/es/modal/useModal";
import axios from "axios";
import { useState } from "react";


function Seat({ columns,onChange,id }: any) {
      const [open, setOpen] = useState(false);
    const [item, setItem] = useState<any>({});
    const [isEdit, setIsEdit] = useState(false);
    const [form] = Form.useForm();
    const [modal, contextHolder] = useModal();

    const onCreate = async () => {
        try {
            await form.validateFields();
            axios.post(`${import.meta.env.VITE_API_URL}seats`, form.getFieldsValue(true)).then(() => {
                form.resetFields()
                onChange()
                setOpen(false);
            })
        } catch (errorInfo) {
            console.log('❌ Validation Failed:', errorInfo);
        }
    };
    const onUpdate = () => {
        let { columns, ...rest } = form.getFieldsValue(true);
        axios.put(`${import.meta.env.VITE_API_URL}seats/${item.id}`, rest).then(() => {
            form.resetFields()
            setOpen(false);
            onChange()
        })
    };

    const onDelete = (item: any) => {
        axios.delete(`${import.meta.env.VITE_API_URL}seats/${item.id}`).then(() => {
            onChange()
        })
    }
    return (
        <>
        {contextHolder}
            <Button shape="circle" icon={<i className="fi fi-rr-plus"></i>} onClick={() => {form.resetFields();setOpen(true)}} />
        <div className="grid gap-[10px]" style={{ gridTemplateRows: `repeat(1,30px)`, gridTemplateColumns: `repeat(${20},30px)` }}>
            {columns.map((column: any, i: any) => (
                <div key={i} style={{ gridColumnStart: column.y }}>
                  <Popover content={<>

                             <Button shape="circle" size="small" icon={<i className="fi fi-rr-trash"></i>} onClick={() => modal.confirm({
                                title: 'Delete the task',
                                icon: <i className="fi fi-exclamation"></i>,
                                content: 'Are you sure to delete this?',
                                onOk() {
                                    onDelete(column)
                                }
                            })} />
                            <Button shape="circle" size="small" icon={<i className="fi fi-rr-pencil"></i>} onClick={() => { setOpen(true); setItem(column); setIsEdit(true); }} />
                    </>}>
                     <div className="size-[30px] text-xs flex items-center justify-center rounded border border-gray-300 bg-gray-300">{column.column}</div>
                  </Popover>
                </div>
            ))}
        </div>
         <Drawer
        title={isEdit ? 'Update Record' : 'Add Record'}
        onClose={() => { setOpen(false); setIsEdit(false); setItem({}) }}
        open={open} 
        afterOpenChange={() => {
          let { img, ...rest } = item;
          if (isEdit) {
            form.setFieldsValue(rest)
          } else {
            form.resetFields()
          }
        }}
        footer={<>{isEdit ? <Button type="primary" onClick={onUpdate}>Update</Button> : <Button type="primary" onClick={onCreate}>Create</Button>}</>}
      >
        <Form layout="vertical" form={form} requiredMark={false} >
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item label="Y" name="y" rules={[{required:true}]} >
                <Input />
              </Form.Item>
              </Col>
            <Col span={24}>
              <Form.Item label="Column" name="column" rules={[{required:true}]} >
                <Input />
              </Form.Item>
              </Col>
            <Col span={24}>
              <Form.Item label="Status" name="status" initialValue={1} rules={[{required:true}]} >
                <Input />
              </Form.Item>
              </Col>
            <Col span={24}>
              <Form.Item label="Row" name="rowId" initialValue={id} rules={[{required:true}]} >
                <Input />
              </Form.Item>
              </Col>
          </Row>
        </Form>
      </Drawer>
        </>
    )

}
function Rows({ rows,onChange,id }: any) {
     const [open, setOpen] = useState(false);
    const [item, setItem] = useState<any>({});
    const [isEdit, setIsEdit] = useState(false);
    const [form] = Form.useForm();
    const [modal, contextHolder] = useModal();

    const onCreate = async () => {
        try {
            await form.validateFields();
            axios.post(`${import.meta.env.VITE_API_URL}rows`, form.getFieldsValue(true)).then(() => {
                form.resetFields()
                onChange()
                setOpen(false);
            })
        } catch (errorInfo) {
            console.log('❌ Validation Failed:', errorInfo);
        }
    };
    const onUpdate = () => {
        let { columns, ...rest } = form.getFieldsValue(true);
        axios.put(`${import.meta.env.VITE_API_URL}rows/${item.id}`, rest).then(() => {
            form.resetFields()
            setOpen(false);
            onChange()
        })
    };

    const onDelete = (item: any) => {
        axios.delete(`${import.meta.env.VITE_API_URL}rows/${item.id}`).then(() => {
            onChange()
        })
    }
    return (
        <>
            {contextHolder}
         <div className="flex flex-col gap-[10px] border border-gray-300 border-dashed rounded-lg p-[5px]">
            <div className="flex justify-center"> <Button shape="circle" size="small" icon={<i className="fi fi-rr-plus"></i>} onClick={() => {form.resetFields();setOpen(true)}} /></div>
            {rows.map((row: any, i: any) => (
                <div className="flex" key={i}>
                    <Popover content={<></>}>
                    <div className="size-[30px] flex items-center justify-center rounded border bg-black text-white">{row.row}</div>
                    </Popover>
                    <Seat columns={row.columns} id={row.id} onChange={onChange} />
                     <Button shape="circle" size="small" icon={<i className="fi fi-rr-trash"></i>} onClick={() => modal.confirm({
                                title: 'Delete the task',
                                icon: <i className="fi fi-exclamation"></i>,
                                content: 'Are you sure to delete this?',
                                onOk() {
                                    onDelete(row)
                                }
                            })} />
                            <Button shape="circle" size="small" icon={<i className="fi fi-rr-pencil"></i>} onClick={() => { setOpen(true); setItem(row); setIsEdit(true); }} />
                </div>
            ))}
        </div>
         <Drawer
        title={isEdit ? 'Update Record' : 'Add Record'}
        onClose={() => { setOpen(false); setIsEdit(false); setItem({}) }}
        open={open} 
        afterOpenChange={() => {
          let { img, ...rest } = item;
          if (isEdit) {
            form.setFieldsValue(rest)
          } else {
            form.resetFields()
          }
        }}
        footer={<>{isEdit ? <Button type="primary" onClick={onUpdate}>Update</Button> : <Button type="primary" onClick={onCreate}>Create</Button>}</>}
      >
        <Form layout="vertical" form={form} requiredMark={false} >
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item label="X" name="x" rules={[{required:true}]} >
                <Input />
              </Form.Item>
              </Col>
            <Col span={24}>
              <Form.Item label="Row" name="row" rules={[{required:true}]} >
                <Input />
              </Form.Item>
              </Col>
            <Col span={24}>
              <Form.Item label="Area" name="areaId" initialValue={id} rules={[{required:true}]} >
                <Input />
              </Form.Item>
              </Col>
          </Row>
        </Form>
      </Drawer>
        </>
       
    )

}
function Area({ areas, onChange, id }: any) {
    const [open, setOpen] = useState(false);
    const [item, setItem] = useState<any>({});
    const [isEdit, setIsEdit] = useState(false);
    const [form] = Form.useForm();
    const [modal, contextHolder] = useModal();

    const onCreate = async () => {
        try {
            await form.validateFields();
            axios.post(`${import.meta.env.VITE_API_URL}areas`, form.getFieldsValue(true)).then(() => {
                form.resetFields()
                onChange()
                setOpen(false);
            })
        } catch (errorInfo) {
            console.log('❌ Validation Failed:', errorInfo);
        }
    };
    const onUpdate = () => {
        let { rows, ...rest } = form.getFieldsValue(true);
        axios.put(`${import.meta.env.VITE_API_URL}areas/${item.id}`, rest).then(() => {
            form.resetFields()
            setOpen(false);
            onChange()
        })
    };

    const onDelete = (item: any) => {
        axios.delete(`${import.meta.env.VITE_API_URL}areas/${item.id}`).then(() => {
            onChange()
        })
    }
    return (
        <>
            {contextHolder}
            <div className="inline-flex flex-col gap-[10px] p-[20px]">
                <div className="flex justify-center"> <Button shape="circle" size="small" icon={<i className="fi fi-rr-plus"></i>} onClick={() => {form.resetFields();setOpen(true)}} /></div>
                {areas.map((area: any, i: any) => (
                    <div key={i} className="border border-gray-300 border-dashed rounded-lg p-[5px]">
                        <div className="text-left font-bold text-lg border-b border-gray-200 pb-[5px] mb-[10px] flex gap-[5px]">
                            <div className="flex-auto">{area.name}</div>
                            <Button shape="circle" size="small" icon={<i className="fi fi-rr-trash"></i>} onClick={() => modal.confirm({
                                title: 'Delete the task',
                                icon: <i className="fi fi-exclamation"></i>,
                                content: 'Are you sure to delete this?',
                                onOk() {
                                    onDelete(area)
                                }
                            })} />
                            <Button shape="circle" size="small" icon={<i className="fi fi-rr-pencil"></i>} onClick={() => { setOpen(true); setItem(area); setIsEdit(true); }} />

                        </div>
                        <Rows rows={area.rows} id={area.id} onChange={onChange} />
                    </div>

                ))}
                <img src="/screen.svg" className="h-[50px] self-center mt-[50px]" />
            </div>
            <Drawer
                title={isEdit ? 'Update Record' : 'Add Record'}
                onClose={() => { setOpen(false); setIsEdit(false); setItem({}) }}
                open={open}
                afterOpenChange={() => {
                    if (isEdit) {
                        form.setFieldsValue(item)
                    } else {
                        form.resetFields()
                    }
                }}
                footer={<>{isEdit ? <Button type="primary" onClick={onUpdate}>Update</Button> : <Button type="primary" onClick={onCreate}>Create</Button>}</>}
            >
                <Form layout="vertical" form={form} requiredMark={false} >
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item label="Name" name="name" rules={[{ required: true }]} >
                                <Input />
                            </Form.Item>
                        </Col>

                        <Col span={24}>
                            <Form.Item label="Type" name="type" rules={[{ required: true }]} >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item label="Price" name="price" rules={[{ required: true }]} >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item label="Screen" name="screenId" initialValue={id} >
                                <Input />
                            </Form.Item>
                        </Col>

                    </Row>
                </Form>
            </Drawer>
        </>
    )

}

function SeatLayout2({ data, id, onChange }: any) {


    return data[0]?.areas && <Area areas={data[0]?.areas} id={id} onChange={onChange} />
}

export default SeatLayout2