import {FormGroup, FormBuilder, FormControl} from '@angular/forms';
import * as _ from 'lodash';

export class FormGeneric {
    group: FormGroup;

    constructor(private fb?: FormBuilder, private formModel?: any) {
        if (fb && formModel) {
            this.group = this.fb.group(this.formModel);
        }
    }

    populateForm(object: any) {
        this.group.patchValue(object);
    }

    assign(object: any) {
        const value = this.group.value;
        _.assign(object, value);
        this.group.reset();
    }
}
