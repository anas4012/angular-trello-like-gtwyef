import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { BoardService } from './services/board.service';
import { BoardComponent } from './board/board.component';
import { RoutingModule } from './routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    RoutingModule,
  ],
  declarations: [
    AppComponent,
    BoardComponent,
  ],
  bootstrap: [AppComponent],
  providers: [BoardService],
})
export class AppModule {}
