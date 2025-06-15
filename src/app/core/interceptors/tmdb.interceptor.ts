import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { environment } from '@environments/environment';
import { TranslateService } from '@ngx-translate/core';

const baseUrl = environment.api.url;
const apiKey = environment.api.key;
const token = environment.api.token;

export const tmdbInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.startsWith(baseUrl)) {
    // Clone headers and add Authorization Bearer token
    const headers = req.headers.set('Authorization', `Bearer ${token}`);

    // Append query params api_key and language
    let params = req.params;
    params = params.set('api_key', apiKey);

    // Clone the request with updated headers and params
    const clonedRequest = req.clone({
      headers,
      params,
    });

    return next(clonedRequest);
  }

  return next(req);
};
