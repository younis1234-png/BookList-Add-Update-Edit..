import React from "react";

const TableField = ({ fieldName, settingsField, removeBook, editBook }) => {
  return (
    <div className="tableField">
      {fieldName}
      {settingsField && (
        <>
          <i onClick={editBook} className="fas fa-edit"></i>
          <i onClick={removeBook} className="fas fa-trash-alt"></i>
        </>
      )}
    </div>
  );
};

export default TableField;
