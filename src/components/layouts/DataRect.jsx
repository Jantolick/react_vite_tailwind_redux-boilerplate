import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import anime from 'animejs';
import { removeComponent, addComponent } from '../../js/gameLogic';
import 'balloon-css';


const DataRect = props => {
    const selfRef = useRef(null);
    const healthRef = useRef(null);
    const currentAmountRef = useRef(null);
    const [toggleState, setToggleState] = useState(false);

    const impactBar = e => {
        if (healthRef?.current) {
            // let oldStat = parseFloat(healthRef.current.style.transform.match(/\((.*)\)/)[1]);
            // let newStat = oldStat + .01;            
            healthRef.current.style.transform = `scaleX(${e.detail.currentProgress})`;
        }

        if (currentAmountRef?.current) {
            if (e.detail.currentProgress < 0) console.log("It was", e.detail.currentProgress);
            currentAmountRef.current.textContent = `${(e.detail.currentProgress * 100).toFixed(0)}%`;
        }

        if (e.detail.effects) {
            if (e.detail.effects.indexOf('flash') > -1 && !document.hidden) {
                anime({
                    targets: `.${props.id}-main`,
                    backgroundColor: ['rgb(255, 255, 255)', 'rgb(255, 0, 0)', 'rgb(255, 255, 255)'],
                    duration: 500,
                    direction: 'reverse',
                    easing: 'linear',
                })
            }
        }
    }


    useEffect(() => {
        anime({
            targets: selfRef.current,
            opacity: [0, 1],
            duration: 500,
            easing: 'linear'
        })

        document.addEventListener(`${props.id}`, impactBar);
        addComponent(props.id, props.name, props.timeToComplete)
        console.log(`${props.id} has subscribed.`)
        return () => {
            document.removeEventListener(`${props.id}`, impactBar);
            removeComponent(props.id);
            console.log(`${props.id} has unsubscribed.`);
        };
    }, []);

    return (
        <div aria-label={`This is the tooltip for ${props.id}`} data-balloon-pos="up" className={`bg-blue-600 text-center m-2 rounded-lg text-gray-200 text-3xl border-4 border-gray-700 ${props.id}-main`}
            style={{
                opacity: 0
            }}
            ref={selfRef}>

            <div style={{ position: "relative", width: "100%", height: "10px" }} className="align-center">
                <div className="bg-purple-50 align-center rounded-2xl barBackground"
                    style={{
                        position: "absolute",
                        transformOrigin: "0px",
                        width: "100%",
                        height: "100%"
                    }}
                ></div>
                <div className="bg-purple-500 align-center rounded-2xl barForeground" id={props.id}
                    ref={healthRef}
                    style={{
                        position: "absolute",
                        transformOrigin: "0px",
                        transform: "scaleX(0)",
                        width: "100%",
                        height: "100%"
                    }}
                ></div>
            </div>

            <div>{props.name ? props.name : `${props.id}`}</div>
            <div ref={currentAmountRef}></div>


            <div className="">
                <button
                    className="btn btn-primary m-5"
                    onClick={() => {
                        anime({
                            targets: `#testbar-${props.id}`,
                            scaleX: ['0', '.8'],
                            backgroundColor: ['#fff', '#f00'],
                            duration: 1000,
                            easing: 'easeInOutExpo'
                        })
                    }}
                >{'Default'}</button>

                <button
                    className="btn btn-primary m-5"
                    onClick={() => {
                        //setToggleState(!toggleState);
                        impactBar();
                        console.log('Togglestate is', toggleState);
                    }}
                >Toggle</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(DataRect);