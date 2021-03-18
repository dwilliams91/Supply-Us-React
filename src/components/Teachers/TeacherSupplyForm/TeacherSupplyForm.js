import React, { useContext, useEffect, useRef, useState } from "react"
import { ClassListSupplyItemContext } from "../../DataProviders/ClassListSupplyItemProvider"
import { SupplyItemContext } from "../../DataProviders/SupplyItemProvider"
import { SupplyTypeContext } from "../../DataProviders/SupplyTypeProvider"
import { ClassListContext } from "../../DataProviders/ClassListProvider"
import { ItemSearch } from "./ItemSearch"
import "./TeacherSupply.css"
import { Form, Row, Col, Button } from "react-bootstrap"
import { PackageTypeContext } from "../../DataProviders/PackageTypeProvider"

export const TeacherSupplyForm = (props) => {
    // getting the items from the providers
    const { SupplyTypes, getSupplyTypes } = useContext(SupplyTypeContext)
    const { SupplyItems, searchTerms, getSupplyItems, getFilterbyTypeSupplyItems } = useContext(SupplyItemContext)
    const { addClassListSupplyItem,getClassListSupplyItem } = useContext(ClassListSupplyItemContext)
    const { classLists, getClassLists } = useContext(ClassListContext)
    const { packageTypes, getPackageTypes } = useContext(PackageTypeContext)

    // defining the type and Item variables
    const [Type, setType] = useState(0)
    const [Item, setItem] = useState(0)
    const [packaging, setPackaging]=useState(0)
    const [ItemName, setItemName] = useState("")
    const [filteredSupplyItems, setFilteredSupplyItems] = useState([])
    const [description, setDescription] = useState("")
    const [ItemQuantity, setItemQuantity] = useState("")
    // SET UP STATE VARIABLE FOR NUMBER SET TO EMPTY STRING
    const className = props.location.state.chosenClassName
    const classId = props.location.state.chosenClass.id

    // initial render
    useEffect(() => {
        getClassLists()
            .then(getSupplyTypes)
            .then(getSupplyItems)
            
            // .then(getClassListSupplyItem(classId))
    }, [])

    
    // check to see if the type bar has changed, if it has set the type
    const TypeChangeField = (event) => {
        getFilterbyTypeSupplyItems(event.target.value)
    }


    // check to see if the item bar has change, if it has change the item, but not to zero
    const ItemChangeField = (event) => {
        let ItemSelected = parseInt(event.target.value)
        if (ItemSelected !== 0) {
            setItem(ItemSelected)
            getPackageTypes(event.target.value)
        } else {
            setItem(1)
        }
    }

    const NumberChangeField = (e) => {
        if (e.target.value) {
            if (isNaN(e.target.value) !== true) {
                setItemQuantity(e.target.value)
            }
            else {
                window.alert("Please only put a number")
            }
        } else {
            setItemQuantity("")
        }
    }

    const DescriptionChangeField = (e) => {
        setDescription(e.target.value)
    }
    const PackageChangeField = (e) => {
        setPackaging(e.target.value)
    }
    
    const SaveItem = () => {
        const newItem = {
            number: parseInt(ItemQuantity),
            supplyItemId: parseInt(Item),
            description: description,
            classListId: parseInt(classId),
            packaging: parseInt(packaging)
        }
        // console.log(newItem)
        if (parseInt(newItem.supplyItemId) !== 0) {
            addClassListSupplyItem(newItem, classId)
            .then(()=>getFilterbyTypeSupplyItems(0))
        } else {
            window.alert("Please select an Item")

        }
    }
    // this changes the values of the number and the description whenever one of them is changed
    
    

    return (
        <>
            <div className="SupplyFormContainer">
                <div className="borderAround">
                    <Form.Group>
                        <Row>
                            <Col sm="">
                                <Form.Label>Can't find what you are looking for? Narrow the list down by selecting a type or searching.</Form.Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="5">
                                <Form.Label> Search by Type</Form.Label>
                            </Col>
                            <Col sm="">
                                <Form.Control className="Align-Left" size="sm" as="select" id="SupplyType" onChange={TypeChangeField}>
                                    <option value="0">Select Type</option>
                                    {SupplyTypes.map(e => (
                                        <option key={e.id} value={e.id}>
                                            {e.type}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Col>
                        </Row>
                        <Row>
                            <ItemSearch></ItemSearch>
                        </Row>


                    </Form.Group>
                </div>
                <Form.Group>
                    <Row className="addPadding">
                        <Col sm="5">
                            <h5>Select an Item</h5>
                            {/* <Form.Label ><strong>Select an Item</strong></Form.Label> */}
                        </Col>
                        <Col sm="">
                            <Form.Control size="sm" as="select" name="Item" value={Item} id="SupplyItem" onChange={ItemChangeField} >
                                <option value="0">Select Item</option>
                                {SupplyItems.map(e => (
                                    <option key={e.id} value={e.id}>
                                        {e.name}
                                    </option>
                                ))}
                            </Form.Control>
                        </Col>
                    </Row>

                </Form.Group>
                <div className="borderAround">
                    <Form.Group>
                        <Row>
                        <Col sm="">
                                <Form.Control className="Align-Left" size="sm" as="select" value={packaging} id="SupplyType" onChange={PackageChangeField}>
                                    <option value="0">Select Packaging</option>
                                    {packageTypes.map(e => (
                                        <option key={e.id} value={e.id}>
                                            {e.type}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="5">
                                <Form.Label>{ItemName.name}</Form.Label>
                            </Col>
                            <Col sm="">
                                <Form.Control size="sm" type="text" name="number" value={ItemQuantity} onChange={NumberChangeField}>
                                </Form.Control>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="4">
                                <Form.Label>Description</Form.Label>
                            </Col>
                            <Col sm="">
                                <Form.Control size="sm" as="textarea" name="description" placeholder="Example: Red binders, 3 ring," value={description} onChange={DescriptionChangeField}>
                                </Form.Control>
                            </Col>
                        </Row>
                        <Col sm="">
                            <Form.Label>Here is where you can add any specific information. If they need three binders, the description is where you put the colors or the size</Form.Label>
                        </Col>
                    </Form.Group>
                </div>

                <Button type="submit" onClick={evt => {
                    evt.preventDefault()
                    SaveItem()
                    setItem(0)
                    setType(0)
                    setItemQuantity("")
                    setPackaging(0)
                    setItemName("")
                    setDescription("")
                }}> Save Item </Button>
            </div>
        </>
    )
}