import { MediaType } from '../../core/models/media-type.model';

export interface MediaDetailsConfig {
  type: MediaType;
  service: any;
  routeParam: string;
  titleField: string;
  dateField: string;
  dateLabel: string;
  route: string;
  hasRuntime?: boolean;
  customDetails?: Array<{
    labelKey: string;
    valueField: string;
    pipe?: string;
    pipeArgs?: any[];
  }>;
}
