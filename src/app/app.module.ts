import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './AppRoutingModule';
/*import { DashboardComponent } from './dashboard/dashboard.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { SettingsComponent } from './settings/settings.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SkillsComponent } from './trainings/skills/skills.component';
import { EntitiesComponent } from './trainings/entities/entities.component';
import { IntegrationComponent } from './trainings/integration/integration.component';
import { TeamComponent } from './settings/team/team.component';
import { PersonalComponent } from './settings/personal/personal.component';
import { HumanAssistComponent } from './settings/human-assist/human-assist.component';
import { ConversationsComponent } from './conversations/conversations.component';
import { MembersComponent } from './settings/team/members/members.component';
import { AgentTeamsComponent } from './settings/team/agent-teams/agent-teams.component';
import { UserComponent } from './user/user.component';
*/
import { HumanAssistComponent,MainNavigationComponent,PersonalComponent,SettingsComponent,TeamComponent,AgentTeamsComponent,MembersComponent,TrainingsComponent,UserComponent,WelcomePageComponent } from './index';



@NgModule({

   imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  
  declarations: [
    AppComponent,
    TrainingsComponent,
    SettingsComponent,
    WelcomePageComponent,
    MainNavigationComponent,
    HumanAssistComponent,
    TeamComponent,
    PersonalComponent,
    UserComponent,
    AgentTeamsComponent,
    MembersComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
