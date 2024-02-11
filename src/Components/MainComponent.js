import React from 'react';
import '../Style.css';
import TableComponent from './TableComponent';
import FiterComponent from './FiterComponent';
import SearchComponent from './SearchComponent';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

function MainComponent() {
    
    const data = [        
        {transactionId: 'SN-1235555500', account: 'R', description: 'test Data', amount: '123 EUR', type: 'Add', status: 'Pending', additionalData: 'additionalData 1'},
        // {transactionId: 'SN-424824', account: 'R', description: 'New Test data', amount: '9998 EUR', type: 'Add', status: 'Pending', additionalData: 'additionalData 2'},
    ];

    return (
        <div className='MainComponent'>
            {/* <img src='../acordion.png' /> */}
            <h1 style={{paddingLeft:'40px'}}>Transactions</h1>
            <div className='topFileds'>
                <FiterComponent/>
                <SearchComponent />
                <div className='exportDiv'>
                    <p className='export'> <FileDownloadOutlinedIcon /><span>EXPORT CSV</span></p>        
                </div>
            </div>
            <TableComponent data = {data} />
        </div>
    );
}

export default MainComponent;