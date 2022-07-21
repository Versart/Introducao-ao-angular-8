import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, NgModel } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReplacePipe } from "../shared/pipe/replace.pipe";
import { StarComponent } from "../shared/component/star/star.component";
import { StarModule } from "../shared/component/star/star.module";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";
import { PipeModule } from "../shared/pipe/app-pipe.module";

@NgModule({
    declarations:[
        CourseListComponent,
        CourseInfoComponent,
    ],
    imports: [
        StarModule,
        CommonModule,
        FormsModule,
        PipeModule,
        RouterModule.forChild([
            {
                path: 'courses', component: CourseListComponent
              },
              {
                path:'courses/info/:id', component: CourseInfoComponent
              },
        ]
        )
    ]
})
export class CourseModule {

}
