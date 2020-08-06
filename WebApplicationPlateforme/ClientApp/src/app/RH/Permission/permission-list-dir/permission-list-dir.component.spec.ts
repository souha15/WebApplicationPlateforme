import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionListDirComponent } from './permission-list-dir.component';

describe('PermissionListDirComponent', () => {
  let component: PermissionListDirComponent;
  let fixture: ComponentFixture<PermissionListDirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissionListDirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionListDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
