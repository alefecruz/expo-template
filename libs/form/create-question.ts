// import { IFieldBalanceValue } from '@/libs/form/components/FieldBalanceValue';
// import { IFieldDatePicker } from '@/libs/form/components/FieldDatePicker';
// import { IFieldLabelProps } from '@/libs/form/components/FieldLabel';
// import { IFieldLinkProps } from '@/libs/form/components/FieldLink';
// import { IFieldSelectItemProps } from '@/libs/form/components/FieldSelectItem';
// import { IFieldTextInputProps } from '@/libs/form/components/FieldTextInput';

export type IFields = {
  // fieldTextInputProps?: IFieldTextInputProps;
  // fieldLabelProps?: IFieldLabelProps;
  // fieldLinkProps?: IFieldLinkProps;
  // fieldDatePickerProps?: IFieldDatePicker;
  // fieldSelectItemProps?: IFieldSelectItemProps;
  // fieldBalanceValueProps?: IFieldBalanceValue;
};

export type IFieldRegistred = Omit<IFields, 'fieldLabelProps' | 'fieldLinkProps'>;

export type IQuestion = {
  label?: string;
  orientation?: 'row' | 'column';
  width?: '18%' | '20%' | '25%' | '30%' | '40%' | '50%' | '75%' | '80%' | '100%';
  fields: IFields[];
  hideRequiredSymbol?: boolean;
  isCenter?: boolean;
  dependsOn?: (fn: (fieldName: string | string[] | undefined) => any) => boolean;
  isOmitLabelSpace?: boolean;
};

class Question {
  public label?: string;
  public isLightLabel?: boolean;
  public orientation?: IQuestion['orientation'];
  public width?: IQuestion['width'];
  public fields: IFields[];
  public hideRequiredSymbol?: boolean;
  public isCenter?: boolean;
  public isOmitLabelSpace?: boolean;
  public dependsOn?: (fn: (fieldName: string | string[] | undefined) => any) => boolean;

  constructor({
    label,
    orientation,
    fields,
    dependsOn,
    hideRequiredSymbol,
    width,
    isCenter,
    isOmitLabelSpace,
  }: IQuestion) {
    this.label = label;
    this.orientation = orientation;
    this.fields = fields;
    this.width = width;
    this.isCenter = isCenter;
    this.hideRequiredSymbol = hideRequiredSymbol;
    this.dependsOn = dependsOn;
    this.isOmitLabelSpace = isOmitLabelSpace;
  }
}

export const createQuestion = (data: IQuestion) => new Question(data);
