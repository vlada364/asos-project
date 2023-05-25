import FormTextInput from "../FormTextInput/FormTextInput";
import {render, screen, fireEvent} from "@testing-library/react";


describe('FormTextInput', () => {

    it('should render component with label and value', () => {
        const handleChangeInput = jest.fn();

        render(<FormTextInput name={'email'} label={'email'} value={'email@address'} tooltipText={'valid'}
                              handleChangeInput={handleChangeInput}/>);
        const labelElement = screen.getByText('email');
        expect(labelElement).toBeInTheDocument();

        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveValue('email@address');
    });

    it('should change input value', () => {
        const handleChangeInput = jest.fn();
        render(<FormTextInput name={'email'} label={'email'} value={'email@address'} tooltipText={'valid'}
                              handleChangeInput={handleChangeInput}/>);
        const inputElement = screen.getByRole('textbox')
        fireEvent.change(inputElement, {target: {value: 'updateduser'}});
        expect(handleChangeInput).toHaveBeenCalled();
    });

    it('should render div if hint exist', () => {
        const handleChangeInput = jest.fn();

        const hint = 'hint';
        render(<FormTextInput name={'email'} label={'email'} value={'email@address'} tooltipText={'valid'}
                              handleChangeInput={handleChangeInput} hint={hint}/>);
        const hintElement = screen.getByText(hint);
        expect(hintElement).toBeInTheDocument();
        const divElement = screen.getByTestId('note');
        expect(divElement).toBeInTheDocument();
    });
});