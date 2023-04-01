# Date: 18-March-2023

1. Complete the ProductFormCompoentn as 
    - Create a DataGridComponent using HTML Table with following specifications
        -  It should accept 'dataSource' props from its parent
            - the dataSource must be an JSON Object array
                - e.g.
                    - [{ProductId:101, ProductName="Laptop"}]
            - based on dataSource props, the HTML table headers and rows must be created 
                - Table Headers will be 'ProductId' and 'ProductName'
                - Table rows will be generated shows values for 'ProductId' and 'ProductName'
        - It should accept 'canDelete' property from parent that can be either 'true' or 'false', the default will be false
            - If this value is 'true', then each table row must show 'Delete' button
            - When this button is clicked the record must be deleted from 'dataSource' and hence the table row must be deleted
        - On clicking of the table row, the selected row data must be passed to the parent             
    - The ProductFormCompoenent will add new record in products array on click on Save button
    -  The ProductFormCompoenent will clear all input elements  on click on Clear button   

 # Date: 01-April-2023

 1. Complete the ProductFormComponent for CRUD Operations using Service
 2. Create a SearchComponent that will have a Text Input Element with followig behavior
    - Let the end-user enter the search text in it e.g. ProductName, Manufacturer, Description, etc and based on this search value(s), the DataGridComponent will show match products (refer amazon search) 