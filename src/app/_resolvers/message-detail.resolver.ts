import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { MessageService } from '../_services/message.service';
import { of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Message } from '../_models/message';

@Injectable()
export class MessageDetailResolver implements Resolve<Message> {
  constructor(private messageService: MessageService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Message> {
    
    return this.messageService.getMessage(route.params['id']).pipe(
      catchError(error => {
          this.router.navigate(['/messages']);
          return of(null);
      })
    );
  }
}
