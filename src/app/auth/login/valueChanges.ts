import { FormGroup } from '@angular/forms';

// tslint:disable-next-line: prefer-const
let formErrors = {
    email: '',
    password:''
};

// tslint:disable-next-line: prefer-const
let validationMessages = {
    email : {
        required: 'Email is required',
        email:'Please Enter A Valid Email'
    },
    password : {
        required: 'Password is required.',
        minlength: 'Password must be at least 6 characters long.',

    },


};

export function onValueChanged(data: any, loginForm: FormGroup) {
    if (!loginForm) { return; }
    const form = loginForm;
    for (const field in formErrors) {
        if (formErrors.hasOwnProperty(field)) {
            // clear previous error message (if any)
            formErrors[field] = '';
            const control = form.get(field);
            if (control && control.dirty && !control.valid) {
                const messages = validationMessages[field];
                for (const key in control.errors) {
                    if (control.errors.hasOwnProperty(key)) {
                        formErrors[field] += messages[key] + ' ';
                    }
                }
            }
        }
    }
    return formErrors;
}
