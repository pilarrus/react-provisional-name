import { Table } from "antd";
import React from "react";
export const Table2: React.FC = () => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street"
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street"
    }
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age"
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address"
    }
  ];
  return (
    <div>
      <h1>Este mes:</h1>
      <Table dataSource={dataSource} columns={columns} />;
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
