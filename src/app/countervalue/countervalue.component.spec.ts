import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountervalueComponent } from './countervalue.component';

describe('CountervalueComponent', () => {
  let component: CountervalueComponent;
  let fixture: ComponentFixture<CountervalueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountervalueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountervalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the initial count', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toBe('0');
  });

  it('should increment the count when button is clicked', () => {
    const button = fixture.nativeElement.querySelector('button');
    button.click(); // Simulate a button click
    fixture.detectChanges(); // Update the view
    expect(component.count).toBe(1); // Check if the count increased
  });
});
