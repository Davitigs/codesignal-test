import { render } from '@testing-library/angular';
import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';

import { DataService } from './data.service';
import { DataServiceMock } from './data.service.mock';
import { ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  it('should create the app', async () => {
    const component = await render(AppComponent, {
      declarations: [DataTableComponent],
      providers: [DataService],
    });
    expect(component).toBeTruthy();
  });

  it('should render DataTableComponent', async () => {


    const dataTableComponentMock = {
    } as jest.Mocked<DataTableComponent>;

    const component = await render(AppComponent, {
      declarations: [DataTableComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: DataService, useClass: DataServiceMock },
        { provide: DataTableComponent, useValue: dataTableComponentMock },
      ],
    });

    expect(component.fixture.componentInstance).toBeTruthy();
  });
});
