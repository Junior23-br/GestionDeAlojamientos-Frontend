import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from './atoms/shared/atoms/button/button';
import { Input } from './atoms/shared/atoms/input/input';
import { Icon } from './atoms/shared/atoms/icon/icon';
import { Label } from './atoms/shared/atoms/label/label';



@NgModule({
  declarations: [
    Button,
    Input,
    Icon,
    Label
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
