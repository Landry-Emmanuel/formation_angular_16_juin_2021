import { HttpClient } from "@angular/common/http";
import { Directive, forwardRef, Injectable } from "@angular/core";
import { AbstractControl, NG_ASYNC_VALIDATORS, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({providedIn: 'root'})
@Directive(
    {
        selector: "[haddockValid][input]|[haddockValid][ngModel]", 
        providers: [
            {
                provide: NG_ASYNC_VALIDATORS, 
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
    
    constructor( private _http:HttpClient){
    }

    validate( control:AbstractControl ):Observable<ValidationErrors|null>{
        return this._http.get<string[]>(environment.api.haddock).pipe( 
            map(
                (swears:string[])=>{
                    const str:string = control.value as string; 

                    if( swears.map((s=>s.toLowerCase())).includes(str.toLowerCase()) )
                        return {forbidden:true};
            
                    return null;
                }
            )
        )
    }
}