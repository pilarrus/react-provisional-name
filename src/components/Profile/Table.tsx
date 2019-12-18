import { Button, Popconfirm, Table } from "antd";
import React from "react";
export const Table2: React.FC = () => {
  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Address", dataIndex: "address", key: "address" },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: () => (
        <Popconfirm
          title="¿Darte de baja de la aventura?"
          onConfirm={confirm}
          onCancel={cancel}
          okText="Sí"
          cancelText="No"
        >
          <Button>Darme de baja</Button>
        </Popconfirm>
      )
    }
  ];

  function confirm() {
    console.log("confirmado");
  }

  function cancel(e: any) {
    console.log(e);
  }

  const data = [
    {
      key: 1,
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      description:
        "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park."
    },
    {
      key: 2,
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      description:
        "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park."
    },
    {
      key: 3,
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      description:
        "My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park."
    }
  ];
  return (
    <div>
      <h1>Este mes:</h1>
      <Table
        className="profile-table"
        columns={columns}
        expandedRowRender={record => (
          <p style={{ margin: 0 }}>{record.description}</p>
        )}
        dataSource={data}
      />
    </div>
  );
};

export default Table2;
/*

  <table>
        <tr>
          <th>Fecha</th>
          <th>Día de la semana</th>
          <th>Aventura</th>
          <th>Lugar</th>
          <th>Hora</th>
        </tr>
        <tr>
          <td>13</td>
          <td>Viernes</td>
          <td>Escalada</td>
          <td>Guadarrama</td>
          <td>10:00</td>
        </tr>
        <tr>
          <td>Día 13</td>
          <td>Viernes</td>
          <td>Escalada</td>
          <td>Guadarrama</td>
          <td>10:00</td>
        </tr>
        <tr>
          <td>Día 13</td>
          <td>Viernes</td>
          <td>Escalada</td>
          <td>Guadarrama</td>
          <td>10:00</td>
        </tr>
      </table>


      */
