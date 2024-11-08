import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorniciComponent } from './cornici.component';

describe('CorniciComponent', () => {
  let component: CorniciComponent;
  let fixture: ComponentFixture<CorniciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorniciComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorniciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
