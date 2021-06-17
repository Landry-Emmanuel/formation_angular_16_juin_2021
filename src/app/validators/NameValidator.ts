import { Directive, forwardRef } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from "@angular/forms";
@Directive(
    {
        selector: "[nameValid][formControl]|[nameValid][ngModel]", 
        providers: [
            {
                provide: NG_VALIDATORS, 
                useExisting: forwardRef(
                    ()=>{
                        return NameValidator;
                    }
                ), 
                multi: true
            }
        ]
    }
)
export class NameValidator{
    constructor(){}

    validate( control:AbstractControl ):ValidationErrors|null{
        const str:string = control.value as string;
        if( str.length > 10 )
            return {tooLong:true};

        return null;
    }
}