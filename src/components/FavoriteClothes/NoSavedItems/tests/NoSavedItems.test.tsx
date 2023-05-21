
import {render} from "@testing-library/react";
import NoSavedItems from "../NoSavedItems"
describe('NoSavedItems',()=>{
    it('should contain',()=>{
        render(<NoSavedItems textHead={'Sign in to sync your Saved Items across all your devices.'} text={'SIGN IN'} textBtn={'You have no Saved Items'}/>)
    })
})