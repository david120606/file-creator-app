import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileCreatorComponent } from './file-creator.component';

describe('FileCreatorComponent', () => {
  let component: FileCreatorComponent;
  let fixture: ComponentFixture<FileCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
