import React, { useContext, useState } from "react"
import { SupplyItemContext } from "../../DataProviders/SupplyItemProvider"
import { Form, Col, Row, Button } from "react-bootstrap"

export const ItemSearch = () => {
    const { searchTerms, setSearchTerms, getFilterbyNameSupplyItems } = useContext(SupplyItemContext)
    const [search, setSearch] = useState("")

    const searchChangeField = (keyEvent) => {
        setSearch(keyEvent.target.value)
    }

    const searchItem = () => {
        let searchItem = {
            searchTerm: search
        }
        getFilterbyNameSupplyItems(searchItem)
    }

    return (
        <>
            <Col sm="5">
                <Form.Label>Search by Name</Form.Label>
            </Col>
            <Col sm="">
                
                    <Form.Control size="sm" type="text" name="number" value={search} onChange={searchChangeField}>
                    </Form.Control>
                <div className="searchButtonFlex">
                    <Button size="sm" type="submit" onClick={evt => {
                        evt.preventDefault()
                        searchItem()
                        setSearch("")

                    }}> Search Item </Button>
                    <Button  size="sm" variant="secondary" type="submit" onClick={evt => {
                        evt.preventDefault()
                        searchItem()
                        setSearch("")

                    }}> reset</Button>
                </div>
            </Col>
        </>
    )
}