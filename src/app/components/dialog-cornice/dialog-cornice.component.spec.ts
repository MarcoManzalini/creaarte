import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCorniceComponent } from './dialog-cornice.component';

describe('DialogCorniceComponent', () => {
  let component: DialogCorniceComponent;
  let fixture: ComponentFixture<DialogCorniceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogCorniceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogCorniceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
