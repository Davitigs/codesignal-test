// data.service.mock.ts

import { Observable, of } from 'rxjs';
import { DataElement } from './data.model'; // Import the DataElement class

export class DataServiceMock {
  fetchData(size: number, interval: number, additionalIds: string[]): Observable<DataElement[]> {
    // Customize the behavior of fetchData for testing
    const mockData: DataElement[] = [
      // Define your mock data based on the expected structure
      // Adjust as needed for your specific use case
      {
        uid: 1,
        id: 'MockID1',
        int: 42,
        float: 3.14,
        color: '#ff0000',
        child: { id: 'MockChildID1', color: '#00ff00' },
      },
      // Add more mock data as needed
    ];

    return of(mockData);
  }
}
