import {EStatus} from '../../enums/ETodo.enums/EStatus.enum';

export type TTodo = {
  id: string;
  todo: string;
  status: EStatus;
  created_at: Date;
};
