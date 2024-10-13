import {Link} from "react-router-dom";
import {useCallback, useState} from "react";

export default function FoodTable({data, setData}) {
    const [toggleAlphabet, setToggleAlphabet] = useState(1);
    const [toggleProteins, setToggleProteins] = useState(1);

    const onNameHeaderClick = useCallback(() => {
        setData(data.sort((a, b) => toggleAlphabet * a.name.localeCompare(b.name)));
        setToggleAlphabet(-toggleAlphabet)
    }, [data, setData, toggleAlphabet, setToggleAlphabet])

    const onProteinHeaderClick = useCallback(() => {
        setData(data.sort((a, b) => toggleProteins * a.name.localeCompare(b.name)));
        setToggleProteins(-toggleProteins)
    }, [data, setData, toggleProteins, setToggleProteins])

    return (
        <table>
            <thead>
            <tr>
                <th onClick={onNameHeaderClick}>Name</th>
                <th onClick={onProteinHeaderClick}>Gains<br/>/100g</th>
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