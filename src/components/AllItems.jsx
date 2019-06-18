import React from "react";
import Item from "../components/Item";

const AllItems = ({ repository, addItem}) => {
  return (
    <ul>
      {repository.map(item => {
        return (<Item key={item.id} item={item} onAddClick={addItem} />)
      })}
    </ul>
  );
};

export default AllItems;
