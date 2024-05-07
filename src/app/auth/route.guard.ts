import { CanActivateFn, Router } from '@angular/router';

export const routeGuard: CanActivateFn = (route, state) => {

  const route2 = new Router

  if(localStorage.getItem('nome') === 'Ralf'){
    return true
  }else{
    route2.navigateByUrl('/page1')
    return false;
  }

};
