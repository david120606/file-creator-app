import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileSnackComponent } from './file-snack.component';

describe('FileSnackComponent', () => {
  let component: FileSnackComponent;
  let fixture: ComponentFixture<FileSnackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileSnackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileSnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
