import { Directive,Input } from '@angular/core';
import { Validator, FormArray, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[checkboxValidator]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: CheckboxValidatorDirective, multi: true }
    ]
})
export class CheckboxValidatorDirective implements Validator {
    @Input()
    checkboxValidator: string;
    constructor() { }

    // 判断多选框是否至少有一个值
    validate(control: FormArray): { [key: string]: any } {

        let flag:boolean = false;

        control.controls.forEach(control => {
            if (control.value) {
                flag = true;
            }
        })

        return flag? null : { checkboxValidator: false};
    }

}
