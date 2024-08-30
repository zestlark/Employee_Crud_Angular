import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class Customvalidator {
  static valueMatch(control: AbstractControl): ValidationErrors | null {
    // console.log(control);

    const password = control.get('empPassword')?.value;
    const confirmpassword = control.get('empConfirmPassword')?.value;
    console.log(password, confirmpassword);

    if (password != confirmpassword) {
      return { match: true };
    } else {
      return null;
    }
  }

  static valueMatch2(inpRef: any): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      console.log(inpRef);
      return null;
    };
  }

  static valueMatch3(...inpRef: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const match =
        control.get(inpRef[0])?.value == control.get(inpRef[0])?.value;

      return match ? null : { match: true };
    };
  }
}
