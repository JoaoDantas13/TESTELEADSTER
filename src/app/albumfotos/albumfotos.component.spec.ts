import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumfotosComponent } from './albumfotos.component';

describe('AlbumfotosComponent', () => {
  let component: AlbumfotosComponent;
  let fixture: ComponentFixture<AlbumfotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumfotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumfotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
