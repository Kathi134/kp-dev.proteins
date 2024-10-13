import EditAddTemplate from "../../shared/editAddViews/EditAddTemplate";
import {useCallback, useState} from "react";

export function GroceryEditAdd({add, edit, targetItem, clearEdit}) {
    const [name, setName] = useState(targetItem?.name ?? '')
    const [barcode, setBarcode] = useState(targetItem?.barcode ?? '')
    const [proteins, setProteins] = useState(targetItem?.proteinsPer100g ?? '')
    const [calories, setCalories] = useState(targetItem?.caloriesPer100g ?? '')
    const [portionSize, setPortionSize] = useState(targetItem?.portionSize ?? '')

    const saveNew = useCallback(() => {
        console.log("send post to api")
        // TODO navigate to overview or detail view
    }, []);

    const saveEdit = useCallback(() => {
        console.log("send patch to api")
        clearEdit();
    }, [clearEdit]);

    return <>
        <EditAddTemplate
            title={add ? "Neues Lebensmittel" : edit ? "Lebensmittel bearbeiten" : ''}
            onSave={add ? saveNew : edit ? saveEdit : () => {}}
            parent={add ? '..' : undefined}
            onBack={edit ? clearEdit : undefined}
        >
            <div className="vertical-container">
                <input type="text" name="name" required value={name} onChange={(e) => setName(e.target.value)}/>
                <label htmlFor="name">Name</label>

                <input type="text" name="barcode" value={barcode} onChange={(e) => setBarcode(e.target.value)}/>
                <label htmlFor="barcode">Barcode</label>

                <input type="number" name="proteins" required value={proteins}
                       onChange={(e) => setProteins(e.target.value)}/>
                <label htmlFor="proteins">Protein-Gehalt auf 100g</label>

                <input type="number" name="calories" required value={calories}
                       onChange={(e) => setCalories(e.target.value)}/>
                <label htmlFor="calories">Kcal-Gehalt auf 100g</label>

                <input type="number" name="portionSize" required value={portionSize}
                       onChange={(e) => setPortionSize(e.target.value)}/>
                <label htmlFor="portionSize">Gewicht einer Standardportion</label>
                 {/*TODO: multiple named portion sizes */}
            </div>
        </EditAddTemplate>
    </>
}
