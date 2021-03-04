import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  elem: any;

  constructor(elem:ElementRef) {
  
   }

  @HostListener("mouseenter") onMouseEnter(){
    this.textDeco("lightblue")
  }

  @HostListener("mouseleave") onMouseLeave(){
    this.textDeco("None")
  }

  private textDeco(action:string){
    this.elem.nativeElement.style.backgroundColor=action;

  }
}


