import React, { useContext, useEffect, useState, useRef } from "react"
import { SupplyItemContext } from "../../DataProviders/SupplyItemProvider"
import { SupplyTypeContext } from "../../DataProviders/SupplyTypeProvider"
import "./TeacherAddItem.css"
import { Button } from "react-bootstrap"
import { PackageTypeContext } from "../../DataProviders/PackageTypeProvider"

export const TeacherAddItem = (props) => {
    // set up all the things I will need
    const { SupplyItems, getSupplyItems, addSupplyItem, updateItem } = useContext(SupplyItemContext)
    const { SupplyTypes, getSupplyTypes, addSupplyType } = useContext(SupplyTypeContext)
    const { packageTypes, getPackageTypes } = useContext(PackageTypeContext)

    const [Type, setType] = useState(0)
    const [newItemName, setNewItemName] = useState("")
    const [Package_name, setPackageName] = useState("")
    const [packageList, setPackageList] = useState([])
    const [editItem, setEditItem] = useState(0)
    let counter = 0
    const [editMode, setEditMode] = useState(false)
    const [newType, setNewType] = useState("")

    // initial render
    useEffect(() => {
        getSupplyItems()
            .then(() => getSupplyTypes())
    }, [])

    useEffect(() => {
        const ItemToEdit = SupplyItems.find(e => e.id === parseInt(editItem))

        if (ItemToEdit) {
            setPackageList(packageTypes)
            setEditMode(true)
            setNewItemName(ItemToEdit.name)
            setType(ItemToEdit.type.id)

        }
    }, [editItem])



    // if any field changes, change the variable so the state will always be ready
    const TypeChangeField = (event) => {
        setType(event.target.value)
    }
    const newItemNameChangeField = (event) => {
        setNewItemName(event.target.value)
    }

    const PackageChangeField = (event) => {
        setPackageName(event.target.value)
    }
    const addingNewTypeChangeField = (event) => {
        setNewType(event.target.value)
    }
    const addPackage = () => {

        let new_packaging = {
            id: counter,
            type: Package_name
        }
        setPackageList(packageList => [...packageList, new_packaging])
        setPackageName("")
    }
    //    save an item
    const SaveItem = () => {
        // if its in edit mode, change the item, if not, create a new one
        if (editMode) {
            const updatedItem = {
                id: editItem,
                supplyType: parseInt(Type),
                name: newItemName,
                package_types: packageList
            }
            setPackageList([])
            updateItem(updatedItem).then(props.history.push("/teachers"))
        } else {
            const newItem = {
                supplyType: parseInt(Type),
                name: newItemName,
                package_types: packageList
            }
            // make sure the item doesn't already exist
            const duplicateItemCheck = SupplyItems.find(e => e.name === newItem.name)
            if (duplicateItemCheck) {
                window.alert("This is already an item")
            }
            else if (newItem.supplyType === 0) {
                window.alert("Please select a type")
            }
            else {
                setPackageList([])
                addSupplyItem(newItem).then(props.history.push("/teachers"))

            }
        }

        // addSupplyItem(newItem)
    }

    // if there is an item selected to edit, change the editItem, if not, set the variables back to default
    const EditSelected = (event) => {
        if (parseInt(event.target.value) !== 0) {
            console.log(event.target.value)
            getPackageTypes(parseInt(event.target.value))
                .then(setPackageList)
            setEditItem(event.target.value)

        } else {
            setEditItem(0)
            setEditMode(false)
            setType(0)
            setNewItemName("")
        }
    }


    // adding a new type
    const saveType = () => {
        console.log(newType)
        if (newType == "") {
            window.alert("please type in a new type")
        }
        else {
            const newSupplyType = {
                type: newType
            }
            addSupplyType(newSupplyType).then(setType(newSupplyType.type))
        }
    }

    const removePackagingType = (id) => {
        const newList = packageList.filter((item) => item.id !== id)
        setPackageList(newList)
    }

    const myPackageCard = (singleItem) => {
        return (
            <>
                <span key={"singleItems" + singleItem.id}><p>{singleItem.type}</p><button onClick={() => removePackagingType(singleItem.id)}>delete</button></span>
            </>
        )
    }
    const onlyOnePackageType = (singleItem) => {
        return (
            <>
                <span key={"singleItems" + singleItem.id}><p>{singleItem.type}</p></span>
            </>
        )
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
                            <select value={editItem} className="form-control" onChange={EditSelected}>
                                <option value="0">Select an Item</option>
                                {SupplyItems.map(e => (
                                    <option key={"supplyItem" + e.id} value={e.id}>
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
                                    <option key={"supplyType" + e.id} value={e.id}>
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

                            <label> Package</label>
                            <input value={Package_name} onChange={PackageChangeField}></input>
                            <Button type="submit" onClick={evt => {
                                evt.preventDefault()
                                addPackage()

                            }}> Add packaging </Button>
                        </fieldset>
                        <div>
                            {packageList.length > 1 ? packageList.map(singleItem => myPackageCard(singleItem)) : packageList.map(singleItem => onlyOnePackageType(singleItem))}

                        </div>

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