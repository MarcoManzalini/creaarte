import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTecnicaComponent } from './show-tecnica.component';

describe('ShowTecnicaComponent', () => {
  let component: ShowTecnicaComponent;
  let fixture: ComponentFixture<ShowTecnicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowTecnicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowTecnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
