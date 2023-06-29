import { useEffect, useState } from "react";
import { getDataFromField } from "../firebase";

//TODO needs to display name, age, sex, race, job, orientation, relation, children, alignment

function MainDetails(props) {
    const [firstName, setFirstName] = useState("random");
    
    useEffect(() => {
        console.log("useEffect called");
        getDataFromField("namesDoc", "humanNames").then((data) => {
            let randomIndex = Math.floor(Math.random() * data.length);
            let randomName = data[randomIndex];
            if (randomName === undefined) {
				setFirstName("random");
			}
			else {
				setFirstName(randomName);
			}
        });
    }, []);

    console.log("MainDetails rendered", firstName);

    return (
        <div>
            <h2>{firstName}</h2>
        </div>
    );
}

export default MainDetails;