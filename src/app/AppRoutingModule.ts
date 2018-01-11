import { NgModule, Optional, SkipSelf } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HumanAssistComponent, MainNavigationComponent, PersonalComponent, SettingsComponent, TeamComponent, AgentTeamsComponent, MembersComponent, TrainingsComponent, UserComponent, WelcomePageComponent } from './index';

const appRoutes: Routes = [
    { path: 'user', component: UserComponent, pathMatch: 'full' },
    { path: 'welcome', component: WelcomePageComponent,
        children: [
            { path: 'training', component: TrainingsComponent, pathMatch: 'full' },
            {
                path: 'settings', component: SettingsComponent,
                children: [
                    {
                        path: 'team', component: TeamComponent,
                        children: [
                            { path: 'agent', component: AgentTeamsComponent, pathMatch: 'full' },
                            { path: 'member', component: MembersComponent, pathMatch: 'full' }
                        ]
                    },
                    { path: 'personal', component: PersonalComponent, pathMatch: 'full' },
                    { path: 'assist', component: HumanAssistComponent, pathMatch: 'full' }
                ]
            }
        ]
    },
    { path: '', redirectTo: 'user', pathMatch: 'full' },
];

@NgModule( {
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: true,

            }
        )
    ],
    exports: [
        RouterModule
    ],
    //    providers: [
    //      CanDeactivateGuard,
    //      SelectivePreloadingStrategy
    //    ]
})
export class AppRoutingModule { }