import { Button, Popconfirm, Table } from "antd";
import React from "react";
export const Table2: React.FC = () => {
  const columns = [
    { title: "Fecha", dataIndex: "date", key: "date" },
    { title: "Día de la semana", dataIndex: "day", key: "day" },
    { title: "Lugar", dataIndex: "place", key: "place" },
    { title: "Hora", dataIndex: "time", key: "time" },
    {
      title: "No podré asistir",
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
  return (
    <div className="profile__table">
      <h1>Este mes:</h1>
      <Table
        columns={columns}
        expandedRowRender={record => <p style={{ margin: 0 }}>{record.time}</p>}
        dataSource={data}
      />
    </div>
  );
};

export default Table2;
