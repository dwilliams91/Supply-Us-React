import React, { useContext, useEffect, useRef, useState } from "react"
import { ClassListSupplyItemContext } from "../../DataProviders/ClassListSupplyItemProvider"
import { SupplyItemContext } from "../../DataProviders/SupplyItemProvider"
import { SupplyTypeContext } from "../../DataProviders/SupplyTypeProvider"
import { ClassListContext } from "../../DataProviders/ClassListProvider"
import { ItemSearch } from "./ItemSearch"
import "./TeacherSupply.css"
import { Form, Row, Col, Button } from "react-bootstrap"

export const TeacherSupplyForm = (props) => {
    // getting the items from the providers
    const { SupplyTypes, getSupplyTypes } = useContext(SupplyTypeContext)
    const { SupplyItems, searchTerms, getSupplyItems } = useContext(SupplyItemContext)
    const { addClassListSupplyItem } = useContext(ClassListSupplyItemContext)
    const { classLists, getClassLists } = useContext(ClassListContext)

    // defining the type and Item variables
    const [Type, setType] = useState(0)
    const [Item, setItem] = useState(0)
    const [ItemName, setItemName] = useState("")
    const [packageType, setPackType] = useState("Number of")
    const [filteredSupplyItems, setFilteredSupplyItems] = useState([])
    const [ItemNumber, setItemNumber] = useState(0)
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
    }, [])



    // check to see if the type bar has changed, if it has set the type
    const TypeChangeField = (event) => {
        setType(event.target.value)
    }
    // re-rendering when the type changes. If the type is not 0, filter the item bar
    useEffect(() => {
        const selectTypeParsed = parseInt(Type)
        if (selectTypeParsed === 0) {
            setFilteredSupplyItems(SupplyItems)
        } else {
            setFilteredSupplyItems(SupplyItems.filter(e => e.typeId === selectTypeParsed))
        }
        // console.log(Type)
    }, [Type, SupplyItems])

    // check to see if the item bar has change, if it has change the item, but not to zero
    const ItemChangeField = (event) => {
        let ItemSelected = parseInt(event.target.value)
        console.log("Item Selected", ItemSelected)
        if (ItemSelected !== 0) {
            setItem(ItemSelected)
        } else {
            setItem(1)
        }
    }

    // re-render when there is a change in the item. Find the item to render on the dom by the number input button
    useEffect(() => {
        if (Item !== 0) {
            setItemName(SupplyItems.find(e => e.id == parseInt(Item)))

        }
    }, [Item])

    // re-render when there is a change in item name, check to see if the item comes in packaging
    useEffect(() => {
        if (ItemName.packaging === true) {
            setPackType("Packs of ")
        } else {
            setPackType("Number of ")
        }
        // console.log(packageType)

    }, [ItemName])

    // Save the item
    const SaveItem = () => {


        const newItem = {
            number: ItemQuantity,
            supplyItemId: Item,
            description: description,
            classListId: classId
        }
        console.log(newItem)
        if (parseInt(newItem.supplyItemId) !==0){
            addClassListSupplyItem(newItem).then(() => setItemQuantity(""))
        } else {
            window.alert("Please select an Item")

        }
    }
    // this changes the values of the number and the description whenever one of them is changed
    const NumberChangeField = (e) => {
        console.log(e.target.value)
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

    //   this is the search functionality
    useEffect(() => {
        if (searchTerms !== "") {
            const subset = SupplyItems.filter(singleItem => singleItem.name.toLowerCase().includes(searchTerms.toLowerCase()))
            setFilteredSupplyItems(subset)
        } else {
            setFilteredSupplyItems(SupplyItems)
        }

    }, [searchTerms, SupplyItems])

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
                            <Form.Control className="Align-Left" size="sm" as="select" value={Type} id="SupplyType" onChange={TypeChangeField}>
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
                            <Form.Control size="sm" as="select" value={Item} id="SupplyItem" onChange={ItemChangeField} >
                                <option value="0">Select Item</option>
                                {filteredSupplyItems.map(e => (
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
                        <Col sm="5">
                            <Form.Label>{packageType} {ItemName.name}</Form.Label>
                        </Col>
                        <Col sm="">
                            <Form.Control size="sm" type="text " value={ItemQuantity} onChange={NumberChangeField}>
                            </Form.Control>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="4">
                            <Form.Label>Description</Form.Label>
                        </Col>
                        <Col sm="">
                            <Form.Control size="sm" as="textarea" placeholder="Example: Red binders, 3 ring," value={description} onChange={DescriptionChangeField}>
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
                    setItemNumber(0)
                    setItemName("")
                    setDescription("")
                }}> Save Item </Button>
            </div>
        </>
    )
}