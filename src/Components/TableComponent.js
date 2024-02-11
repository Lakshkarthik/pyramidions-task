import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TimeLineComponent from './TimeLineComponent';

function TableComponent(props) {

    const [expandedRow, setExpandedRow] = useState(null);

    const toggleAccordion = (index) => {
        if (expandedRow === index) {
            setExpandedRow(null);
        } else {
            setExpandedRow(index);
        }
    };
    return (
        <div className='TableComponent'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>TRANSACTION ID</th>
                        <th>ACCOUNT</th>
                        <th>DESCRIPTION</th>
                        <th>AMOUNT</th>
                        <th>TYPE</th>
                        <th>STATUS</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((row, index) => (
                        <React.Fragment key={index}>
                            <tr onClick={() => toggleAccordion(index)}>
                                <td>{row.transactionId}</td>
                                <td>
                                    <div className='account'>
                                        <span className='account-val'>{row.account}</span>
                                    </div>
                                </td>
                                <td className='description'>
                                    <img className='description-img' src='../../alert.png' />
                                    <span className='description-span'>{row.description}</span>
                                </td>
                                <td className='amount'>{row.amount}</td>
                                <td>{row.type}</td>
                                <td>
                                    <span className='status'>{row.status}</span>
                                    {
                                        expandedRow === index ?
                                            <KeyboardArrowUpIcon className='arrow-icon' />
                                            : <KeyboardArrowDownIcon className='arrow-icon' />
                                    }
                                </td>
                            </tr>
                            {expandedRow === index && (
                                <>
                                    <br />
                                    <tr>
                                        <td colSpan="6" className='expand-content'>
                                            <div className='acordion-content'>
                                                <div className='table-content'>
                                                    <div className='header-div'>
                                                        <div className='h-cont div-1'>
                                                            <p className='head'>Type of transaction</p>
                                                            <p>Add</p>
                                                        </div>
                                                        <div className='h-cont div-2'>
                                                            <p className='head'>Payment method</p>
                                                            <p>SWIFT Bank transfer</p>
                                                        </div>
                                                        <div className='h-cont div-3'>
                                                            <p className='head'>Bank account details</p>
                                                            <p className='link'>Show</p>
                                                        </div>
                                                    </div>
                                                    <div className='header-div second-row'>
                                                        <div className='h-cont div-1'>
                                                            <p className='head'>Add amount</p>
                                                            <p>100.00 EUR</p>
                                                        </div>
                                                        <div className='h-cont div-2'>
                                                            <p className='head'>Transaction fee</p>
                                                            <p>13.88 EUR</p>
                                                        </div>
                                                        <div className='h-cont div-3'>
                                                            <p className='head'>You'll Transafer</p>
                                                            <p>113.88</p>
                                                        </div>

                                                    </div>

                                                </div>
                                                <TimeLineComponent />
                                            </div>
                                            <div className='addMoneyDiv' style={{float:'right'}}>
                                                <p className='add-money'> <span>ADD MONEY AGAIN</span></p>
                                            </div>
                                        </td>
                                    </tr>
                                </>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableComponent