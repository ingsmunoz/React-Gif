import { render, screen } from "@testing-library/react"
import { GitExpertApp } from "../GitExpertApp"

describe('Pruebas en <GitExpertApp/>', () => {

    test('Pruebas para la funcionalidad de onAddCategory().', () => {
        render( <GitExpertApp/> );
        screen.debug();
    })
})