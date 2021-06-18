import { Directive, forwardRef } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from "@angular/forms";
@Directive(
    {
        selector: "[haddockValid][input]|[haddockValid][ngModel]", 
        providers: [
            {
                provide: NG_VALIDATORS, 
                useExisting: forwardRef(
                    ()=>{
                        return HaddockValidator;
                    }
                ), 
                multi: true
            }
        ]
    }
)
export class HaddockValidator{
    constructor(){}

    validate( control:AbstractControl ):ValidationErrors|null{
        
        const swears:string[] = [
            "Tonnerre de Brest", 
            "Moule à gauffres", 
            "Anthropopithèque", 
            "Ectoplasme"
        ];

        const str:string = control.value as string; 

        if( swears.map((s=>s.toLowerCase())).includes(str.toLowerCase()) )
            return {forbidden:true};

        return null;
    }
}