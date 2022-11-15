import { LinearComponent } from './linear/linear.component';
import { LinearModule } from './linear.module';
import { LinearChartData } from './linear/model/data.model';
import { TestBed } from '@angular/core/testing';

import { AdaptService } from './adapt.service';
import { data } from '../mock/data';

describe('AdaptService', () => {
  let service: AdaptService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinearComponent],
      imports: [LinearModule],
    });
    service = TestBed.inject(AdaptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should adapt the mocked data', () => {
    const linearChartData: LinearChartData[] = service.adapt(data);
    expect(linearChartData.length).toBe(3);
  });
});
