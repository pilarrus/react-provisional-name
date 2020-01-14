import * as firebase from "firebase";
import React, { useEffect, useState } from "react";
import firebaseConfig from "../../enviroments/enviroment";
import { Users } from "../../types";

firebase.initializeApp(firebaseConfig);
const Fire: React.FC = () => {
  const [fireData, setFireData] = useState([] as Users[]);

  useEffect(() => {
    const data = firebase
      .database()
      .ref()
      .child("users");

    data.on("value", snapshot => {
      setFireData(snapshot.val());
    });
  }, []);

  if (fireData) {
    fireData.flat().map(e => console.log(e));
    fireData.map(e => console.log(e));
    return (
      <div>
        <p>hola</p>
      </div>
    );
  } else {
    return null;
  }
};

export default Fire;
