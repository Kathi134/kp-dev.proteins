import {Link} from "react-router-dom";
import {useCallback, useState} from "react";
import {BiSolidPear} from "react-icons/bi";
import {TbDna} from "react-icons/tb";

export default function FoodTable({data, setData}) {
    const [toggleAlphabet, setToggleAlphabet] = useState(1);
    const [toggleProteins, setToggleProteins] = useState(1);

    const onNameHeaderClick = useCallback(() => {
        setData(data.sort((a, b) => toggleAlphabet * a.name.localeCompare(b.name)));
        setToggleAlphabet(-toggleAlphabet)
    }, [data, setData, toggleAlphabet, setToggleAlphabet])

    const onProteinHeaderClick = useCallback(() => {
        setData(data.sort((a, b) => toggleProteins * (a.proteinsPer100g - b.proteinsPer100g))); // TODO: fix me
        setToggleProteins(-toggleProteins)
    }, [data, setData, toggleProteins, setToggleProteins])

    return (
        <table>
            <thead>
            <tr>
                <th onClick={onNameHeaderClick} className="secondary"><BiSolidPear /></th>
                <th onClick={onProteinHeaderClick} className="secondary third"><TbDna />/100g</th>
            </tr>
            </thead>
            <tbody>
            {data.map(dc =>
                <tr key={dc.id}>
                    <td>
                        <div className="horizontal-container between">
                            <Link to={`/foods/${dc.id}`} className="flex-item-extend">{dc.name}</Link>
                        </div>
                    </td>
                    <td>
                        <div className="horizontal-container between">
                            <Link to={`/foods/${dc.id}`} className="flex-item-extend">{dc.getProteinsPer100g()}g</Link>
                        </div>
                    </td>
                </tr>
            )}
            </tbody>
        </table>
    );
}