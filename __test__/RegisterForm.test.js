import RegisterForm from '../components/auth/RegisterForm';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';



describe('RegisterForm', () => {
    const { getByPlaceholderText, queryByTestId, getByRole } = render(<RegisterForm />);

    const nameField = getByPlaceholderText("Name");
    const emailField = getByPlaceholderText("E-Mail");
    const phoneNumberField = getByPlaceholderText("Phone Number");
    const firstPasswordField = getByPlaceholderText("Create new password");
    const secondPasswordField = getByPlaceholderText("Re-type password");
    const submitButton = getByRole("button", { name: "REGISTER" });

    it('Disable button with valid input and button is clicked', async () => {

        fireEvent.change(nameField, { target: { value: 'Jest Testing' } });
        fireEvent.change(emailField, { target: { value: 'jest.testing@gmail.com' } });
        fireEvent.change(phoneNumberField, { target: { value: '081297915965' } });
        fireEvent.change(firstPasswordField, { target: { value: '1234' } });
        fireEvent.change(secondPasswordField, { target: { value: '1234' } });
        fireEvent.click(submitButton);

        expect(submitButton).toBeDisabled();
    })
})
