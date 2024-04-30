import { ITextProps } from '@/components/atoms/Text';

type Modify<T, R> = Pick<T, Exclude<keyof T, keyof R>> & R;

export interface IFields {
  // fieldTextInputProps?: Modify<IFieldTextInput, { defaultValue: string | string[] }>;

  fieldLabelProps?: ITextProps;
  // fieldButton?: IButton;
}

export type IQuestion = {
  label?: string;
  orientation?: 'row' | 'column';
  fields: IFields[];
  dependsOn?: (fn: (fieldName: string | string[] | undefined) => any) => boolean;
};

class Question {
  public label?: string;
  public orientation?: 'row' | 'column';
  public fields: IFields[];
  public dependsOn?: (fn: (fieldName: string | string[] | undefined) => any) => boolean;

  constructor({ label, orientation, fields, dependsOn }: IQuestion) {
    this.label = label;
    this.orientation = orientation;
    this.fields = fields;
    this.dependsOn = dependsOn;
  }
}

export const createQuestion = (data: IQuestion) => new Question(data);
