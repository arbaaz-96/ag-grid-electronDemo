//import React, { Component } from 'react' 
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

/*export class Aggriddemo extends Component {  
    constructor(props) {  
        super(props);  
        this.state = {  
            columnDefs: [  
                { headerName: "Id", field: "Id", sortable: true, filter: true },  
                { headerName: "Name", field: "Name", sortable: true, filter: true },  
                { headerName: "Age", field: "Age", sortable: true, filter: true },  
                { headerName: "Address", field: "Address", sortable: true, filter: true },  
                { headerName: "City", field: "City", sortable: true, filter: true },  
                { headerName: "Salary", field: "Salary", sortable: true, filter: true },  
                { headerName: "Department", field: "Department", sortable: true, filter: true }  
                  
  
  
            ],  
            rowData: [  
                {  
                    Id: "1",  
                    Name: "Sanwar",  
                    Age: "25",  
                    Address: "Jaipur",  
                    City: "Jaipur",  
                    Salary: "500000",  
                    Department: "IT",  
                     
                },  
                {  
                    Id: "2",  
                    Name: "Nisha",  
                    Age: "25",  
                    Address: "C-Scheme",  
                    City: "Jaipur",  
                    Salary: "500000",  
                    Department: "IT",  
                },  
                {  
                    Id: "3",  
                    Name: "David",  
                    Age: "25",  
                    Address: "C-Scheme",  
                    City: "Jaipur",  
                    Salary: "500000",  
                    Department: "IT",  
                },  
                {  
                    Id: "4",  
                    Name: "Sam",  
                    Age: "25",  
                    Address: "C-Scheme",  
                    City: "Jaipur",  
                    Salary: "500000",  
                    Department: "IT",  
                },  
                {  
                    Id: "5",  
                    Name: "Jyotsna",  
                    Age: "25",  
                    Address: "C-Scheme",  
                    City: "Mumbai",  
                    Salary: "500000",  
                    Department: "IT",  
                },  
                {  
                    Id: "6",  
                    Name: "Sid",  
                    Age: "25",  
                    Address: "C-Scheme",  
                    City: "Bangalore",  
                    Salary: "500000",  
                    Department: "IT",  
                },  
                {  
                    Id: "7",  
                    Name: "Chavi",  
                    Age: "25",  
                    Address: "C-Scheme",  
                    City: "Noida",  
                    Salary: "500000",  
                    Department: "IT",  
                },  
                {  
                    Id: "8",  
                    Name: "Nisha",  
                    Age: "25",  
                    Address: "C-Scheme",  
                    City: "Delhi",  
                    Salary: "500000",  
                    Department: "IT",  
                }  
            ]  
        }  
    }  
  
    onGridReady(params) {
        this.api = params.api;
    }

    render() {  
        return (  
            <>  
                <div className="row" style={{marginTop:"10px"}}>    
                    <div className="col-sm-12 btn btn-info">    
                        Add ag-Grid to ReactJS App  
                    </div>    
                </div>   
                <div className="row">  
                    <div className="col-md-12">                        
                        <div className="ag-theme-alpine" style={{ height: "550px" }}>  
                            <AgGridReact
                                columnDefs={this.state.columnDefs}  
                                rowData={this.state.rowData}
                                onGridReady={this.onGridReady.bind(this)}
                            />                         
                        </div>                         
                    </div>  
                </div>  
            </>  
  
        );  
    }  
}

export default Aggriddemo */ 