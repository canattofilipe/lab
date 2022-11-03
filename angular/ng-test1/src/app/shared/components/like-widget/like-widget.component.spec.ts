import { UniqueIdService } from '../../services/unique-id/unique-id.service';
import { LikeWidGetComponent } from './like-widget.component';

describe(LikeWidGetComponent.name, () => {
  let component: LikeWidGetComponent = null;

  beforeEach(() => {
    component = new LikeWidGetComponent(new UniqueIdService());
  });

  it('', () => {});
});
