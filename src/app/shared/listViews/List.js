import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { useState, useCallback } from "react";
import Dialog from "../inputs/Dialog";

export default function List({data, columns, deletable, onDeleteConfirm}) {
    const [itemToDelete, setItemToDelete] = useState({})
    const [openDialog, setOpenDialog] = useState(false);
    
    const handleDeleteClick = useCallback((item) => {
        setItemToDelete(item);
        setOpenDialog(true);
    }, []);

    const handleDialogConfirm = useCallback(() => {
        onDeleteConfirm(itemToDelete);
        setItemToDelete({});
        setOpenDialog(false);
    }, [itemToDelete, onDeleteConfirm]);

    const handleDialogCancel = useCallback(() => {
        setItemToDelete({});
        setOpenDialog(false);
    }, []);

    return (<>
        <table role="list"><tbody>
            {data.map(d => 
                <tr key={d.id}>
                    {columns.map(c => 
                        <td key={`${d.id}-${c}`}><div className="horizontal-container between">
                            <Link to={`./${d.id}`} className="flex-item-extend">
                               {d[c]}
                            </Link>
                            {!deletable ? '' : <span className="icon-box" onClick={() => handleDeleteClick(d)}><RxCross2/></span>}
                        </div></td>
                    )}
                </tr>
            )}
        </tbody></table>
        
        <Dialog isOpen={openDialog} onCancel={handleDialogCancel} onConfirm={handleDialogConfirm} text={`${itemToDelete?.name} wirklich löschen?`}/>
    </>);
}
