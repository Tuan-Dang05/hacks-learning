import React from 'react';
import '../Login/login.scss';
const Forgot = () => {
    return (
        <div>
            <main>
                <form className="form" style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}>
                    <div className="flex-column">
                        <label>Email </label>
                    </div>
                    <div className="inputForm">
                        <i className="fa-solid fa-at" />
                        <input type="text" className="input" placeholder="Enter your Email" />
                    </div>
                    <button className="button-submit">Submit</button>
                </form>
            </main>

        </div>
    );
}

export default Forgot;
