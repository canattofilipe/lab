import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueIdService } from './../../services/unique-id/unique-id.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LikeWidGetComponent } from './like-widget.component';

describe(LikeWidGetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidGetComponent> = null;
  let component: LikeWidGetComponent = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LikeWidGetComponent],
      providers: [UniqueIdService],
      imports: [FontAwesomeModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidGetComponent);
    component = fixture.componentInstance;
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  it('Should auto generate ID when id input property is missing', () => {
    // force lifecicle start
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it('Should NOT generate ID when id input property is present', () => {
    const someId = 'someId';
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });

  it(`#${LikeWidGetComponent.prototype.like.name} should trigger emission when called`, () => {
    spyOn(component.liked, 'emit');
    fixture.detectChanges();
    component.like();
    expect(component.liked.emit).toHaveBeenCalled();
  });
});
