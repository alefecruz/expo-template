import { IFieldLabelProps } from '@/libs/form/components/FieldLabel';
import { IFieldTextInputProps } from '@/libs/form/components/FieldTextInput';

export type IFields = {
  fieldTextInputProps?: IFieldTextInputProps;
  fieldLabelProps?: IFieldLabelProps;
};

export type IFieldRegistred = Omit<IFields, 'fieldLabelProps'>;

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
