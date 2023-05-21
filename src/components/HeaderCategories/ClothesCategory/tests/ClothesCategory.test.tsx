import ClothesCategory from "../ClothesCategory";
import { render, screen,fireEvent} from "@testing-library/react";



describe('ClothesCategory', () => {
    const funcCloseMenu=jest.fn();
    const categoryItemsConst = [
        { id: 1, name: 'Shirt' },
        { id: 2, name: 'Pants' },
        { id: 3, name: 'Shoes' },
    ];
    it('should render the component with category items', () => {

        render(<ClothesCategory isMenuOpen={true} closeMenu={funcCloseMenu} categoryItems={categoryItemsConst}/>);

        const component=screen.getByTestId('pop-up');
        expect(component).toBeInTheDocument();
        expect(component).toHaveClass('opacityCategory');
    });
   it('calls function closeMenu when mouse leaves',()=>{
       render(<ClothesCategory isMenuOpen={true} closeMenu={funcCloseMenu} categoryItems={categoryItemsConst}/>);

       const component=screen.getByTestId('pop-up');
       fireEvent.mouseLeave(component);
       expect(funcCloseMenu).toHaveBeenCalledTimes(1)

   })

})