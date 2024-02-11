import React from 'react';
import '../Style.css';
import '../TimeLine.css';

function TimeLineComponent() {
    return (
        <div className='TimeLineComponent'>
            <p className='header-content'>Top-up Timeline</p>
            <div className='wrapper'>
                <div className='steps' id='steps'>
                    <div className='step'>
                        <div className='number completed'>
                            <svg viewBox="0 0 512 512" width="100" title="check" className='tick-svg'>
                                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
                            </svg>
                        </div>
                        <div className='info'>
                            <p className='title'>
                                You issued the transfer
                            </p>
                            <p className='text'>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                    <div className='step pending'>
                        <div className='number completed'>
                            <svg viewBox="0 0 512 512" width="100" title="check" className='tick-svg'>
                                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
                            </svg>
                        </div>
                        <div className='info'>
                            <p className='title'>
                                Your money is on it's way to us
                            </p>
                            <p className='text'>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>

                    <div className='step pending'>
                        <div className='number'></div>
                        <div className='info'>
                            <p className='title'>We received your EUR</p>
                        </div>
                    </div>
                    <div className='step pending'>
                        <div className='number'></div>
                        <div className='info'>
                            <p className='title'>Your money has been added to your EUR balance</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimeLineComponent