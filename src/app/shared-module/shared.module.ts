import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { DefaultMaterialModule } from '../material.module';

@NgModule({
  imports: [DefaultMaterialModule],
  exports: [HeaderComponent, FooterComponent],
  declarations: [HeaderComponent, FooterComponent],
  providers: [],
})
export class SharedModule { }
