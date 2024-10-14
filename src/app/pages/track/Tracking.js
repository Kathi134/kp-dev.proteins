import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import {DAY_DUMP} from "../../../model/Day";
import React, {useEffect, useState} from "react";
import {useUser} from "../../../context/UserContext";
import {IoScale} from "react-icons/io5";
import {BiSolidPear} from "react-icons/bi";
import {TbDna} from "react-icons/tb";
import {Link} from "react-router-dom";
import TrackingProgress from "./TrackingProgress";


export default function Home() {
    const day = DAY_DUMP[0];
    const {user} = useUser();
    const [percentage, setPercentage] = useState();

    useEffect(() => {
        setPercentage(calcPercentage())
    }, []);

    const calcPercentage = () => (day.getProteins() / user.proteinGoal * 100).toFixed(2)


    console.log(day.date)

    return (<>
        <div className="horizontal-container"><h1>
            {day.date.toLocaleDateString("de", {weekday: 'long'})}, {day.date.toLocaleDateString("de")}
        </h1></div>
        <TrackingProgress percentage={percentage} />
        <div className="vertical-container top-margin">
            <table>
                <thead>
                <tr>
                    <th><IoScale color="var(--secondary-highlight)"/></th>
                    <th><BiSolidPear color="var(--secondary-highlight)"/></th>
                    <th><TbDna color="var(--secondary-highlight)"/></th>
                </tr>
                </thead>
                <tbody>
                {day.trackedFood.map(x =>
                    <tr>
                        <td>{x.portion.amount}g</td>
                        <td>
                            <div className="horizontal-container between">
                                <Link className="flex-item-extend" to={`./foods/${x.food.id}`}>{x.food.name}</Link>
                            </div>
                        </td>
                        <td>{x.getProteins().toFixed(2)}g</td>
                    </tr>
                )}
                <tr><td></td><td></td><td className="primary">{day.getProteins().toFixed(2)}g</td></tr>
                </tbody>
            </table>
        </div>
    </>);
}