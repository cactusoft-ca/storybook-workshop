import { Observable, of, throwError } from 'rxjs';
import { CactusModel } from './cactus.model';

// Usually, we would use a mocking lib, like typemoq.
export class CactusApiSuccessMock {
  public getAll(): Observable<CactusModel[]> {
    return of([
      {
        id: '4',
        age: 10.8,
        avatar: 'https://loremflickr.com/320/240/cactuses',
        createdAt: new Date(2022, 11, 9).toDateString(),
        name: 'Cardón cactus',
        ownerCity: 'Montréal',
        ownerCountry: 'Canada',
        ownerUsername: 'CactusLover2001',
      },
      {
        id: '2',
        age: 10.8,
        avatar: 'https://loremflickr.com/320/240/cactuses',
        createdAt: new Date(2022, 11, 9).toDateString(),
        name: 'beaver-tail cactus',
        ownerCity: 'Montréal',
        ownerCountry: 'Canada',
        ownerUsername: 'CactusLover2001',
      },
      {
        id: '5',
        age: 10.8,
        avatar: 'https://loremflickr.com/320/240/cactuses',
        createdAt: new Date(2022, 11, 9).toDateString(),
        name: 'Discocactus',
        ownerCity: 'Montréal',
        ownerCountry: 'Canada',
        ownerUsername: 'CactusLover2001',
      },
      {
        id: '7',
        age: 10.8,
        avatar: 'https://loremflickr.com/320/240/cactuses',
        createdAt: new Date(2022, 11, 9).toDateString(),
        name: 'senita cactus',
        ownerCity: 'Montréal',
        ownerCountry: 'Canada',
        ownerUsername: 'CactusLover2001',
      },
      {
        id: '8',
        age: 10.8,
        avatar: 'https://loremflickr.com/320/240/cactuses',
        createdAt: new Date(2022, 11, 9).toDateString(),
        name: 'saguaro',
        ownerCity: 'Montréal',
        ownerCountry: 'Canada',
        ownerUsername: 'CactusLover2001',
      },
      {
        id: '41',
        age: 10.8,
        avatar: 'https://loremflickr.com/320/240/cactuses',
        createdAt: new Date(2022, 11, 9).toDateString(),
        name: 'silver torch cactus',
        ownerCity: 'Montréal',
        ownerCountry: 'Canada',
        ownerUsername: 'CactusLover2001',
      },
      {
        id: '334',
        age: 10.8,
        avatar: 'https://loremflickr.com/320/240/cactuses',
        createdAt: new Date(2022, 11, 9).toDateString(),
        name: 'Simpson hedgehog cactus',
        ownerCity: 'Montréal',
        ownerCountry: 'Canada',
        ownerUsername: 'CactusLover2001',
      },
    ] as CactusModel[]);
  }
}

export class CactusApiEmptyMock {
  public getAll(): Observable<CactusModel[]> {
    return of([] as CactusModel[]);
  }
}

export class CactusApiErrorMock {
  public getAll(): Observable<CactusModel[]> {
    return throwError(
      new Error('An error occurred while retreiving the cactuses.')
    );
  }
}
