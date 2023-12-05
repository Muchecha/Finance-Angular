import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar.component';

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';



@NgModule(
    {
        declarations: [SidebarComponent],
        imports: [CommonModule,
            FormsModule,
            MatButtonModule,
            MatDividerModule,
            MatIconModule,
            MatSidenavModule],
        exports: [SidebarComponent]
    }
)

export class SidebarModule { }