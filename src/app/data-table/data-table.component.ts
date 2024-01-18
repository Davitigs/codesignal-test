import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map, Subject, takeUntil, tap } from 'rxjs';

import { DataService } from '../data.service';
import { DataElement } from '../data.model';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, OnDestroy{
  data: DataElement[] = [];
  form!: FormGroup;
  destroy$ = new Subject<void>();
  isLoading: boolean = false;

  constructor(private dataService: DataService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.initForm();
    this.fetchData();
  }

  trackByfn(index: number, item: DataElement): number | null {
    if (!item) return null;
    return item.uid;
  }

  initForm(): void {
    this.form = this.fb.group({
      size: 10,
      interval: 1000,
      additionalIds: '',
    });

    this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.fetchData();
    });
  }

  fetchData(): void {
    const { size, interval, additionalIds } = this.form.value;
    this.dataService
      .fetchData(!!size ? size : 1000, !!interval ? interval : 1000, additionalIds)
      .pipe(
        takeUntil(this.destroy$),
        map(data => data.slice(-10).map((item, index) => ({...item, id: additionalIds.replace(/\s/g,'').split(',')[index] || item.id })))
      )
      .subscribe((result: DataElement[]) => {
        this.isLoading = false;
        this.data = result;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
