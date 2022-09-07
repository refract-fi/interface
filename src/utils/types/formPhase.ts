export enum FormPhases {
  CREATE = 'CREATE',
  REVIEW = 'REVIEW',
  GENERATING = 'GENERATING',
  COMPLETED = 'COMPLETED',
}

export interface IFormPhase {
  phase: FormPhases;
  showParams: boolean;
  // formID: string;
}
