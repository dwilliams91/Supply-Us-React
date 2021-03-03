import React, { useContext } from "react"
import { SupplyItemContext } from "../../DataProviders/SupplyItemProvider"
import { Form, Col, Row } from "react-bootstrap"
export const ItemSearch = () => {
    const { searchTerms, setSearchTerms } = useContext(SupplyItemContext)
    return (
        <>
            {/* <Form.Group as={Row}> */}
                <Col sm="5">
                <Form.Label>Search by Name</Form.Label>
                </Col>
                <Col sm="">
                    <Form.Control size="sm" type="text" placeholder="search to filter dropdown" onKeyUp={
                        (keyEvent) => {
                            setSearchTerms(keyEvent.target.value)
                        }
                    }>
                    </Form.Control>
                </Col>
            {/* </Form.Group> */}

        </>
    )
}