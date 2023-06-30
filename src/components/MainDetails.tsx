import { useEffect, useState } from "react";

function MainDetails(props) {


    return (
        <div>
            <h2>{props.firstName} {props.lastName}</h2>
        </div>
    );
}

export default MainDetails;