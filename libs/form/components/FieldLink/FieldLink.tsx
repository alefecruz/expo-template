import React from 'react';

import { Link, ILinkProps } from '@/components/atoms/Link';

export interface IFieldLinkProps extends ILinkProps {}

export const FieldLink = (props: IFieldLinkProps) => {
  return <Link {...props} />;
};
