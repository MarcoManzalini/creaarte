import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLavoriComponent } from './lista-lavori.component';

describe('ListaLavoriComponent', () => {
  let component: ListaLavoriComponent;
  let fixture: ComponentFixture<ListaLavoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaLavoriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaLavoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
