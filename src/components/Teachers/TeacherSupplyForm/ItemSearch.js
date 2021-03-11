import React, { useContext, useState } from "react"
import { SupplyItemContext } from "../../DataProviders/SupplyItemProvider"
import { Form, Col, Row, Button } from "react-bootstrap"
export const ItemSearch = () => {
    const { searchTerms, setSearchTerms,getFilterbyNameSupplyItems  } = useContext(SupplyItemContext)
    const [search, setSearch] = useState("")

    const searchChangeField=(keyEvent)=>{
        setSearch(keyEvent.target.value)
    }

    const searchItem=()=>{
        
        let searchItem={
            searchTerm: search
        }
        getFilterbyNameSupplyItems(searchItem)
    }
    return (
        <>
            {/* <Form.Group as={Row}> */}
                <Col sm="5">
                <Form.Label>Search by Name</Form.Label>
                </Col>
                <Col sm="">
                <Form.Control size="sm" type="text" name="number" value={search} onChange={searchChangeField}>
                                </Form.Control>
                    <Button type="submit" onClick={evt => {
                    evt.preventDefault()
                    searchItem()
                    setSearch("")
                    
                }}> Search Item </Button>
                </Col>
            {/* </Form.Group> */}

        </>
    )
}