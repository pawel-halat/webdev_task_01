export interface Road {
  fid: number;
  idsec: number;
  evnk: string;
  ennk: string;
  len: number;
  name: string;
  eemi_grade?: {
    gw?: number;
    twgeb?: number;
    twofs?: number;
    twrio?: number;
    twsub?: number;
    tweben?: number;
    sub_type_grades?: Record<string, number>;
  };
  grade?: number;
  evaluation_type?: string;
}
