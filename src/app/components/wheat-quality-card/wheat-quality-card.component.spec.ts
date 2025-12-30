import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheatQualityCardComponent } from './wheat-quality-card.component';

describe('WheatQualityCardComponent', () => {
  let component: WheatQualityCardComponent;
  let fixture: ComponentFixture<WheatQualityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WheatQualityCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WheatQualityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
