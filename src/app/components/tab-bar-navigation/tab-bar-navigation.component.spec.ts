import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabBarNavigationComponent } from './tab-bar-navigation.component';

describe('TabBarNavigationComponent', () => {
  let component: TabBarNavigationComponent;
  let fixture: ComponentFixture<TabBarNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabBarNavigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabBarNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
