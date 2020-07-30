import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessageListComponent } from './messages/message-list/message-list.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { Routes } from '@angular/router';
import { MessageDetailResolver } from './_resolvers/message-detail.resolver';
import { MessageDetailComponent } from './messages/message-detail/message-detail.component';
import { PostDetailResolver } from './_resolvers/post-detail.resolver';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';


export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [],
    children: [
        { path: '', component: HomeComponent },
         { path: 'members', component: MemberListComponent },
         { path: 'messages', component: MessageListComponent },
         { path: 'posts', component: PostListComponent},
         { path: 'members/:id', component: MemberDetailComponent, resolve: {member: MemberDetailResolver}},
         { path: 'messages/:id', component: MessageDetailComponent, resolve: {message: MessageDetailResolver}},
         { path: 'posts/:id', component: PostDetailComponent, resolve: {post: PostDetailResolver}}
    ] },

    { path: '**', redirectTo: '', pathMatch: 'full' }
    ];
