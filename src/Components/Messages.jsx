import React from "react";

function Messages ({data1}) {

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Messages {data1.message1}, {data1.message2}, {data1.message3}</h5>
                </div>
            </div>
    );
}
export default Messages;