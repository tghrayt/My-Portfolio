import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AnimationComponent } from './animation.component';
import { AnimationService } from './animation.service';
import { AnimationDirective } from './animation.directive';


@NgModule({
  imports: [
    CommonModule,
    ScrollingModule
  ],
  declarations: [ AnimationComponent, AnimationDirective ],
  exports: [ AnimationComponent, AnimationDirective ]
})
export class AnimationModule { }
