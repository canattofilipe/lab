import { FormGroup } from '@angular/forms';

export function usuarioSenhaIguaisValidator(formGroup: FormGroup) {
  const username = formGroup.get('userName')?.value ?? '';
  const password = formGroup.get('password')?.value ?? '';

  if (username.trim() + password.trim()) {
    let ret = username !== password ? null : { senhaIgualUsuario: true };
    console.log(ret);
    return ret;
  } else {
    return null;
  }
}
