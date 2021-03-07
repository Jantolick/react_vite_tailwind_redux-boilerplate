import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import DataRect from './DataRect';
import anime from 'animejs';


const Layout_Main = props => {    
    const [dataCount, setDataCount] = useState(0);
    
    const buttonArray = [];

    for (let i = 0; i < dataCount; i++)
    {
        buttonArray.push(<DataRect key={`rect-${i + 1}`} id={`rect-${i + 1}`} name={`rect-${i + 1}`} timeToComplete={(i + 1) * 1000}/>)
    }


    return (
        <div className="p-5 m-0 h-screen bg-indigo-300 rounded-2xl">            
            <div className="grid grid-cols-10 grid-rows-6 h-full gap-2">
                <div className="row-span-1 col-span-10 bg-green-600 rounded-2xl space-x-3 px-5 py-2">
                    <button onClick={() => setDataCount(() => { return Math.min(dataCount + 1, 8) })} className="btn btn-primary">Add</button>
                    <button onClick={() => setDataCount(() => { return Math.max(dataCount - 1, 0) })} className="btn btn-primary">Remove</button>
                </div>
                <div className="grid col-start-2 col-span-9 row-span-4 grid-cols-3 grid-rows-3 grid-flow-row bg-red-200 gap-y-2 gap-x-1 rounded-lg p-2">
                    {buttonArray}
                    {/* <DataRect id="rect-1" name="Main Test" />
                    <DataRect id="rect-2" />
                    <DataRect id="rect-3" />
                    <DataRect id="rect-4" />
                    <DataRect id="rect-5" />
                    <DataRect id="rect-6" />
                    <DataRect id="rect-7" />
                    <DataRect id="rect-8" />
                    <DataRect id="rect-9" /> */}
                </div>
                <div className="col-start-1 row-start-2 row-span-4 col-span-1 bg-green-800 rounded-2xl"></div>
                <div className="col-start-1 row-start-6 row-span-6 col-span-10 bg-indigo-700 rounded-2xl justify-center content-center flex place-items-center flex-col">


                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    //counterReducer: state.counterReducer
});

const mapDispatchToProps = dispatch => ({
    //count_change: amount => dispatch(count_change(amount))
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout_Main);