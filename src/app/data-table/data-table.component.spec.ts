import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataTableComponent } from './data-table.component';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../data.service';
import { DataServiceMock } from '../data.service.mock';
import { DataTableItemComponent } from './data-table-item/data-table-item.component';

describe('DataTableComponent', () => {
  let component: DataTableComponent;
  let fixture: ComponentFixture<DataTableComponent>;
  let dataServiceMock: jest.Mocked<DataServiceMock>;

  beforeEach(() => {


    TestBed.configureTestingModule({
      declarations: [DataTableComponent, DataTableItemComponent],
      providers: [
        { provide: DataService, useValue: DataServiceMock },
        FormBuilder,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DataTableComponent);
    component = fixture.componentInstance;

    component.ngOnInit();

    component.form.patchValue({
      size: 10,
      interval: 1000,
      additionalIds: '',
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
