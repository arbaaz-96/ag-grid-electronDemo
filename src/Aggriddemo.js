import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';  
import 'ag-grid-community/dist/styles/ag-grid.css';  
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';  

const Aggridemo = () => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

    const [colDef, setColDef] = useState([
        { headerName: "Id", field: "Id", sortable: true, filter: true },  
        { headerName: "Name", field: "Name", sortable: true, filter: true },  
        { headerName: "Age", field: "Age", sortable: true, filter: true },  
        { headerName: "Address", field: "Address", sortable: true, filter: true },  
        { headerName: "City", field: "City", sortable: true, filter: true },  
        { headerName: "Salary", field: "Salary", sortable: true, filter: true },  
        { headerName: "Department", field: "Department", sortable: true, filter: true }
    ]);

    const [rowData, setRowData] = useState([
        {Id: "1", Name: "Arbaaz", Age: "24", Address: "Powai", City: "Mumbai", Salary: "5000", Department: "IT"},
        {Id: "2", Name: "Shahbaaz", Age: "25", Address: "Powai", City: "Mumbai", Salary: "6000", Department: "Accounts"},
        {Id: "3", Name: "Aftaab", Age: "21", Address: "Powai", City: "Mumbai", Salary: "8000", Department: "HR"},
        {Id: "4", Name: "Kasim", Age: "24", Address: "Powai", City: "Mumbai", Salary: "5500", Department: "IT"},
        {Id: "5", Name: "Rafakat", Age: "23", Address: "Powai", City: "Mumbai", Salary: "3000", Department: "Accounts"},
        {Id: "6", Name: "Khalid", Age: "23", Address: "Powai", City: "Mumbai", Salary: "7000", Department: "IT"}
    ]);

    const onGridReady = params => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
    }

    return (
        <div className="ag-theme-alpine" style={{ height: 350, width: 800 }}>
            <AgGridReact
                onGridReady={onGridReady}
                rowData={rowData}
                columnDefs={colDef}
            />
        </div>
    );
};

export default Aggridemo;
