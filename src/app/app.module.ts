import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DevExtremeModule } from 'devextreme-angular';
import { MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MessageListComponent } from './messages/message-list/message-list.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageCardComponent } from './messages/message-card/message-card.component';
import { PostCardComponent } from './posts/post-card/post-card.component';
import { MessageDetailComponent } from './messages/message-detail/message-detail.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { appRoutes } from './routes';
import { MessageDetailResolver } from './_resolvers/message-detail.resolver';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { PostDetailResolver } from './_resolvers/post-detail.resolver';

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
      MemberDetailResolver,
      MessageDetailResolver,
      PostDetailResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
