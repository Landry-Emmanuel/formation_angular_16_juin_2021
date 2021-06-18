import { Directive, forwardRef } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from "@angular/forms";
@Directive(
    {
        selector: "[nameValid][input]|[nameValid][ngModel]", 
        providers: [
            {
                provide: NG_VALIDATORS, 
                useExisting: forwardRef(
                    ()=>{
                        return DescValidator;
                    }
                ), 
                multi: true
            }
        ]
    }
)
export class DescValidator{
    constructor(){}

    validate( control:AbstractControl ):ValidationErrors|null{
        const str:string = control.value as string;
        if( str.length < 10 )
            return {tooShort:true};
            
        if( str.length > 100 )
            return {tooLong:true};

        return null;
    }
}