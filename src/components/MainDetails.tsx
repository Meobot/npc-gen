import { useEffect, useState } from "react";
import { getDataFromField } from "../firebase";


function MainDetails(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    useEffect(() => {
        const firstNamesField = props.sex === "male" ? "maleNames" : "femaleNames";
        getDataFromField("namesDoc", firstNamesField).then((data) => {
            let randomIndex = Math.floor(Math.random() * data.length);
            let randomName = data[randomIndex];
            if (randomName === undefined) {
                setFirstName("random");
            } else {
                setFirstName(randomName);
            }
        });
    }, [props.sex]);

    useEffect(() => {
        if (props.species) {
            const lastNamesField = `${props.species}Names`;
            getDataFromField("namesDoc", lastNamesField).then((data) => {
                let randomIndex = Math.floor(Math.random() * data.length);
                let randomName = data[randomIndex];
                if (randomName === undefined) {
                    setLastName("");
                } else {
                    setLastName(randomName);
                }
            });
        }
    }, [props.species]);

    return (
        <div>
            <h2>{firstName} {lastName}</h2>
        </div>
    );
}

export default MainDetails;