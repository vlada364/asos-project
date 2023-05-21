import CategoryHeader from "../CategoryHeader";
import {render,getByText,screen,fireEvent} from "@testing-library/react";
import * as router from "react-router";

describe('CategoryHeader',()=>{
    it('should render category list correctly',()=>{
        const clothCategory = [
            { id: 1, name: 'Category 1', path: 'category1' },
            { id: 2, name: 'Category 2', path: 'category2' },

        ];
        const spy=jest.fn();
        jest.spyOn(router,'useNavigate').mockImplementation(()=>spy);
        const openMenu = jest.fn();
        const closeMenu = jest.fn();
        const changeId = jest.fn();
        const navigateMock = jest.fn();



        const { getByText } = render(
            <CategoryHeader
                isMenuOpen={false}
                idCategories={null}
                clothCategory={clothCategory}
                closeMenu={closeMenu}
                changeId={changeId}
                openMenu={openMenu}
            />,
            {wrapper:router.MemoryRouter}
        );

        const category1 = screen.getByText('Category 1');
        fireEvent.mouseOver(category1);
        fireEvent.click(category1);

        expect(openMenu).toHaveBeenCalledTimes(1);
        expect(changeId).toHaveBeenCalledWith(1);
        expect(spy).toHaveBeenCalledWith('../category1');

    });
});