
import { FormControl, Validators, FormArray } from '@angular/forms';


export const USER = {
    firstName: new FormControl('', [Validators.required] ),
    lastName: new FormControl('', [Validators.required]),

};
