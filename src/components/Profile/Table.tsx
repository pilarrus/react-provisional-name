import { Button, Popconfirm } from "antd";
import "antd/dist/antd.css";
import React from "react";

export const Table: React.FC = () => {
  const columns = [
    { title: "Fecha", dataIndex: "date", key: "date" },
    { title: "Día de la semana", dataIndex: "day", key: "day" },
    { title: "Lugar", dataIndex: "place", key: "place" },
    { title: "Hora", dataIndex: "time", key: "time" },
    {
      title: "No podré asistir",
      dataIndex: "",
      key: "",
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

  function confirm(e: any) {
    console.log(e.value);
    console.log("confirmado");
  }

  function cancel(e: any) {
    console.log(e);
  }

  /*const data = [
    {
      key: 1,
      date: "13-12-2019",
      day: "Viernes",
      place: "Guadarrama",
      time: "10:00"
    },
    {
      key: 2,
      date: "13-12-2019",
      day: "Viernes",
      place: "Guadarrama",
      time: "10:00"
    },
    {
      key: 3,
      date: "13-12-2019",
      day: "Viernes",
      place: "Guadarrama",
      time: "10:00"
    }
  ];

  */
  return (
    <div className="profile__table">
      <h1>Este mes:</h1>
      <div className="profile__table-box">
        <table className="greenTable">
          <thead>
            <tr>
              {columns.map(th => (
                <th>{th.title}</th>
              ))}
            </tr>
          </thead>
          <tfoot>
            <tr>
              <td colSpan={4}>
                <div className="links">
                  <a href="#">&laquo;</a>{" "}
                  <a className="active" href="#">
                    1
                  </a>{" "}
                  <a href="#">2</a> <a href="#">3</a> <a href="#">4</a>{" "}
                  <a href="#">&raquo;</a>
                </div>
              </td>
            </tr>
          </tfoot>
          <tbody>
            <tr>
              <td>cell1_1</td>
              <td>cell2_1</td>
              <td>cell3_1</td>
              <td>cell4_1</td>
            </tr>
            <tr>
              <td>cell1_2</td>
              <td>cell2_2</td>
              <td>cell3_2</td>
              <td>cell4_2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
