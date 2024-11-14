import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTecnicheComponent } from './lista-tecniche.component';

describe('ListaTecnicheComponent', () => {
  let component: ListaTecnicheComponent;
  let fixture: ComponentFixture<ListaTecnicheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaTecnicheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTecnicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
