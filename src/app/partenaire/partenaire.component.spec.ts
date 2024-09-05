import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PartenaireComponent } from './partenaire.component';

describe('PartenaireComponent', () => {
  let component: PartenaireComponent;
  let fixture: ComponentFixture<PartenaireComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PartenaireComponent ],
    }).compileComponents();

    fixture = TestBed.createComponent(PartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
