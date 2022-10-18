import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersHolderComponent } from './users-holder.component';

describe('UsersHolderComponent', () => {
  let component: UsersHolderComponent;
  let fixture: ComponentFixture<UsersHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersHolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
