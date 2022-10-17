import { screen, render } from "@testing-library/react";

import Form from "./Form";

describe('<Form />', () => {

    it('has a first name label', () => {
        render(<Form />)

        const element = screen.getByTestId('Firstname');

        expect(element.innerHTML).toBe('Firstname');
    });

    it('has a last name label', () => {
        render(<Form />)

        const element = screen.getByTestId('Lastname');

        expect(element.innerHTML).toBe('Lastname');
    });

    it('has a email label', () => {
        render(<Form />)

        const element = screen.getByTestId('Email');

        expect(element.innerHTML).toBe('Email');
    });

    it('has a bio label', () => {
        render(<Form />)

        const element = screen.getByTestId('Bio');

        expect(element.innerHTML).toBe('Bio');
    });

});