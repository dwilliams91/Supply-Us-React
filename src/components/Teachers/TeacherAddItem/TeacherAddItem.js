import React, { useContext, useEffect, useState, useRef } from "react"
import { SupplyItemContext } from "../../DataProviders/SupplyItemProvider"
import { SupplyTypeContext } from "../../DataProviders/SupplyTypeProvider"
import "./TeacherAddItem.css"
import { Button } from "react-bootstrap"

export const TeacherAddItem = (props) => {
    // set up all the things I will need
    const { SupplyItems, getSupplyItems, addSupplyItem, updateItem } = useContext(SupplyItemContext)
    const { SupplyTypes, getSupplyTypes, addSupplyType } = useContext(SupplyTypeContext)
    const [Type, setType] = useState(0)
    const [newItemName, setNewItemName] = useState("")
    const [Package, setPackage] = useState(false)
    const [editItem, setEditItem] = useState(0)
    const Packaging = useRef(null)
    const [editMode, setEditMode] = useState(false)
    const [newType, setNewType] = useState("")

    // initial render
    useEffect(() => {
        getSupplyItems()
        getSupplyTypes()
    }, [])


    // if any field changes, change the variable so the state will always be ready
    const TypeChangeField = (event) => {
        setType(event.target.value)
    }
    const newItemNameChangeField = (event) => {
        setNewItemName(event.target.value)
    }

    const PackageChangeField = (event) => {
        console.log(event.target.checked)
        if (event.target.checked === true) {
            setPackage(true)
        } else {
            setPackage(false)
        }
    }
    const addingNewTypeChangeField = (event) => {
        setNewType(event.target.value)
    }

    //    save an item
    const SaveItem = () => {
        // if its in edit mode, change the item, if not, create a new one
        if (editMode) {
            const updatedItem = {
                id: editItem,
                typeId: parseInt(Type),
                name: newItemName,
                packaging: Package
            }
            updateItem(updatedItem).then(props.history.push("/teachers"))
        } else {
            const newItem = {
                typeId: parseInt(Type),
                name: newItemName,
                packaging: Package
            }
            // make sure the item doesn't already exist
            const duplicateItemCheck = SupplyItems.find(e => e.name === newItem.name)
            if (duplicateItemCheck) {
                window.alert("This is already an item")
            } else {
                addSupplyItem(newItem).then(props.history.push("/teachers"))

            }
        }
        // addSupplyItem(newItem)
    }

    // if there is an item selected to edit, change the editItem, if not, set the variables back to default
    const EditSelected = (event) => {
        if (parseInt(event.target.value) !== 0) {
            setEditItem(event.target.value)
        } else {
            setEditItem(0)
            setEditMode(false)
            setType(0)
            setNewItemName("")
            setPackage(false)
        }
    }
    // if the edit Item changed, then get then input the values in the form
    useEffect(() => {
        const ItemToEdit = SupplyItems.find(e => e.id === parseInt(editItem))
        if (ItemToEdit) {
            setEditMode(true)
            setNewItemName(ItemToEdit.name)
            setPackage(ItemToEdit.packaging)
            setType(ItemToEdit.typeId)
        }
    }, [editItem])

    // adding a new type
    const saveType = () => {
        const newSupplyType = {
            type: newType
        }
        console.log(newSupplyType)
        addSupplyType(newSupplyType).then(setType(newSupplyType.type))
    }


    return (
        <>
            <div className="h1Background">
            <h1 >Add or Edit an Item</h1>
            </div>
            <div className="AddItemContainer">
                <div className="EditItemForm">
                    <div className="AddEditCard">
                        <h3>To Edit an Item</h3>

                        <fieldset>
                            <label>Select an Item</label>
                            <select id="SupplyType" value={editItem} className="form-control" onChange={EditSelected}>
                                <option value="0">Select an Item</option>
                                {SupplyItems.map(e => (
                                    <option key={e.id} value={e.id}>
                                        {e.name}
                                    </option>
                                ))}
                            </select>
                        </fieldset>
                    </div>
                </div>

                <div className="AddItemForm">
                    <div className="AddEditCard">
                        <h3> To Add an Item</h3>

                        <fieldset>


                            <label>Select Type </label>
                            <select value={Type} id="SupplyType" className="form-control" onChange={TypeChangeField}>

                                <option value="0">Select Type</option>
                                {SupplyTypes.map(e => (
                                    <option key={e.id} value={e.id}>
                                        {e.type}
                                    </option>
                                ))}
                            </select>
                            <label> <strong>OR</strong> Add a New Type if needed</label>

                            <input onChange={addingNewTypeChangeField}></input>
                            <Button onClick={evt => {
                                saveType()
                            }}>Add Type</Button>
                            <br></br>
                            <br></br>
                        </fieldset>
                        <fieldset>
                            <label>Name of New Item</label>
                            <input value={newItemName} onChange={newItemNameChangeField}></input>
                        </fieldset>
                        <fieldset>
                            <p>Is it sold in Packs?</p>
                            <label>Yes</label>
                            <input type="checkbox" ref={Packaging} value={Package} onChange={PackageChangeField}></input>
                            <label> No</label>
                            <input type="checkbox"></input>
                        </fieldset>

                        <Button type="submit" onClick={evt => {
                            evt.preventDefault()
                            SaveItem()
                        }}> Save Item </Button>
                    </div>
                </div>
            </div>
        </>
    )
}