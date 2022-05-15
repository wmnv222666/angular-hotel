import { NgModule } from '@angular/core';
import {MatBadgeModule,
     MatButtonModule,
     MatSidenavModule,
     MatIconModule,
     MatListModule
} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
    imports: [MatBadgeModule, MatButtonModule, MatSidenavModule, MatIconModule,
        MatToolbarModule,
        MatListModule,
        MatTabsModule,
        MatCardModule,
        MatFormFieldModule

    ],
    exports: [MatBadgeModule, MatButtonModule, MatSidenavModule, MatIconModule,
        MatToolbarModule,
        MatListModule,
        MatTabsModule,
        MatCardModule,
        MatFormFieldModule

    ]
})
export class MaterialModule { }
