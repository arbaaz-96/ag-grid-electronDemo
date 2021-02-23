const Application = require("spectron").Application;
const electronPath = require("electron");
const path = require("path");
//const agGrid=require('ag-grid-react').AgGridReact;

jest.setTimeout(50000);
let app;
//let ag_grid_utils = require("ag-grid-testing");

describe('Ag Grid E2E testing with spectron', function () {
    
    app = new Application({
        path:electronPath,
        args:[path.join(__dirname,'../')]
    });

    //Start the electron app before all tests
    beforeAll(async() => {
        app=await app.start()
        return app;
    });

    //Stop the electron app after completion of all tests
    afterAll(() =>{
        if(app && app.isRunning())
            return app.stop();
    });

    //let agGridComp;

    it('display the electron app window', async () => {
        const count = await app.client.getWindowCount();       
        expect(count).toBe(1);
    });

    it('displays the correct title', async () => {
        const title = await app.client.getTitle();
        expect(title).toBe('Ag Grid Demo');
    });

    /*it('ag grid component returns a valid api instance',async () => {
        const agGridComp = await app.client.react$('AgGridReact');
        expect(agGridComp.gridApi).toBeTruthy();
    });*/

    /*it('should have expected column headers',async () => {
        var headers=await app.client.$$(".ag-header-cell-text");
        var harr=[];
        var htext;
        
       for(let i=0;i<headers.length;i++)
        {
            htext=await headers[i].getText();
            harr.push(htext);
        }
        expect(harr).toEqual(['Id','Name','Age','Address','City','Salary','Department']);
    });*/
});