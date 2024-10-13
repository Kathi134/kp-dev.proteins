import {DISH_COMPONENT_DUMP} from "../../../model/Dish";
import {useCallback, useState} from "react";
import FoodTable from "./FoodTable";
import {SimpleCircleButton} from "../../shared/CircleButton";
import Choice from "../../shared/inputs/Choice";
import {BiSolidPear} from "react-icons/bi";
import {GiHotMeal} from "react-icons/gi";
import {useNavigate} from "react-router-dom";
import "../../shared/inputs/input.css";

export function Foods() {
    const [searchString, setSearchString] = useState("")
    const [data, setData] = useState(DISH_COMPONENT_DUMP)

    const options = ["Lebensmittel", "Gericht"] // use type of API answer
    const optionValues = ["grocery", "dish"]
    const optionIcons = [BiSolidPear, GiHotMeal]
    const [openDialog, setOpenDialog] = useState(false);

    const navigate = useNavigate();

    const getFilteredList = useCallback(() => {
        return data.filter(dc => dc.name.includes(searchString))
    }, [searchString, data]);

    const handleChoice = useCallback((choice) => {
        navigate(`create-${choice}`, {relative: "path"})
        setOpenDialog(false);
    }, [navigate, setOpenDialog]);


    return <>
        <div className='horizontal-container between'>
            <h1>FoodLibrary</h1>
            <SimpleCircleButton onClick={() => setOpenDialog(true)} icon="add"/>
        </div>

        <div className="bottom-margin vertical-container">
            <input type="text" name="search" placeholder="Suche..." value={searchString} onChange={(e) => setSearchString(e.target.value)}/>
        </div>

        <FoodTable data={getFilteredList()} setData={setData}/>

        <Choice isOpen={openDialog} options={options} optionIcons={optionIcons}
                onOptionClick={handleChoice} optionValues={optionValues}
                text={"Welche Art von Item möchtest du anlegen?"}/>
    </>;
}