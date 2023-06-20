import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest,} from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
      this.loadingService. isLoading.next(true)


      return next.handle(req).pipe(
        finalize(
          ()=>{
            this.loadingService.isLoading.next(false)
          }
        )
      );
  }
}

