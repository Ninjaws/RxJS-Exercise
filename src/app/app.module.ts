import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DevExtremeModule } from 'devextreme-angular';
import { MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MessageListComponent } from './message-list/message-list.component';
import { PostListComponent } from './post-list/post-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MemberService } from './_services/member.service';
import { MemberCardComponent } from './member-card/member-card.component';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MessageCardComponent } from './message-card/message-card.component';
import { PostCardComponent } from './post-card/post-card.component';
import { MessageDetailComponent } from './message-detail/message-detail.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { appRoutes } from './routes';

@NgModule({
   declarations: [
      AppComponent,
      MessageListComponent,
      PostListComponent,
      NavBarComponent,
      HomeComponent,
      MemberListComponent,
      MemberDetailComponent,
      MemberCardComponent,
      MessageCardComponent,
      PostCardComponent,
      MemberDetailComponent,
      MessageDetailComponent,
      PostDetailComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      DevExtremeModule,
      HttpClientModule,
      MatCardModule,
      MatRadioModule,
      FormsModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
     // MemberDetailResolver

   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
