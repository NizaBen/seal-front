import React, { useState, useEffect } from "react";
import getDocs from "../../services/getDocs";
import DocItem from "./doc-item/DocItem";
import "./DocsList.css";

async function _getData(setData) {
  try {
    const response = await getDocs();
    setData(response?.data);
  } catch (error) {
    console.log(error);
  }
}

const DocsList = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (!data) {
      (async () => {
        await _getData(setData);
      })();
    }
    return () => {};
  }, []);

  return (
    <div className="DocsList row">
      {data?.map((item, index) => {
        return (
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12" key={index}>
            <DocItem docItem={item} />
          </div>
        );
      })}
    </div>
  );
};

export default DocsList;
