import { HttpInterceptorFn } from '@angular/common/http';

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {

  const token = localStorage.getItem("token");
  let requestToSend = req;
  if(token){
    const Headers = req.headers.set('Authorization', 'Token '+ token);
    requestToSend = req.clone({
      headers:Headers
    })
  }

  return next(requestToSend);
};
