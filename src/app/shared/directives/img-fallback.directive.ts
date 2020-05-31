import { Directive, Input, ElementRef, HostListener } from '@angular/core';

const defaultFallback = '/assets/no-image.png';

@Directive({
    selector: 'img[fallback]',
})
export class ImgFallbackDirective {
    @Input() fallback: string;

    @HostListener('error')
    onError() {
        this.ref.nativeElement.src = this.fallback || defaultFallback;
    }

    constructor(private ref: ElementRef<HTMLImageElement>) {}
}
