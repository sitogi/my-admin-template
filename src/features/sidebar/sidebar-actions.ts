import { createAction } from '@reduxjs/toolkit';

const FEATURE = 'sidebar';

// eslint-disable-next-line import/prefer-default-export
export const setVisible = createAction<boolean>(`${FEATURE}/setVisible`);
