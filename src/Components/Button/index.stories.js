import React from 'react';
import Button from './index';

export default { title: 'Button' };

export const normalButton = () => <Button>Hello Button</Button>;

export const primaryColor = () => <Button color="primary">Hello Button</Button>;

export const secondaryColor = () => <Button color="secondary">Hello Button</Button>;

export const smallSize = () => <Button size="small">Hello Button</Button>;

export const mediumSize = () => <Button size="medium">Hello Button</Button>;

export const largeSize = () => <Button size="large">Hello Button</Button>;
