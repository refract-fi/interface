export enum FormPhases {
  CREATE = 'CREATE',
  GENERATING = 'GENERATING',
  COMPLETED = 'COMPLETED',
}

export interface IFormPhase {
  phase: FormPhases;
  showParams: boolean;
}
