import {render} from "@testing-library/react";
import FooterColumnInformation from "../FooterColumnInformation/FooterColumnInformation";
import {MemoryRouter} from "react-router";

describe('FooterColumnInformation',()=>{
    it('renders component correctly with props',()=>{
        render(<FooterColumnInformation label={'HELP & INFORMATION'} url={'/customer-care'}/>, {wrapper: MemoryRouter})
    })
})