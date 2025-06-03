import { Routes } from '@angular/router';
import { HelloWordComponent } from './hello-word/hello-word.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { CustmerListComponent } from './custmer-list/custmer-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FilhoAComponent } from './filho-a/filho-a.component';
import { FilhoBComponent } from './filho-b/filho-b.component';
import { CustomersDetailsComponent } from './customers-details/customers-details.component';
import { guardiaoGuard } from './guardiao.guard';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { WeatherComponent } from './weather/weather.component';
import { PipesComponent } from './pipes/pipes.component';

export const routes: Routes = [
    {path: 'hello-world', title: 'hello World', component: HelloWordComponent, children: [
        {path: 'filho-a', title: 'filho A', component: FilhoAComponent},
        {path: 'filho-b', title: 'filho B', component: FilhoBComponent}
    ]},
    {path: 'data-binding', title: 'Data Binding', component: DataBindingComponent, canActivate: [guardiaoGuard]},
    {path: 'directives', title: 'Directives', component: DirectivesComponent},
    {path: 'customers', title: 'Customers', component: CustmerListComponent},
    {path:'customer/:id', title: 'Customer Details', component: CustomersDetailsComponent},
    {path: 'reactive-form', title: 'Reactive Form', component: ReactiveFormComponent},
    {path:'template-form', title: 'template Form', component: TemplateFormComponent},
    {path: 'weather', title: 'clima', component: WeatherComponent},
    {path: 'pipes', title: 'pipes', component: PipesComponent},

    {path: '', redirectTo: '/directives', pathMatch: 'full'},
    {path: '**', title: 'Page Not found', component: PageNotFoundComponent}
];
